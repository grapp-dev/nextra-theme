import styles from './Hero.module.css';

import * as React from 'react';

import Link from 'next/link';

type Props = {
  readonly headline: React.ReactNode;
  readonly subtitle: React.ReactNode;
  readonly getStartedUrl?: string;
  readonly getStartedTitle?: string;
};

export const Hero = (props: Props) => {
  const {
    headline,
    subtitle,
    getStartedUrl = '/docs/getting-started',
    getStartedTitle = 'Get started',
  } = props;

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.actions}>
          <Link className={`${styles.button} ${styles.buttonFull}`} href={getStartedUrl}>
            {getStartedTitle} <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
