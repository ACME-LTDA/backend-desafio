import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import CriarUsuario from './components/Usuarios/CriarUsuario'
import LoginUsuario from './components/LoginUsuario';
import EditaUsuario from './components/Usuarios/EditarUsuario';
import ExibirUsuario from './components/Usuarios/ExibirUsuario';
import { Redirect } from 'react-router';

function App({ sessao, setSessao }) {
  return (
    <>
      {
        !sessao.isLogado ?
          <Redirect to="/login" />
          : sessao.isLogado && sessao.isAdmin ?
            // criar usuario
            <Redirect to="/admin/adicionar-user" />
            : <Redirect to={`/usuarios/${sessao.idUsuario}`} />
      }

      <Switch>
        <Route path="/login">
          <LoginUsuario sessao={sessao} setSessao={setSessao} />
        </Route>
        <Route path="/admin/adicionar-user">
          <CriarUsuario sessao={sessao} />
        </Route>
        <Route path={`/usuarios/${sessao.idUsuario}`}>
          <ExibirUsuario sessao={sessao} setSessao={setSessao} />
        </Route>
      </Switch>
    </>
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
