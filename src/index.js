import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppContextWrapper } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextWrapper>
      <App />
    </AppContextWrapper>
  </React.StrictMode>
);
