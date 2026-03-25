import { forwardRef } from "react";
import type { ModalProps } from "./Modal.types";
import { classNames } from "../utils/classNames";

/**
 * @component Modal
 * A reusable modal dialog component for displaying content in an overlay.
 *
 * @param {Object} props - Modal component props
 * @param {boolean} props.isOpen - Whether the modal is open
 * @param {() => void} props.onClose - Callback when modal should close
 * @param {string} props.title - Modal title
 * @param {React.ReactNode} props.children - Modal content
 * @param {string} [props.className] - Additional CSS classes for the modal content
 * @returns {React.ReactElement | null} Modal component or null if not open
 *
 * @example
 * const [isOpen, setIsOpen] = React.useState(false);
 * return (
 *   <>
 *     <button onClick={() => setIsOpen(true)}>Open Modal</button>
 *     <Modal
 *       isOpen={isOpen}
 *       onClose={() => setIsOpen(false)}
 *       title="Confirm Action"
 *     >
 *       <p>Are you sure?</p>
 *     </Modal>
 *   </>
 * );
 */
const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, title, children, className }, ref) => {
    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70"
      >
        <div
          className={classNames(
            "bg-neutral-50 dark:bg-neutral-900 rounded-lg shadow-lg max-w-md w-full p-6 border border-neutral-200 dark:border-neutral-700",
            className
          )}
        >
          {title && <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">{title}</h3>}
          <div className="text-neutral-700 dark:text-neutral-200">{children}</div>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-danger-500 text-white rounded-md hover:bg-danger-600 dark:hover:bg-danger-600"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;