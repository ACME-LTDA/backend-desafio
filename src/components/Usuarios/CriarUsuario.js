import { React, useState } from 'react';
import axios from 'axios';

function FormCadastro({ sessao }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const enviaFormulario = async (event) => {
    event.preventDefault()
    // TODO usar o refresh token para esta operacao
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
    <form onSubmit={enviaFormulario}>
      <div className="form-group">
        <label>Nome:</label>
        <input
          type="text"
          className="form-control"
          id="nome"
          placeholder="Digite seu nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <h3>{nome}</h3>
      </div>
      <div className="form-group">
        <label>Sobrenome:</label>
        <input
          type="text"
          className="form-control"
          id="sobrenome"
          placeholder="Digite seu sobrenome"
          onChange={(e) => setSobrenome(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>E-mail:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Senha:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Digite sua senha"
          onChange={(e) => setSenha(e.target.value)} />
      </div>
      <button
        type="submit"
        className="btn btn-primary mb-2"
      // component={Link} to="/test-page"
      >
        Enviar
      </button>

    </form>
  )
}

export default FormCadastro
