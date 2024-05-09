import { CollectionConfig } from 'payload/types';
import { Hero } from '../blocks';

export const Pages: CollectionConfig = {
  slug: 'paginas',
  labels: {
    singular: 'Pagina',
    plural: 'Paginas',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nombre',
      label: 'Nombre',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [Hero],
    },
  ],
};
