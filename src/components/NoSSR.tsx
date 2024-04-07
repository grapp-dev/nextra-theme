import * as React from 'react';

import dynamic from 'next/dynamic';

const NoSSRFragment = (props: React.PropsWithChildren) => (
  <React.Fragment>{props.children}</React.Fragment>
);

export const NoSSR = dynamic(() => Promise.resolve(NoSSRFragment), {
  ssr: false,
});
