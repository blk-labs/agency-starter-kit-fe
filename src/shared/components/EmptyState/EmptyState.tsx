import { forwardRef } from "react";
import type { EmptyStateProps } from "./EmptyState.types";
import { classNames } from "../utils/classNames";

const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ title = "No data available", description, icon, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          "flex flex-col items-center justify-center p-6 text-center",
          className
        )}
        {...props}
      >
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {description && <p className="text-sm text-neutral-600">{description}</p>}
      </div>
    );
  }
);

EmptyState.displayName = "EmptyState";

export default EmptyState;