import { React, useState, useEffect } from "react";
import axios from 'axios';

function ExibirPiloto({ sessao, setSessao }) {

  const [nomePiloto, setPrimeiroNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [nacionalidade, setNacionalidade] = useState('')
  const [urlWiki, setUrlWiki] = useState('')
  const [observacao, setObservacao] = useState('')
  const [habilitaSalvar, setHabilitaSalvar] = useState(false)
  const [desabilitado, setDesabilitado] = useState(true)
  const [dados, setDados] = useState({})

  useEffect(() => {
    const fetchDados = async () => {
      const resultado = await axios.get(`/pilotos/${sessao.idPiloto}`, {
        headers: {
          'Authorization': `Bearer ${sessao.token}`
        }
      })
        .then(
          res => res.data.dados,
          err => { setSessao(null, false, null, false) })

      // verificar:
      if (resultado !== null) {
        resultado.sobrenome = resultado.sobrenome ?? ''
        setDados(resultado)
        setPrimeiroNome(resultado.nomePiloto)
        setSobrenome(resultado.sobrenome)
        setDataNascimento(resultado.dataNascimento)
        setNacionalidade(resultado.nacionalidade)
        setUrlWiki(resultado.urlWiki)
        setObservacao(resultado.observacao)
      }
    };

    fetchDados();
  }, []);

  const deletaConta = async () => {
    // TODO colocar uma caixa de confirmacao de deletar a conta
    const resultado = await axios.delete(`/pilotos/${sessao.idPiloto}/delete`, {
      headers: {
        'Authorization': `Bearer ${sessao.token}`
      }
    })
      .then(res => res.data)
      .catch(err => {
        console.log('Erro ao remover o pilotos: ' + err)
      })
    if (resultado != null) {
      console.log('Piloto removido com sucesso! Bye bye ' + sessao.idPiloto)
      setSessao(null, false, null, false)
    }
  }

  const habilitaBotao = () => {
    if (nomePiloto === dados.nomePiloto.toString
      && sobrenome === dados.sobrenome.toString()
      && dataNascimento === dados.dataNascimento.toString()
      && nacionalidade === dados.nacionalidade.toString()
      && urlWiki === dados.urlWiki.toString()
      && observacao === dados.observacao.toString()) {
      console.log('Desabilita salvar')
      setHabilitaSalvar(false)
    }
    else {
      console.log('Habilita salvar')
      setHabilitaSalvar(true)
    }
  }

  const mudaNome = (event) => {
    setPrimeiroNome(event.target.value)
    habilitaBotao()
  }

  const mudaSobrenome = (event) => {
    setSobrenome(event.target.value)
    habilitaBotao()
  }

  const mudaNacionalidade = (event) => {
    setNacionalidade(event.target.value)
    habilitaBotao()
  }

  const mudaUrlWiki = (event) => {
    setUrlWiki(event.target.value)
    habilitaBotao()
  }

  const mudaObservacao = (event) => {
    setObservacao(event.target.value)
    habilitaBotao()
  }

  return (
    <div>
      <div>
        <form id="form-profile">
          <div className='form-group'>
            <label>Nome: </label>
            <input
              type="text"
              value={nomePiloto}
              className="form-control"
              disabled={desabilitado}
              onChange={e => mudaNome(e)}
            />
          </div>
          <div className='form-group'>
            <label>Sobrenome: </label>
            <input
              type="text"
              value={sobrenome}
              className="form-control"
              disabled={desabilitado}
              onChange={e => mudaSobrenome(e)}
            />
          </div>
          <div className='form-group'>
            <label>Data de Nascimento: </label>
            <input
              type="text"
              value={dataNascimento}
              className="form-control"
              disabled
            />
          </div>
          <div className='form-group'>
            <label>Nacionalidade: </label>
            <input
              type="text"
              value={nacionalidade}
              className="form-control"
              disabled={desabilitado}
              onChange={e => mudaNacionalidade(e)}
            />
          </div>
          <div className='form-group'>
            <label>Link da Wikipedia: </label>
            <input
              type="text"
              value={urlWiki}
              className="form-control"
              disabled={desabilitado}
              onChange={e => mudaUrlWiki(e)}
            />
          </div>
          <div className='form-group'>
            <label>Descrição: </label>
            <input
              type="text"
              value={observacao}
              className="form-control"
              disabled={desabilitado}
              onChange={e => mudaObservacao(e)}
            />
          </div>
        </form>
        <div id="wrapper">

          <button
            type="button"
            className="btn btn-danger mb-2"
            onClick={async () => deletaConta()}
          >
            Deletar Conta
          </button>
          {desabilitado ?
            <button
              type="button"
              className="btn btn-success mb-2"
              onClick={() => setDesabilitado(false)}
            >
              Editar perfil
            </button>
            : <button
              type="button"
              className="btn btn-success mb-2"
              disabled={!habilitaSalvar}
            // onClick={async (e) => enviarFormulario(e)}
            >
              Salvar alterações
            </button>}
        </div>
      </div >
    </div >
  )
}

export default ExibirPiloto
