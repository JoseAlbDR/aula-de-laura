import React from 'react';
import serializeLexicalRichText from './serializeLexicalRichTest';

interface Props {
  className?: string;
  content: {
    root: {
      children: any[];
    };
  };
  customClassNames?: Record<string, string>;
}

export default function ({ className, content, customClassNames }: Props) {
  if (!content?.root?.children) return '';

  return (
    <div className={`${[className].filter(Boolean).join(' ')} richText`}>
      {serializeLexicalRichText({
        children: content.root.children,
        customClassNames,
      })}
    </div>
  );
}
