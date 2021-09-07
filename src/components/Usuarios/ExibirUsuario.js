import { React, useEffect, useState } from "react";
import axios from "axios";
import "./ExibirUsuario.css";
import TextField from "@material-ui/core/TextField";

function ExibirUsuario({ sessao, setSessao }) {
  const [dados, setDados] = useState({});
  const [desabilitado, setDesabilitado] = useState(true);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [habilitaSalvar, setHabilitaSalvar] = useState(false);

  // TODO usar o refresh token para esta operacao
  useEffect(() => {
    const fetchDados = async () => {
      const resultado = await axios
        .get(`/usuarios/${sessao.idUsuario}`, {
          headers: {
            Authorization: `Bearer ${sessao.token}`,
          },
        })
        .then((res) => res.data.dados);

      resultado.sobrenome = resultado.sobrenome ?? "";
      setDados(resultado);
      setNome(resultado.nome);
      setSobrenome(resultado.sobrenome);
    };

    fetchDados();
  }, []);

  const deletaConta = async () => {
    // TODO colocar uma caixa de confirmacao de deletar a conta
    const resultado = await axios
      .delete(`/usuarios/${sessao.idUsuario}/delete`, {
        headers: {
          Authorization: `Bearer ${sessao.token}`,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        console.log("Erro ao remover o usuário: " + err);
      });
    if (resultado != null) {
      console.log("Usuário removido com sucesso! Bye bye " + sessao.idUsuario);
      setSessao(null, false, null, false);
    }
  };

  const habilitaBotao = () => {
    if (
      nome === dados.nome.toString &&
      sobrenome === dados.sobrenome.toString()
    ) {
      console.log("Desabilita salvar");
      setHabilitaSalvar(false);
    } else {
      console.log("Habilita salvar");
      setHabilitaSalvar(true);
    }
  };

  const mudaNome = (event) => {
    setNome(event.target.value);
    habilitaBotao();
  };

  const mudaSobrenome = (event) => {
    setSobrenome(event.target.value);
    habilitaBotao();
  };

  return (
    <div>
      <h2>Meu Cadastro</h2>
      <div className="container-login3">
      <form />
        <div className="row center-form">
          <div className="form-group col">
            <div className="form-floating form-spacing">
              <TextField
                label="Nome:"
                type="text"
                value={nome}
                className="form-control transparent-input"
                id="nome"
                disabled={desabilitado}
                onChange={(e) => mudaNome(e)}
                style={{ width: "80%", marginBottom: "20px" }}
              />
            </div>

            <div className="form-floating form-spacing">
              <TextField
                label="Sobrenome:"
                type="text"
                value={sobrenome}
                className="form-control transparent-input"
                id="sobrenome"
                disabled={desabilitado}
                onChange={(e) => mudaSobrenome(e)}
                style={{ width: "80%", marginBottom: "20px" }}
              />
            </div>
        

          <div className="form-floating form-spacing">
            <TextField
              label=""
              type="email"
              value={dados.email}
              className="form-control transparent-input"
              id="email"
              disabled
              style={{ width: "80%", marginBottom: "-11px" }}
            />
          </div>
          </div>
        </div>

        <div id="wrapper">
        
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
            <button
            type="button"
            className="btn btn-danger mb-2"
            onClick={async () => deletaConta()}
          >
            Deletar Conta
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExibirUsuario;
