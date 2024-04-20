import * as React from 'react';

type Props = {
  readonly className?: string;
};

export const Blob = (props: Props) => {
  const { className } = props;
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <path
        d="M60.1,-59.1C75.9,-44.4,85.1,-22.2,81.7,-3.5C78.2,15.3,62,30.6,46.3,38.7C30.6,46.8,15.3,47.7,0.5,47.2C-14.2,46.7,-28.5,44.7,-39.4,36.6C-50.2,28.5,-57.7,14.2,-55.3,2.4C-52.9,-9.4,-40.6,-18.9,-29.7,-33.6C-18.9,-48.3,-9.4,-68.2,6.4,-74.6C22.2,-81,44.4,-73.8,60.1,-59.1Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};
