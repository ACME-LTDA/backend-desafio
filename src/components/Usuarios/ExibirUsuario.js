import { React, useEffect, useState, useRef } from 'react';
import axios from 'axios';

import './ExibirUsuario.css';

function ExibirUsuario({ sessao, setSessao }) {
  const [dados, setDados] = useState({})
  const [desabilitado, setDesabilitado] = useState(true)
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [habilitaSalvar, setHabilitaSalvar] = useState(false)
  const filesElement = useRef(null);

  // TODO usar o refresh token para esta operacao
  useEffect(() => {
    const fetchDados = async () => {
      const resultado = await axios.get(`/usuarios/${sessao.idUsuario}`, {
        headers: {
          'Authorization': `Bearer ${sessao.token}`
        }
      })
        .then(res => res.data.data.dados)

      console.log('resultado: ', resultado)
      if (resultado !== null) {
        resultado.sobrenome = resultado.sobrenome ?? ''
        setDados(resultado)
        setNome(resultado.nome)
        setSobrenome(resultado.sobrenome)
      }
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

  // const enviarImagem = async () => {
  //   const dataForm = new FormData();
  //   for (const file of filesElement.current.files) {
  //     dataForm.append('file', file);
  //   }
  //   const res = await fetch(`http://localhost:3001/uploads`, {
  //     method: 'POST',
  //     body: dataForm,
  //   });
  //   const data = await res.parse;
  //   console.log(data);
  // };

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

  const enviaFormulario = async (event) => {
    event.preventDefault()

    // const dataForm = new FormData();
    // for (const file of filesElement.current.files) {
    //   dataForm.append('avatar', file);
    // }

    // console.log('data form: ', dataForm);
    // console.log(filesElement.current);
    // const res = await fetch(`http://localhost:3001/uploads`, {
    //   method: 'POST',
    //   body: dataForm,
    // });
    // const data = await res.parse;
    // console.log(data);

    const dadosLogin = await axios.post(`/usuarios/${sessao.idUsuario}/altera`, {
      nome: nome,
      sobrenome: sobrenome,
      // avatar: dataForm
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
      <div>
        <form id="form-profile" name="form-profile" onSubmit={async (e) => enviaFormulario(e)}>
          <div className='form-group'>
            <label>Nome: </label>
            <input
              type="text"
              value={nome}
              name="nome"
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
              name="sobrenome"
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
          <div>
            <input type="avatar" name="avatar" ref={filesElement} />
          </div>
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
                type="submit"
                className="btn btn-success mb-2"
                disabled={!habilitaSalvar}
              >
                Salvar alterações
              </button>}
          </div>
        </form>
      </div >
    </div >
  )
}

export default ExibirUsuario
