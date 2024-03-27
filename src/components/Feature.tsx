import * as React from 'react';

type Props = {
  readonly title: string;
  readonly description: React.ReactNode;
};

export const Feature = (props: Props) => {
  const { title, description } = props;

  return (
    <li>
      <strong>{title}</strong> {description}
    </li>
  );
};
