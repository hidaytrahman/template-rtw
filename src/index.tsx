import { createRoot } from 'react-dom/client';
import Root from './Root';

// Create a root element
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Root />
);
