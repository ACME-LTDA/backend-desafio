import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
function Login(){
    return(
        <div>
        <h1>Login</h1>
        <div className='form-group'>
            <label>E-mail:</label>
            <input type="email" className="form-control" id="email" placeholder="Digite seu e-mail" />
        </div>
        <div className="form-group">
            <label>Senha:</label>
            <input type="password" className="form-control" id="email" placeholder="Digite sua senha" />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Entrar</button>
        </div>

    );
}

export default Login;
