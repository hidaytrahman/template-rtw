import { createRoot } from 'react-dom/client';
import App from './App';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
 
  const { worker } = await import('./mocks/browser');
 
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}


enableMocking().then(() => {
//   console.log('Mocking enabled');
    // Create a root element
    const root = createRoot(document.getElementById('root') as HTMLElement);
    root.render(<App />);
});


