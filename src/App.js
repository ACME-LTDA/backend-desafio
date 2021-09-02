import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import Dashboard from './components/Dashboard';
import Login from './components/LoginUsuario';
import CriarUsuario from './components/Usuarios/CriarUsuario'
import LoginUsuario from './components/LoginUsuario';

function App(props) {
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
  return (
    <>
      {
        !props.isLogado ?
          <LoginUsuario />
        :
          <h1>Tá logado!!!</h1>
      }
    </>
  )
}

//function TrazDashboard() {
// return <h2>Oi</h2>
//}

export default App;
