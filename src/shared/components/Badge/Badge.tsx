import { forwardRef } from "react";
import type { BadgeProps } from "./Badge.types";
import { classNames } from "../utils/classNames";

const colorMap: Record<NonNullable<BadgeProps["color"]>, string> = {
  primary: "bg-primary-500 text-neutral-50",
  secondary: "bg-secondary-500 text-neutral-50",
  success: "bg-success-500 text-neutral-50",
  danger: "bg-danger-500 text-neutral-50",
  neutral: "bg-neutral-300 text-neutral-900",
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, color = "primary", className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={classNames(
          "px-2 py-0.5 rounded-full text-xs font-semibold",
          colorMap[color],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;