import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { StrictMode } from 'react';
import { store } from './redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <Provider store={store}>
    <App />

  </Provider>
  </StrictMode>
);

