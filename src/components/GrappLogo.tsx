import * as React from 'react';

export const GrappLogo = (props: React.SVGProps<any>) => {
  return (
    <svg fill="none" viewBox="0 0 801 175" {...props}>
      <path
        fill="url(#a)"
        d="M35.1 35V0h105v35h-105ZM.1 140V35h35v105H.1Zm105 0v-35h-35V70h70v70h-35Zm-70 35v-35h70v35h-70Zm130.2 0V0h105v35h35v35h-35v70h35v35h-35v-35h-35v-35h-35v70h-35Zm35-105h68.6V35h-68.6v35Zm130.2 105V35h35V0h70v35h35v140h-35v-70h-70v70h-35Zm35-105h70V36.4h-70V70Zm130.2 105V0h105v35h35v35h-35v35h-70v70h-35Zm35-105h68.6V35h-68.6v35Zm130.2 105V0h105v35h35v35h-35v35h-70v70h-35Zm35-105h68.6V35h-68.6v35Z"
      />
      <defs>
        <linearGradient id="a" x1={-35} x2={836} y1={206} y2={206} gradientUnits="userSpaceOnUse">
          <stop stopColor="#EE0979" />
          <stop offset={1} stopColor="#FF6A00" />
        </linearGradient>
      </defs>
    </svg>
  );
};
