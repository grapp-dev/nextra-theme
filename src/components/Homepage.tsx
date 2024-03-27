import styles from './Homepage.module.css';

import * as React from 'react';

type Props = {
  readonly hero: React.ReactNode;
  readonly preview: string;
  readonly features: React.ReactNode;
};

export const Homepage = (props: Props) => {
  const { hero, preview, features } = props;
  return (
    <>
      {hero}
      <div className={styles.content}>
        <div className={styles.preview}>
          <img src={preview} />
        </div>
        {features}
      </div>
    </>
  );
};
