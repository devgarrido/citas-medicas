import { createRoot } from 'react-dom/client';
import './index.css';

const app = <h1 className='text-2xl text-blue-800'>Hello World!</h1>;
const container = document.getElementById('root');

createRoot(container).render(app);
