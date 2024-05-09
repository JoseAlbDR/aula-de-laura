import React from 'react';

import RenderBlocks from '../../../../utils/RenderBlocks';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { Page } from '../../../../payload-types';

const payload = await getPayload({ config: configPromise });
interface Props {
  params: { slug: string };
}

export const generateStaticParams = async () => {
  const data: { docs: Page[] } = await payload.find({
    collection: 'pages',
    limit: 100,
  });

  const pages = data.docs.map((page) => ({
    slug: page.slug,
  }));

  return pages.map((page) => ({ slug: [page.slug] }));
};

const getPage = async (slug: string): Promise<Page> => {
  console.log({ slug });

  const page: { docs: Page[] } = await payload.find({
    collection: 'pages',
    where: { slug: { in: slug } },
  });

  console.log({ page });

  return page.docs[0];
};

const MainPage = async ({ params }: Props) => {
  console.log({ params: params.slug });

  const page = await getPage(params.slug);

  console.log(page);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <RenderBlocks layout={page.layout} />;
    </div>
  );
};

export default MainPage;
