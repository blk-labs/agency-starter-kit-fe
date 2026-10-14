import React, { forwardRef } from "react";
import { classNames } from "../../utils/classNames";

/**
 * @component Grid
 * A responsive grid layout component with configurable columns and gap spacing.
 *
 * @param {Object} props - Grid component props (extends HTMLDivElement attributes)
 * @param {number} [props.cols] - Number of columns: 1 | 2 | 3 | 4 | 5 | 6 | 12 (default: 1)
 * @param {string} [props.gap] - Gap size between items: 'xs' | 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
 * @param {React.ReactNode} [props.children] - Grid items
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement} Grid container element
 *
 * @example
 * <Grid cols={3} gap="md">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </Grid>
 *
 * @example
 * <Grid cols={2} gap="lg">
 *   <div>Left column</div>
 *   <div>Right column</div>
 * </Grid>
 */
export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
}

const colMap = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  12: "grid-cols-12",
};

const gapMap = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ cols = 1, gap = "md", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          "grid",
          colMap[cols],
          gapMap[gap],
          className
        )}
        {...props}
      />
    );
  }
);

Grid.displayName = "Grid";