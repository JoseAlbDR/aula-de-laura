import { Block } from 'payload/types';

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Titulo',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Contenido',
      type: 'text',
    },
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'backgroundImage',
      label: 'Imagen de Fondo',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};
