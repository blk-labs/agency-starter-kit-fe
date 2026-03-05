import React, { forwardRef } from "react";
import { classNames } from "../../utils/classNames";

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "col";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around";
}

const gapMap = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
};

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = "col",
      gap = "md",
      align,
      justify,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(
          "flex",
          direction === "row" ? "flex-row" : "flex-col",
          gapMap[gap],
          align && alignMap[align],
          justify && justifyMap[justify],
          className
        )}
        {...props}
      />
    );
  }
);

Stack.displayName = "Stack";