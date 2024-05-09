import { blocks } from '@/app/components/blockList';
import { LayoutElement } from '@/payload-types';
import React from 'react';

interface Props {
  layout: LayoutElement[];
}

const RenderBlocks: React.FC<Props> = ({ layout }) => {
  return (
    <>
      {layout.map((block, i) => {
        const BlockComponent = blocks[block.blockType];
        if (BlockComponent) {
          return <BlockComponent key={i} {...block} />;
        }
        return null;
      })}
    </>
  );
};

export default RenderBlocks;
