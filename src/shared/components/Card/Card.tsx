import { forwardRef } from "react";
import type { CardProps } from "./Card.types";
import { classNames } from "../utils/classNames";

/**
 * @component Card
 * A container component for grouping related content with consistent styling and border.
 *
 * @param {Object} props - Card component props (extends HTMLDivElement attributes)
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement} Card container element
 *
 * @example
 * <Card>
 *   <h2>Card Title</h2>
 *   <p>Card content goes here</p>
 * </Card>
 *
 * @example
 * <Card className="p-8">
 *   <h3>Custom Styled Card</h3>
 *   <p>With custom padding</p>
 * </Card>
 */
const Card = forwardRef<HTMLDivElement, CardProps>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(
        "bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-sm p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;