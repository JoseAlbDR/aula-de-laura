import * as z from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const contactFormSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: 'El nombre debe de tener al menos 2 caracteres' }),
  apellidos: z
    .string()
    .min(2, { message: 'Los apellidos deben de tener al menos 2 caracteres' })
    .optional(),
  email: z
    .string()
    .email({ message: 'El email debe de tener un formato correcto' }),
  teléfono: z
    .string()
    .regex(phoneRegex, { message: 'Formato de telefono erróneo' })
    .optional(),
  mensaje: z
    .string()
    .min(5, { message: 'El mensaje debe de tener al menos 5 caracteres' }),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;
