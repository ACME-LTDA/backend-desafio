import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import axios from 'axios';
import './LoginUsuario.css';

function LoginUsuario({ setSessao }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const enviaFormulario = async (event) => {
    event.preventDefault()
    const dadosLogin = await axios.post('/sessao/login', {
      "email": email,
      "senha": senha
    })
      .then(res => {
        console.log('Login efetivado com sucesso!')
        console.log(res.data)
        return res.data
      })
      .catch(err => {
        console.log('Erro ao tentar logar: ', err)
      })
    if (dadosLogin != null) {
      setSessao(dadosLogin.data.id, dadosLogin.data.isAdmin,
        dadosLogin.data.token)
    }
  }
  return (
    <div>

      <form onSubmit={async (e) => enviaFormulario(e)}>
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
