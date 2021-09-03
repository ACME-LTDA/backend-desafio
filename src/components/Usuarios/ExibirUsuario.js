import { React, useState } from 'react';
import axios from 'axios';

function exibeUsuarios() {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  useEffect(() => {
    axios.get('/usuarios/listar') // verificar endereço que contém método findAll
      .then((response) => {
        setListaUsuarios(response.data)
      })
  }, [])

  return (
    <div>
      <form>
        <tr>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>E-mail</th>
        </tr>
        {
          listaUsuarios.map((data) => {
            return (
                            <tr>
                                <td>{data.nome}</td>
                                <td>{data.sobrenome}</td>
                                <td>{data.email}</td>
                            </tr>
                            <button>Editar</button>
            )
          })
        }
      </form>
    </div>
  )
}
