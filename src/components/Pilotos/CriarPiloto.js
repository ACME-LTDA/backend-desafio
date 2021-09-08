import { React, useState } from 'react';
import axios from 'axios';

function FormPiloto({ sessao }) {
  const [primeiroNome, setPrimeiroNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [nacionalidade, setNacionalidade] = useState('')
  const [urlWiki, setUrlWiki] = useState('')
  const [observacao, setObservacao] = useState('')

  const enviaFormulario = async (event) => {
    event.preventDefault()
    await axios.post('/pilotos/create',
      {
        "primeiroNome": primeiroNome,
        "sobrenome": sobrenome,
        "dataNascimento": dataNascimento,
        "nacionalidade": nacionalidade,
        "urlWiki": urlWiki,
        "observacao": observacao,
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
          placeholder="Digite o nome"
          onChange={(e) => setPrimeiroNome(e.target.value)}
        />
        <h3>{nome}</h3>
      </div>
      <div className="form-group">
        <label>Sobrenome:</label>
        <input
          type="text"
          className="form-control"
          id="sobrenome"
          placeholder="Digite o sobrenome"
          onChange={(e) => setSobrenome(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Data de Nascimento:</label>
        <input
          type="date"
          className="form-control"
          id="datanascimento"
          placeholder="Selecione a data de nascimento"
          onChange={(e) => setDataNascimento(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Nacionalidade:</label>
        <input
          type="text"
          className="form-control"
          id="nacionalidade"
          placeholder="Digite a nacionalidade"
          onChange={(e) => setNacionalidade(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Link da Wikipedia:</label>
        <input
          type="text"
          className="form-control"
          id="wikipedia"
          placeholder="Digite o link para a Wikipedia"
          onChange={(e) => setUrlWiki(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Observação:</label>
        <textarea
          type="text"
          className="form-control"
          id="observacao"
          placeholder="Digite a descrição do piloto"
          onChange={(e) => setObservacao(e.target.value)}></textarea>
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

export default FormPiloto
