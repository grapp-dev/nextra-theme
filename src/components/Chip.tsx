import styles from './Chip.module.css';

import * as React from 'react';

import clsx from 'clsx';

type Props = {
  readonly label: string;
};

export const Chip = (props: Props) => {
  const { label } = props;

  return (
    <span
      className={clsx(
        'py-1 px-3 rounded-full text-primary nx-bg-primary-100 nx-text-primary-800 dark:nx-bg-primary-400/10 dark:nx-text-primary-600 contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500',
        styles.root,
      )}
    >
      {label}
    </span>
  );
};
