import { React, useState } from 'react';
import axios from 'axios';
import './CriarUsuario.css';
import TextField from '@material-ui/core/TextField';

function FormCadastro({ sessao }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const enviaFormulario = async (event) => {
    event.preventDefault()
    await axios.post('/usuarios/create',
      {
        "nome": nome,
        "sobrenome": sobrenome,
        "email": email,
        "senha": senha
      }, {
      headers: {
        'Authorization': `Bearer ${sessao.token}`
      }
    })
      .then(res => {
        console.log('Deu bom')
        console.log(res.status)
        console.log(res.data.message)
      })
      .catch(err => {
        console.log('Deu ruim')
        console.log(err.response.status)
        console.log(err.response.data.message)
      })
  }

  return (
    
    <div className='tela-centro-cadastro'>
    <div>
      <div className="container-login2">
        <div className="form-group p-t-30 p-b-50">
            <img className='logo-criar-usuario' src={process.env.PUBLIC_URL+"../ACME_head.png"} />
       </div>
       
        <form className="form-cadastro" onSubmit={enviaFormulario}>
          <h2>Cadastro de Usuário</h2>
          <div className="form-floating form-spacing">
          <TextField 
            label="Nome:" 
            type="text"
            className="form-control transparent-input"
            id="nome"
            onChange={(e) => setNome(e.target.value)}
            style={{width:'80%', marginBottom:'20px'}}
          />
          </div>
          <div className="form-floating form-spacing">
          <TextField 
            label="Sobrenome:" 
            type="text"
            className="form-control transparent-input"
            id="sobrenome"
            onChange={(e) => setSobrenome(e.target.value)}
            style={{width:'80%', marginBottom:'20px'}}
          />
          </div>
          <div className="form-floating form-spacing">
          <TextField 
            label="E-mail:" 
            type="email"
            className="form-control transparent-input"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            style={{width:'80%', marginBottom:'20px'}}
          />
          </div>
          <div className="form-floating form-spacing">
          <TextField
              label="Senha:"
              type="password"
              className="form-control transparent-input"
              id="password"
              onChange={(e) => setSenha(e.target.value)} 
              style={{width:'80%', marginBottom:'20px'}}/>
          </div>
          
          <button
            type="submit"
            className="btn btn-primary mb-2"
          >
            Enviar
          </button>

        </form>
      </div>
    </div>
    </div>
  )
}

export default FormCadastro
