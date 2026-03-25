import { forwardRef } from "react";
import type { ButtonProps, ButtonVariant } from "./Button.types";
import Spinner from "../Spinner/Spinner"; 
import { classNames } from "../utils/classNames";

/**
 * @component Button
 * A versatile button component with multiple variants and loading state support.
 *
 * @param {Object} props - Button component props
 * @param {React.ReactNode} props.children - Button label or content
 * @param {string} [props.variant] - Button style variant: 'primary' | 'secondary' | 'outline' | 'ghost' (default: 'primary')
 * @param {boolean} [props.loading] - Whether button is in loading state (shows spinner)
 * @param {boolean} [props.disabled] - Whether button is disabled
 * @param {string} [props.className] - Additional CSS classes
 * @param {() => void} [props.onClick] - Click handler
 * @returns {React.ReactElement} Button element
 *
 * @example
 * <Button variant="primary">Click me</Button>
 *
 * @example
 * <Button variant="secondary" loading={isLoading} onClick={handleSave}>
 *   Save
 * </Button>
 *
 * @example
 * <Button variant="outline" disabled>
 *   Disabled Action
 * </Button>
 */
const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary-500 text-neutral-50 hover:bg-primary-600 dark:hover:bg-primary-600",
  secondary: "bg-secondary-500 text-neutral-50 hover:bg-secondary-600 dark:hover:bg-secondary-600",
  outline: "border border-primary-500 text-primary-500 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-950",
  ghost: "bg-transparent text-primary-500 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-950",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", loading = false, disabled, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          "px-4 py-2 rounded-md font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          variantClasses[variant],
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Spinner size="sm" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;