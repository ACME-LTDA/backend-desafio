import { React, useEffect, useState } from 'react';
import axios from 'axios';
import './ExibirUsuario.css';
import TextField from '@material-ui/core/TextField';

function ExibirUsuario({ sessao, setSessao }) {
  const [dados, setDados] = useState({})
  const [desabilitado, setDesabilitado] = useState(true)
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [habilitaSalvar, setHabilitaSalvar] = useState(false)

  // TODO usar o refresh token para esta operacao
  useEffect(() => {
    const fetchDados = async () => {
      const resultado = await axios.get(`/usuarios/${sessao.idUsuario}`, {
        headers: {
          'Authorization': `Bearer ${sessao.token}`
        }
      })
        .then(res => res.data.dados)

      resultado.sobrenome = resultado.sobrenome ?? ''
      setDados(resultado)
      setNome(resultado.nome)
      setSobrenome(resultado.sobrenome)
    };

    fetchDados();
  }, []);

  const deletaConta = async () => {
    // TODO colocar uma caixa de confirmacao de deletar a conta
    const resultado = await axios.delete(`/usuarios/${sessao.idUsuario}/delete`, {
      headers: {
        'Authorization': `Bearer ${sessao.token}`
      }
    })
      .then(res => res.data)
      .catch(err => {
        console.log('Erro ao remover o usuário: ' + err)
      })
    if (resultado != null) {
      console.log('Usuário removido com sucesso! Bye bye ' + sessao.idUsuario)
      setSessao(null, false, null, false)
    }
  }

  const habilitaBotao = () => {
    if (nome === dados.nome.toString && sobrenome === dados.sobrenome.toString()) {
      console.log('Desabilita salvar')
      setHabilitaSalvar(false)
    }
    else {
      console.log('Habilita salvar')
      setHabilitaSalvar(true)
    }
  }

  const mudaNome = (event) => {
    setNome(event.target.value)
    habilitaBotao()
  }

  const mudaSobrenome = (event) => {
    setSobrenome(event.target.value)
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
              value={nome}
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
            <label>E-mail: </label>
            <input
              type="email"
              value={dados.email}
              className="form-control"
              disabled
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
    );
}  
export default ExibirUsuario;
