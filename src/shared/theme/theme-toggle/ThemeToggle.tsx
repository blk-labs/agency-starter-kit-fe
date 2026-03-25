import { useState } from "react";
import { useTheme } from "../useTheme";
import type { ThemeToggleProps } from "./ThemeToggle.types";

/**
 * @component ThemeToggle
 * A dropdown toggle to switch between light, dark, and system theme preferences.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement} Theme toggle dropdown component
 *
 * @example
 * return <ThemeToggle />;
 *
 * @example
 * return <ThemeToggle className="ml-4" />;
 */
const options = [
  { value: "light", label: "Light", icon: "☀️" },
  { value: "dark", label: "Dark", icon: "🌙" },
  { value: "system", label: "System", icon: "💻" },
] as const;

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const active = options.find((o) => o.value === theme) ?? options[2];

  return (
    <div className={`relative inline-block ${className ?? ""}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700"
      >
        <span>{active.icon}</span>
        {active.label}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-md border border-neutral-200 bg-neutral-50 shadow dark:border-neutral-700 dark:bg-neutral-800">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setTheme(opt.value);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 ${
                theme === opt.value ? "font-semibold bg-neutral-100 dark:bg-neutral-700" : ""
              }`}
            >
              <span>{opt.icon}</span>
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}