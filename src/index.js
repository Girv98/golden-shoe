import React from 'react';
import ReactDOM from 'react-dom';
import './sass/mystyles.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import 'bulma/css/bulma.min.css'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

