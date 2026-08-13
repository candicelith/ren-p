import type { SVGProps } from "react";

export function Ornament({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="120"
      height="16"
      viewBox="0 0 120 16"
      aria-hidden="true"
      focusable="false"
      className={`text-rose-deep/60 dark:text-blush/50 ${className}`}
      {...props}
    >
      <line
        x1="0"
        y1="8"
        x2="50"
        y2="8"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M60 1 L67 8 L60 15 L53 8 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <line
        x1="70"
        y1="8"
        x2="120"
        y2="8"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}
