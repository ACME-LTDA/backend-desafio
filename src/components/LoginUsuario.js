import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './LoginUsuario.css';
import TextField from '@material-ui/core/TextField';

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
      // .catch(err => {console.log('Erro: ', err)})

      console.log('resposta: ', resposta)

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
    <div className='tela-centro'>
      <div className="container-login">
        <div className="form-group p-t-30 p-b-50">
            <img className='logo' src={process.env.PUBLIC_URL+"ACME_logo2.png"} />
       </div>
      
      <form className='form-login' onSubmit={async (e) => enviaFormulario(e)}>

          <div className="form-floating form-spacing">
          <TextField 
            label="E-mail" 
            type="email"
            className="form-control transparent-input"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            style={{width:'80%', marginBottom:'20px'}}
          />
          </div>
        <div className="form-floating form-spacing">
          <TextField 
            label="Senha" 
            type="password"
            className="form-control transparent-input"
            id="senha"
            onChange={(e) => setSenha(e.target.value)}
            style={{width:'80%'}}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Entrar</button>
      </form>
    </div>
    </div>
  );
}

export default LoginUsuario;