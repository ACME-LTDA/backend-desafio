import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
function Login(){
    return(
        <div>
        <h1>Login</h1>
        <div class='form-group'>
            <label for="">E-mail:</label>
            <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail" />
        </div>
        <div class="form-group">
            <label for="">Senha:</label>
            <input type="password" class="form-control" id="email" placeholder="Digite sua senha" />
        </div>
        <button type="submit" class="btn btn-primary mb-2">Entrar</button>
        </div>
        
    );
}

export default Login;