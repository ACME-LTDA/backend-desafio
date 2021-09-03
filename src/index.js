import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import App from './App';
import Footer from './Footer';
import SessaoUsuario from './components/Usuarios/SessaoUsuario'

require('dotenv').config({ path: __dirname + '/.env' })

axios.defaults.baseURL = process.env.HOST || "http://localhost:3001"

ReactDOM.render(
  <BrowserRouter>
    <SessaoUsuario>
      <App />
      <Footer />
    </SessaoUsuario>
  </BrowserRouter>,
  document.getElementById('root')
);
