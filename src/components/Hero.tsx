import styles from './Hero.module.css';

import * as React from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import { Blob } from './Blob';

type Props = React.PropsWithChildren<{
  readonly title: React.ReactNode;
  readonly description: React.ReactNode;
  readonly getStartedUrl?: string;
  readonly getStartedTitle?: string;
  readonly logo: React.JSXElementConstructor<any>;
}>;

export const Hero = (props: Props) => {
  const {
    title,
    description,
    getStartedUrl = '/docs/getting-started',
    getStartedTitle = 'Get started',
    logo: Logo,
    children,
  } = props;

  return (
    <div className="mx-auto max-w-[90rem] mb-10">
      <div
        className={clsx(
          'grid lg:grid-cols-[var(--grapp-hero-grid-cols)] grid-cols-1 justify-between items-center gap-10 lg:py-16 py-8',
          styles.content,
        )}
      >
        <div className="lg:col-[var(--grapp-hero-text-column-span)] z-10">
          {Logo && <Logo className={clsx('mb-6', styles.logo)} />}
          <h1 className={clsx('mb-6', styles.title)}>{title}</h1>
          <p className={clsx('mb-6', styles.description)}>{description}</p>
          <Link className={`${styles.button} ${styles.buttonFull}`} href={getStartedUrl}>
            {getStartedTitle} <span>→</span>
          </Link>
        </div>
        {children && (
          <div className="lg:col-start-[var(--grapp-hero-preview-column-start)] lg:col-[var(--grapp-hero-preview-column-span)] relative min-h-full flex justify-center items-center">
            <Blob className={styles.blob} />
            <div className={clsx('relative', styles.preview)}>{children}</div>
          </div>
        )}
      </div>
    </div>
  );
};
