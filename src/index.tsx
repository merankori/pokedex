import { createRoot } from 'react-dom/client';
import { App } from './App';
import './scss/main.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
