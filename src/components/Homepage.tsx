import styles from './Homepage.module.css';

import * as React from 'react';

type Props = React.PropsWithChildren<{
  readonly hero: React.ReactNode;
  readonly preview?: string;
}>;

export const Homepage = (props: Props) => {
  const { hero, preview, children } = props;
  return (
    <>
      {hero}
      <div className={styles.root}>
        {preview ? (
          <div className={styles.preview}>
            <img src={preview} />
          </div>
        ) : null}
        {children ? <div className={styles.content}>{children}</div> : null}
      </div>
    </>
  );
};
