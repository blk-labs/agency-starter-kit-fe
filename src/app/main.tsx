import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/globals.css';
import App from './App';
// import { ThemeProvider } from '@/shared/theme/ThemeProvider';
import { Toaster } from 'react-hot-toast';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Failed to find root element with id 'root'");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        success: {
          duration: 3000,
          style: {
            background: '#22c55e',
            color: '#fff',
          },
        },
        error: {
          duration: 5000,
          style: {
            background: '#ef4444',
            color: '#fff',
          },
        },
      }}
    />
  </StrictMode>,
);
