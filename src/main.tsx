import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { AppProvider } from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <App />
  </AppProvider>,
);
