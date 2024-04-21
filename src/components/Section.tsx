import styles from './Section.module.css';

import * as React from 'react';

import clsx from 'clsx';

type Props = React.PropsWithChildren<{
  readonly className?: string;
}>;

export const Section = (props: Props) => {
  const { children, className } = props;

  return <div className={clsx('mx-auto max-w-[90rem]', styles.root, className)}>{children}</div>;
};
