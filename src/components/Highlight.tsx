import * as React from 'react';

export const Highlight = (props: React.PropsWithChildren) => {
  const { children } = props;
  return <span>{children}</span>;
};
