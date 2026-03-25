import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/globals.css';
import App from './App';
import { ThemeProvider } from '@/shared/theme/ThemeProvider';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <Toaster
        gutter={12}
        containerStyle={{ margin: '2px' }}
        toastOptions={{
          success: {
            duration: 3000,
            className: 'bg-success-500 text-white',
          },
          error: {
            duration: 5000,
            className: 'bg-danger-500 text-white',
          },
          style: {
            fontSize: '12px',
            maxWidth: '500px',
            padding: '16px 24px',
          },
        }}
      />
    </StrictMode>,
  );
}
