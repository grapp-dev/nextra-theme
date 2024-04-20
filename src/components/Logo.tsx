import styles from './Logo.module.css';

import * as React from 'react';

type Props = {
  readonly title: string;
};

export const Logo = (props: Props) => {
  const { title } = props;

  return (
    <div className={styles.root}>
      <span className={styles.title}>{title}</span>
    </div>
  );
};
