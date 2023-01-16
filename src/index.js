import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import App from './App';
import './index.css';
import storeGeral from './redux/store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={ storeGeral }>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
