import styles from './Features.module.css';

import * as React from 'react';

import clsx from 'clsx';

import { Chip } from './Chip';

type Props = React.PropsWithChildren<{
  readonly title?: string;
  readonly preview?: React.ReactNode;
}>;

export const Features = (props: Props) => {
  const { children, title = 'Features', preview } = props;

  return (
    <div className={clsx('mx-auto max-w-[90rem]', styles.root)}>
      <div className="grid lg:grid-cols-[var(--grapp-features-container-grid-cols)] grid-cols-1 items-center gap-6">
        {preview && (
          <div className="relative lg:col-[var(--grapp-features-preview-column-span)]">
            {preview}
          </div>
        )}
        <div className="lg:col-[var(--grapp-features-list-column-span)]">
          <div className="text-center lg:mb-10 mb-4">
            <Chip label={title} />
          </div>
          <div className="grid sm:grid-cols-[var(--grapp-features-grid-cols)] grid-cols-1 gap-7">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
