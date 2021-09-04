import { React, useEffect, useState } from 'react';
import axios from 'axios';

function ExibirUsuario({ sessao, setSessao }) {
  const [dados, setDados] = useState({})

  // TODO usar o refresh token para esta operacao
  useEffect(() => {
    const fetchDados = async () => {
      const resultado = await axios.get(`/usuarios/${sessao.idUsuario}`, {
        headers: {
          'Authorization': `Bearer ${sessao.token}`
        }
      })
        .then(res => res.data.dados)

      setDados(resultado)
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
  // const [listaUsuarios, setListaUsuarios] = useState([]);
  // useEffect(() => {
  //   axios.get('/usuarios/listar') // verificar endereço que contém método findAll
  //     .then((response) => {
  //       setListaUsuarios(response.data)
  //     })
  // }, [])
  // const onDelete = (id) => {
  //  axios.delete('/usuarios/apagar')
  //  .then(() => { atualizaTabela(); })
  //}

  //const atualizaTabela = () => {
  //axios.get('/usuarios/listar')
  //.then((atualizaTabela) => {
  //setListaUsuarios(atualizaTabela.data)
  //})
  //}

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Nome: </th>
            <th>Sobrenome: </th>
            <th>E-mail: </th>
          </tr>
          <tr>
            <td>{dados.nome}</td>
            <td>{dados.sobrenome}</td>
            <td>{dados.email}</td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        onClick={async () => deletaConta()}
      >Deletar Conta</button>
      {/* {
          listaUsuarios.map((data) => {
            return (
                            <tr>
                                <td>{data.nome}</td>
                                <td>{data.sobrenome}</td>
                                <td>{data.email}</td>
                                <td><button onClick={() => setUsuario(data)}>Editar</button></td>
                                <td><button onClick={() => onDelete(data.id)}>Apagar</button></td>
                            </tr>
            )
          })
        } */}
    </div>
  )
}

export default ExibirUsuario
