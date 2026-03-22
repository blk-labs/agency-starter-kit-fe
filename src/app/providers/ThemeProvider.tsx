import type { PropsWithChildren } from 'react';

export default function ThemeProvider({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}
