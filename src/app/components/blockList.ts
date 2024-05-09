import { Hero } from '.';

interface BlockComponents {
  [key: string]: React.ComponentType<any>; // O el tipo más específico si es necesario
}

export const blocks: BlockComponents = {
  hero: Hero,
};
