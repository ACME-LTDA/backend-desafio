import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Redirect } from 'react-router';
import axios from 'axios';

import CriarUsuario from './components/Usuarios/CriarUsuario';
import LoginUsuario from './components/LoginUsuario';
import ExibirUsuario from './components/Usuarios/ExibirUsuario';
import ExibirPilotos from './components/Pilotos/ListarPilotos';

function App({ sessao, setSessao }) {
  const deslogaUsuario = async () => {
    const resposta = await axios.post('/sessao/logout', {}, {
      withCredentials: true
    })
      .then(
        res => res,
        err => null)
    if (resposta !== null)
      setSessao(null, false, null, false)
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark" id="nav-id">
        <a href="/" className="navbar-brand">
          ACME LTDA.
        </a>
        {(sessao.isLogado && !sessao.isAdmin) ?
          <>
            <a href="/" className="navbar-brand">
              PILOTOS
            </a>
            <a href="/" className="navbar-brand">
              PERFIL
            </a>
          </>
          : null}

        {sessao.isLogado ?
          <a href="/" className="navbar-brand" onClick={deslogaUsuario}>
            LOGOUT
          </a>
          : null}

      </nav>

      {
        !sessao.isLogado ?
          <Redirect to="/login" />
          : sessao.isLogado && sessao.isAdmin ?
            <Redirect to="/admin/adicionar-user" />
            : <Redirect to={`/usuarios/${sessao.idUsuario}`} />
      }

      <Switch>
        <Route path="/admin/adicionar-user">
          <CriarUsuario sessao={sessao} />
        </Route>
        <Route path={`/usuarios/${sessao.idUsuario}`}>
          <ExibirUsuario sessao={sessao} setSessao={setSessao} />
        </Route>
        <Route path="/login">
          <LoginUsuario sessao={sessao} setSessao={setSessao} />
        </Route>
        <Route path="/pilotos">
          <ExibirPilotos setSessao={setSessao} />
        </Route>
      </Switch>
    </div>
  )
}

export default App;


  // return (
  //   <div className="App">
  //     <nav className="navbar navbar-expand navbar-dark bg-dark" id="nav-id">
  //       <a href="#" className="navbar-brand">
  //         ACME LTDA.
  //       </a>
  //       <div className="navbar-nav mr-auto">
  //         <li className="nav-item">
  //           <Link to="/Dashboard" className="nav-link"> Teste </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link to={"#"} className="nav-link"> Teste 2 </Link>
  //         </li>
  //       </div>
  //     </nav>
  //     <h1>Login</h1>
  //     <form id="login-form">
  //       <div className="form-group">
  //         <label htmlFor="">E-mail:</label>
  //         <input type="email" className="form-control" id="email" placeholder="Digite seu e-mail" />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="">Senha:</label>
  //         <input type="password" className="form-control" id="email" placeholder="Digite sua senha" />
  //       </div>
  //       <button type="submit" className="btn btn-primary mb-2">Entrar</button>
  //     </form>
  //     <div>
  //       <Switch>
  //         <Route path="/Dashboard">
  //           <Dashboard />
  //         </Route>
  //       </Switch>
  //     </div>
  //   </div>

  // );
  //return(<CriarUsuario />)
  //  <Router>
  //        <div className="App">
  //          <nav className="navbar navbar-expand navbar-dark bg-dark" id="nav-id">
  //           <a href="/" className="navbar-brand">
  //              ACME LTDA.
  //            </a>
  //            <div className="navbar-nav mr-auto">
  //             <li className="nav-item">
  //                    <Link to={"/CriarUsuario"} className="nav-link"> Criar Usuario </Link>
  //              </li>
  //              <li className="nav-item">
  //                <Link to={"/Dashboard"} className="nav-link"> Teste </Link>
  //              </li>
  //            </div>
  //          </nav>
  //          <Switch>
  //            <Route exact path={"/"} component={Dashboard}/>
  //            <Route path={"/CriarUsuario"} component={CriarUsuario}/>
  //          </Switch>
  //        </div>
  //    </Router>
  //  );
  // return (<CriarUsuario />)
