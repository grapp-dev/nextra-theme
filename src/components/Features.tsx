import styles from './Features.module.css';

import * as React from 'react';

import clsx from 'clsx';

type Props = React.PropsWithChildren<{
  readonly header?: React.ReactNode;
  readonly preview?: React.ReactNode;
  readonly headerPosition?: 'main' | 'list' | 'preview';
}>;

export const Features = (props: Props) => {
  const { children, header, headerPosition = 'main', preview } = props;

  return (
    <div className={clsx('mx-auto max-w-[90rem]', styles.root)}>
      {headerPosition === 'main' && header}
      <div
        className={clsx(
          styles.container,
          'grid lg:grid-cols-[var(--grapp-features-container-grid-cols)] grid-cols-1 gap-6',
        )}
      >
        {preview && (
          <div
            className={clsx(
              styles.preview,
              'relative lg:col-[var(--grapp-features-preview-column-span)]',
            )}
          >
            {headerPosition === 'preview' && header}
            {preview}
          </div>
        )}
        <div className="lg:col-[var(--grapp-features-list-column-span)]">
          {headerPosition === 'list' && header}
          <div className="grid sm:grid-cols-[var(--grapp-features-grid-cols)] grid-cols-1 gap-7">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
