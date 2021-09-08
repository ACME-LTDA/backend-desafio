import { React, useState, useEffect } from "react";
import axios from 'axios';

import './ExibirPilotos.css';

function ExibirPilotos({ sessao, setSessao }) {

    const [listaPilotos, setListaPilotos] = useState([]); 

  useEffect(() => {
    const fetchDados = async () => {
      const resultado = await axios.get(`/pilotos/`, {
        headers: {
          'Authorization': `Bearer ${sessao.token}`
        }
      })
      .then((res) => {
          setListaPilotos(res.data.dados)
      })
        .then(
          res => res.data.dados,
          err => { setSessao(null, false, null, false) })
    };

    fetchDados();
  }, []);

  rotaVencedores = () => {
    this.props.history.push("/pilotos/" + sessao.idPiloto);
  };

  return (
    <div>
        <table>
            <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Data de Nascimento</th>
            </tr>
            {listaPilotos.map((dados) => {
              return (
                <div>
                  <tr>
                    <td>{dados.nomePiloto}</td>
                    <td>{dados.sobrenome}</td>
                    <td>{dados.dataNascimento}</td>
                  </tr>
                  <button onClick={this.rotaVencedores} className="btn btn-primary mb-2">Detalhes</button>
                </div>
              )})}
        </table>
    </div>
  )
}

export default ExibirPilotos
