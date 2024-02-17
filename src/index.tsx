import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { store } from './app/store';
import { Provider, ProviderProps } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
// import Auth0 from 'app/Auth0';

import './index.css';
import 'fontsource-roboto';
import './i18n';

const providerProps: ProviderProps = {
  store: store,
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider {...providerProps}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
