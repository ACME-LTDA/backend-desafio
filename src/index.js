import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Footer';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    // <BrowserRouter>
    <div>
      <App />
      {/* <Footer /> */}
    </div>,
    // </BrowserRouter>,
  document.getElementById('root')
);
