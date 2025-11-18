import React from "react";

interface TailwindIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

/**
 * Tailwind CSS Icon Component
 * Component SVG cho Tailwind CSS logo
 */
export const TailwindIcon: React.FC<TailwindIconProps> = ({
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
      <path
        fill="#38bdf8"
        d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.87 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 61.594 96.004 61.594c17.066 0 27.73-8.531 32-25.598-6.399 8.536-13.867 11.735-22.399 9.6-4.87-1.215-8.347-4.746-12.207-8.66C87.12 30.629 79.854 25.602 64.004 25.602zM32.004 61.594c-17.066 0-27.73 8.531-32 25.598C6.402 78.666 13.87 75.467 22.402 77.6c4.871 1.215 8.353 4.746 12.208 8.66 6.276 6.367 13.538 11.332 29.397 11.332 17.065 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66-6.275-6.366-13.537-11.331-29.397-11.331z"
      />
    </svg>
  );
};

