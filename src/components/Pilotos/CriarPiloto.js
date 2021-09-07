import { React, useState } from 'react';
import axios from 'axios';

function FormPiloto({ sessao }) {
    const [nomePiloto, setNomePiloto] = useState('')
    const [sobrenomePiloto, setSobrenomePiloto] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [nacionalidade, setNacionalidade] = useState('')
    const [link, setLink] = useState('')
    const [descricao, setDescricao] = useState('')
    const [arquivo, setArquivo] = useState('')

    const enviaFormulario = async (event) => {
        event.preventDefault()
        // TODO usar o refresh token para esta operacao
        await axios.post('/pilotos/create',
            {
                "nomePiloto": nomePiloto,
                "sobrenome": sobrenomePiloto,
                "dataNascimento": dataNascimento,
                "nacionalidade": nacionalidade,
                "link": link,
                "descricao": descricao,
                "arquivo": arquivo
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
                    onChange={(e) => setNome(e.target.value)}
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
                    onChange={(e) => setLink(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Descrição:</label>
                <textarea
                    type="text"
                    className="form-control"
                    id="descricao"
                    placeholder="Digite a descrição do piloto"
                    onChange={(e) => setDescricao(e.target.value)}></textarea>
            </div>
            <div className="form-group">
                <label>Foto:</label>
                <textarea
                    type="file"
                    className="form-control"
                    id="foto"
                    placeholder="Insira uma foto do piloto"
                    onChange={(e) => setArquivo(e.target.value)}></textarea>
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
