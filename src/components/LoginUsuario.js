import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './LoginUsuario.css';

function LoginUsuario({ sessao, setSessao }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const history = useHistory()

  useEffect(() => {
    const autenticaUsuario = async () => {
      const resposta = await axios.post('/sessao/refresh-token', {}, {
        withCredentials: true
      })
        .then(
          res => res,
          err => null)

      if (resposta !== null) {
        setSessao(
          resposta.data.data.id,
          resposta.data.data.isAdmin,
          resposta.data.data.token)
        if (resposta.data.data.isAdmin)
          history.push('/admin/adicionar-user')
        else
          history.push(`/usuarios/${resposta.data.data.id}`)
      }
      else
        setSessao(null, null, null, false)
    };

    if (!sessao.isLogado)
      console.log('vai autenticar...')
    autenticaUsuario();
  }, [])

  const enviaFormulario = async (event) => {
    event.preventDefault()
    const dadosLogin = await axios.post('/sessao/login', {
      "email": email,
      "senha": senha
    },
      {
        withCredentials: true
      })
      .then(
        res => {
          console.log('Login efetivado com sucesso!')
          return res.data
        },
        err => {
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
