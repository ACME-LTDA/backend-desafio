import { react, useState, useEffect } from "react";
import axios from 'axios';

function ExibirPilotos({ sessao, setSessao }) {

  const [nomePiloto, setNomePiloto] = useState('')
  const [sobrenomePiloto, setSobrenomePiloto] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [nacionalidade, setNacionalidade] = useState('')
  const [link, setLink] = useState('')
  const [descricao, setDescricao] = useState('')
  const [arquivo, setArquivo] = useState('')
  const [habilitaSalvar, setHabilitaSalvar] = useState(false)
  const [desabilitado, setDesabilitado] = useState(true)
  const [dados, setDados] = useState({})

  // TODO usar o refresh token para esta operacao
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
        setArquivo(resultado.arquivo)
        setNomePiloto(resultado.nomePiloto)
        setSobrenomePiloto(resultado.sobrenomePiloto)
        setDataNascimento(resultado.dataNascimento)
        setNacionalidade(resultado.nacionalidade)
        setLink(resultado.link)
        setDescricao(resultado.descricao)
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
      && sobrenomePiloto === dados.sobrenomePiloto.toString()
      && arquivo === dados.arquivo.toString()
      && dataNascimento === dados.dataNascimento.toString()
      && nacionalidade === dados.nacionalidade.toString()
      && link === dados.link.toString()
      && descricao === dados.descricao.toString()) {
      console.log('Desabilita salvar')
      setHabilitaSalvar(false)
    }
    else {
      console.log('Habilita salvar')
      setHabilitaSalvar(true)
    }
  }

  const mudaNome = (event) => {
    setNomePiloto(event.target.value)
    habilitaBotao()
  }

  const mudaSobrenome = (event) => {
    setSobrenomePiloto(event.target.value)
    habilitaBotao()
  }

  const mudaNacionalidade = (event) => {
    setNacionalidade(event.target.value)
    habilitaBotao()
  }

  const mudaLink = (event) => {
    setLink(event.target.value)
    habilitaBotao()
  }

  const mudaDescricao = (event) => {
    setDescricao(event.target.value)
    habilitaBotao()
  }

  const mudaArquivo = (event) => {
    setArquivo(event.target.value)
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
              value={sobrenomePiloto}
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
              value={link}
              className="form-control"
              disabled={desabilitado}
              onChange={e => mudaLink(e)}
            />
          </div>
          <div className='form-group'>
            <label>Descrição: </label>
            <input
              type="text"
              value={descricao}
              className="form-control"
              disabled={desabilitado}
              onChange={e => mudaDescricao(e)}
            />
          </div>
          <div className='form-group'>
            <label>Foto do Piloto: </label>
            <input
              type="file"
              value={arquivo}
              className="form-control"
              disabled={desabilitado}
              onChange={e => mudaArquivo(e)}
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

export default ExibirPilotos
