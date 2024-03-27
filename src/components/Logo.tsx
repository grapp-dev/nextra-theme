import styles from './Logo.module.css';

import * as React from 'react';

type Props = {
  readonly image: React.JSXElementConstructor<any>;
  readonly title: string;
};

export const Logo = (props: Props) => {
  const { image: Image, title } = props;

  return (
    <div className={styles.root}>
      <Image className={styles.logo} />
      <span className={styles.title}>{title}</span>
    </div>
  );
};
