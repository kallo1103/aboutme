import React from "react";

interface PythonIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

/**
 * Python Icon Component
 * Component SVG cho Python logo
 */
export const PythonIcon: React.FC<PythonIconProps> = ({
  className = "",
  width = 128,
  height = 128,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      width={width}
      height={height}
    >
      <linearGradient
        id="python-original-a"
        gradientUnits="userSpaceOnUse"
        x1="70.252"
        y1="1237.476"
        x2="170.659"
        y2="1151.089"
        gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
      >
        <stop offset="0" stopColor="#5A9FD4" />
        <stop offset="1" stopColor="#306998" />
      </linearGradient>
      <linearGradient
        id="python-original-b"
        gradientUnits="userSpaceOnUse"
        x1="209.474"
        y1="1098.811"
        x2="173.62"
        y2="1149.537"
        gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
      >
        <stop offset="0" stopColor="#FFD43B" />
        <stop offset="1" stopColor="#FFE873" />
      </linearGradient>
      <path
        fill="url(#python-original-a)"
        d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v10.91h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.899-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.084 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
        transform="translate(0 10.26)"
      />
      <path
        fill="url(#python-original-b)"
        d="M91.682 28.38v10.912c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.866 0-12.346 5.654-12.346 12.548v23.398c0 6.693 5.899 11.72 12.346 12.837 4.222.706 8.644 1.027 12.866 1.008 4.222-.02 8.252-.379 11.8-1.007 10.45-1.846 12.346-5.71 12.346-12.837v-10.91H63.938v-3.138h37.012c7.176 0 13.46-4.313 15.426-12.521 2.268-9.405 2.368-15.275 0-25.096-1.755-7.311-5.947-12.519-13.124-12.519H91.682zm-27.117 72.793c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
        transform="translate(0 10.26)"
      />
      <radialGradient
        id="python-original-c"
        cx="182.417"
        cy="1083.533"
        r="26.743"
        gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#B8B8B8" stopOpacity=".498" />
        <stop offset="1" stopColor="#7F7F7F" stopOpacity="0" />
      </radialGradient>
      <path
        opacity=".444"
        fill="url(#python-original-c)"
        d="M97.309 119.597c0 3.543-14.817 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.816-6.417 33.092-6.417c18.273 0 33.091 2.874 33.091 6.417z"
      />
    </svg>
  );
};


