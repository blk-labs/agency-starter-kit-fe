import { forwardRef } from "react";
import type { TextareaProps } from "./Textarea.types";
import { classNames } from "../utils/classNames";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, disabled, className, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        {label && <label className="mb-1 text-sm font-medium text-neutral-700">{label}</label>}
        <textarea
          ref={ref}
          className={classNames(
            "px-3 py-2 rounded-md border text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed resize-none",
            error ? "border-danger-500" : "border-neutral-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500",
            className
          )}
          disabled={disabled}
          {...props}
        />
        {error && <span className="mt-1 text-xs text-danger-500">{error}</span>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;