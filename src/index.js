import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Footer from './Footer';
import SessaoUsuario from './components/Usuarios/SessaoUsuario'


ReactDOM.render(
    <BrowserRouter>
      <SessaoUsuario>
        <App />
        <Footer />
      </SessaoUsuario>
    </BrowserRouter>,
  document.getElementById('root')
);
