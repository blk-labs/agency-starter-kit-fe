import React from "react";
import { classNames } from "../../utils/classNames";

export interface PageHeaderProps
  extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  actions,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <header
      className={classNames(
        "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
        className
      )}
      {...props}
    >
      <div>
        <h1 className="text-3xl font-semibold text-neutral-900">
          {title}
        </h1>

        {description && (
          <p className="mt-1 text-sm text-neutral-600">
            {description}
          </p>
        )}
      </div>

      {actions && <div>{actions}</div>}
    </header>
  );
}