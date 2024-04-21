import styles from './SectionHeader.module.css';

import * as React from 'react';

import clsx from 'clsx';

import { Chip } from './Chip';

type Props = {
  readonly badge?: string;
  readonly title?: string;
  readonly description?: string;
};

export const SectionHeader = (props: Props) => {
  const { badge, title, description } = props;

  return (
    <div className={clsx('text-center mb-12', styles.root)}>
      {badge && (
        <div className={clsx(title && 'mb-6', 'text-center')}>
          <Chip label={badge} />
        </div>
      )}
      {title && <h2 className={clsx(styles.title, description && 'mb-4')}>{title}</h2>}
      {description && (
        <div className={clsx(styles.description, 'px-20 nx-text-gray-500 dark:nx-text-gray-400')}>
          {description}
        </div>
      )}
    </div>
  );
};
