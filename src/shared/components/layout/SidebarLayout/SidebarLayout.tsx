import React from "react";
import { classNames } from "../../utils/classNames";

/**
 * @component SidebarLayout
 * A flexible two-column layout with a collapsible sidebar for responsive navigation.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.sidebar - Sidebar content
 * @param {React.ReactNode} props.children - Main content area
 * @param {string} [props.sidebarWidth] - Sidebar width class (default: 'w-64')
 * @param {string} [props.className] - Additional CSS classes for the container
 * @returns {React.ReactElement} Sidebar layout component
 *
 * @example
 * const Sidebar = () => <nav>Navigation Items</nav>;
 * const MainContent = () => <main>Page Content</main>;
 * return (
 *   <SidebarLayout sidebar={<Sidebar />}>
 *     <MainContent />
 *   </SidebarLayout>
 * );
 */
export interface SidebarLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  sidebar: React.ReactNode;
  sidebarWidth?: string; // optional override
}

export function SidebarLayout({
  sidebar,
  sidebarWidth = "w-64",
  className,
  children,
  ...props
}: SidebarLayoutProps) {
  return (
    <div
      className={classNames(
        "flex min-h-screen bg-neutral-50 dark:bg-neutral-900",
        className
      )}
      {...props}
    >
      {/* Sidebar */}
      <aside
        className={classNames(
          "hidden md:flex flex-col border-r border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800",
          sidebarWidth
        )}
      >
        {sidebar}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}