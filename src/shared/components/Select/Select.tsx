import { forwardRef } from "react";
import type { SelectProps } from "./Select.types";
import { classNames } from "../utils/classNames";

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, disabled, className, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        {label && <label className="mb-1 text-sm font-medium text-neutral-700">{label}</label>}
        <select
          ref={ref}
          className={classNames(
            "px-3 py-2 rounded-md border text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
            error ? "border-danger-500" : "border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500",
            className
          )}
          disabled={disabled}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <span className="mt-1 text-xs text-danger-500">{error}</span>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;