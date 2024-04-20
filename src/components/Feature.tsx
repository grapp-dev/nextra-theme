import * as React from 'react';

type Props = {
  readonly title: string;
  readonly description: string;
  readonly icon?: React.JSXElementConstructor<any>;
  readonly color?: string;
};

export const Feature = (props: Props) => {
  const { title, description, icon: Icon, color } = props;

  return (
    <div className="p-2">
      {Icon && (
        <div
          className="flex items-center justify-center rounded-full w-12 h-12"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon fill={color} />
        </div>
      )}
      <h4 className="text-base mt-6 mb-3 nx-font-semibold nx-text-gray-900 dark:nx-text-gray-100">
        {title}
      </h4>
      <span className="nx-text-gray-500">{description}</span>
    </div>
  );
};
