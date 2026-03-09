
export function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

//utility function for classNames so we have cleaner conditional Tailwind handling