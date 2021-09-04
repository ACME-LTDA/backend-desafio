import { React, useState } from 'react';
import axios from 'axios';

async function ExibirUsuario({ sessao }) {
  // TODO usar o refresh token para esta operacao
  const dadosUsuario = await axios.get(`/usuarios/${sessao.idUsuario}`, {
    headers: {
      'Authorization': `Bearer ${sessao.token}`
    }
  })
    .then(res => res.data.dados)
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
      <form>
        <tr>
          <th>Nome:</th>
          <th>Sobrenome</th>
          <th>E-mail</th>
        </tr>
        <tr>
          <td>{dadosUsuario.nome}</td>
          <td>{dadosUsuario.sobrenome}</td>
          <td>{dadosUsuario.email}</td>
        </tr>
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
      </form>
    </div>
  )
}

export default ExibirUsuario
