import App from './components/App';
import { render } from 'react-dom';
import { ContextProvider } from './context';
import { StrictMode } from 'react';
import './styles/index.scss';

render(
  <ContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ContextProvider>,
  document.getElementById('root')
);
