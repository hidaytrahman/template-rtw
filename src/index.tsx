import { createRoot } from 'react-dom/client';
import App from './App';

// Create a root element
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
