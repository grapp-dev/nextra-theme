import styles from './Features.module.css';

import * as React from 'react';

type Props = React.PropsWithChildren<{
  readonly title?: string;
}>;

export const Features = (props: Props) => {
  const { children, title = 'Key Features' } = props;

  return (
    <div className={styles.root}>
      <h3>{title}</h3>
      <ul className={styles.features}>{children}</ul>
    </div>
  );
};
