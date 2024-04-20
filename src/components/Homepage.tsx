import styles from './Homepage.module.css';

import * as React from 'react';

import clsx from 'clsx';

export const Homepage = (props: React.PropsWithChildren) => {
  const { children } = props;
  return <div className={clsx('full-w', styles.root)}>{children}</div>;
};
