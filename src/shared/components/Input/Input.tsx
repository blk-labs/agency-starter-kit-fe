import { forwardRef } from "react";
import type { InputProps } from "./Input.types";
import { classNames } from "../utils/classNames";

/**
 * @component Input
 * A controlled text input component with optional label, error state, and validation feedback.
 *
 * @param {Object} props - Input component props (extends HTMLInputElement attributes)
 * @param {string} [props.label] - Optional label text displayed above input
 * @param {string} [props.error] - Error message text (displays below input if provided)
 * @param {boolean} [props.disabled] - Whether input is disabled
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.type] - Input type (default: 'text')
 * @param {string} [props.value] - Input value
 * @param {(e: ChangeEvent) => void} [props.onChange] - Change handler
 * @returns {React.ReactElement} Input element with optional label and error message
 *
 * @example
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   onChange={(e) => setEmail(e.target.value)}
 * />
 *
 * @example
 * <Input
 *   label="Username"
 *   error="Username is required"
 *   disabled={isLoading}
 * />
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, disabled, className, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        {label && <label className="mb-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">{label}</label>}
        <input
          ref={ref}
          className={classNames(
            "px-3 py-2 rounded-md border text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500",
            error ? "border-danger-500 dark:border-danger-500" : "border-neutral-300 dark:border-neutral-600 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:focus:border-primary-400 dark:focus:ring-primary-400",
            className
          )}
          disabled={disabled}
          {...props}
        />
        {error && <span className="mt-1 text-xs text-danger-500 dark:text-danger-400">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;