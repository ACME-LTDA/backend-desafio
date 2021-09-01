import { React, useState } from 'react';
import axios from 'axios';

function FormCadastro() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const postData = () => {
        console.log(nome);
        console.log(sobrenome);
        console.log(email);
        console.log(senha);
    }

    const enviaFormulario = async () => {
        axios.post(`http://localhost:3001/usuarios/create`, {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senha
        })
    }

    return (
    <form action="" method="POST">
        <div class="form-group">
            <label for="">Nome:</label>
            <input 
                type="text"
                class="form-control"
                id="nome"
                placeholder="Digite seu nome"
                onChange={ (e) => setNome(e.target.value) }
            />
            <h3>{nome}</h3>
        </div>
        <div class="form-group">
            <label for="">Sobrenome:</label>
            <input 
                type="text"
                class="form-control"
                id="sobrenome"
                placeholder="Digite seu sobrenome"
                onChange={ (e) => setSobrenome(e.target.value) }
            />
        </div>
        <div class="form-group">
            <label for="">E-mail:</label>
            <input 
                type="email" 
                class="form-control" 
                id="email"
                placeholder="Digite seu e-mail" 
                onChange={ (e) => setEmail(e.target.value) } />
        </div>
        <div class="form-group">
            <label for="">Senha:</label>
            <input 
                type="password" 
                class="form-control" 
                id="password" 
                placeholder="Digite sua senha" 
                onChange={ (e) => setSenha(e.target.value) } />
        </div>
        <button type="submit" onClick={postData} class="btn btn-primary mb-2">Enviar</button>

    </form>
)}

export default FormCadastro

