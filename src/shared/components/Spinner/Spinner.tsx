import { forwardRef } from "react";
import type { SpinnerProps } from "./Spinner.types";
import { classNames } from "../utils/classNames";

const sizeMap: Record<NonNullable<SpinnerProps["size"]>, string> = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-10 h-10",
};

const colorMap: Record<NonNullable<SpinnerProps["color"]>, string> = {
  primary: "border-primary-500",
  secondary: "border-secondary-500",
  success: "border-success-500",
  danger: "border-danger-500",
  neutral: "border-neutral-500",
};

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = "md", color = "primary", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          "border-4 border-t-transparent border-solid rounded-full animate-spin",
          sizeMap[size],
          colorMap[color],
          className
        )}
        {...props}
      />
    );
  }
);

Spinner.displayName = "Spinner";

export default Spinner;