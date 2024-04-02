import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store/store.ts';
import './index.css';

const isDarkMode = store.getState().theme.theme === 'dark';
document.body.classList.toggle('dark', isDarkMode);
store.subscribe(() => {
  const isDarkMode = store.getState().theme.theme === 'dark';
  document.body.classList.toggle('dark', isDarkMode);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
