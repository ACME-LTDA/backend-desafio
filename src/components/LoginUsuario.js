import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import axios from 'axios';
import './LoginUsuario.css';
import TextField from '@material-ui/core/TextField';

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
      setSessao(dadosLogin.id, dadosLogin.isAdmin, dadosLogin.token)
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