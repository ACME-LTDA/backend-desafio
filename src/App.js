import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import CriarUsuario from './components/Usuarios/CriarUsuario'

function App() {
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
    //       <div class="form-group">
    //         <label for="">E-mail:</label>
    //         <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail" />
    //       </div>
    //       <div class="form-group">
    //         <label for="">Senha:</label>
    //         <input type="password" class="form-control" id="email" placeholder="Digite sua senha" />
    //       </div>
    //       <button type="submit" class="btn btn-primary mb-2">Entrar</button>
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
    <Router>
          <div className="App">
            <nav className="navbar navbar-expand navbar-dark bg-dark" id="nav-id">
              <a href="/" className="navbar-brand">
                ACME LTDA.
              </a>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                      <Link to={"/Dashboard"} className="nav-link"> Teste </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/"} className="nav-link"> Teste 2 </Link>
                </li>
              </div>
            </nav>        
            <Switch>
              <Route exact path={"/"} component={Login}/>
              <Route path={"/Dashboard"} component={Dashboard}/>
            </Switch>
          </div>
      </Router>
    );
}

//function TrazDashboard() {
// return <h2>Oi</h2>
//}

export default App;
