import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import axios from 'axios';

function LoginUsuario({setSessao}) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const enviaFormulario = async (event) => {
    event.preventDefault()
    let dadosLogin = null
    await axios.post('http://localhost:3002/sessao/login', {
        "email": email,
        "senha": senha
    })
    .then(res => {
        console.log('Deu bom')
        console.log(res.status)
        console.log(res)
        dadosLogin = res.data
    })
    .catch(err => {
        console.log('Deu ruim')
        console.log(err.response)
        // console.log(err.response.data.message)
    })
    if (dadosLogin != null) {
      setSessao(dadosLogin.id, dadosLogin.isAdmin, dadosLogin.token)
    }
}
    return(
        <div>
          <form onSubmit={enviaFormulario}>
            <h1>Login</h1>
            <div className='form-group'>
                <label>E-mail:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Digite seu e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Senha:</label>
                <input
                  type="password"
                  className="form-control"
                  id="senha"
                  placeholder="Digite sua senha"
                  onChange={(e) => setSenha(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Entrar</button>
          </form>
        </div>

    );
}

export default LoginUsuario;
