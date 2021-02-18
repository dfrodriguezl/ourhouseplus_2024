import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import history from 'app/history';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Auth0 from 'app/Auth0';

import './index.css';
import 'fontsource-roboto';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Auth0>
          <Route path="/" component={App} />
        </Auth0>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
