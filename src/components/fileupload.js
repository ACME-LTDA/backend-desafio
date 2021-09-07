
import React, { useRef, useState } from 'react';
import axios from 'axios';

function FileUpload() {

    const [file, setFile] = useState(''); // armazenando o arquivo carregadostoring the uploaded file
    // armazenar o arquivo recebido do backend
    const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0); // Barra de progresso
    const el = useRef(); // elemento de entrada de acesso


    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // Acessando arquivo
        console.log(file);
        setFile(file); // armazenando arquivo
    }

    const uploadFile = async () => {
        const formData = new FormData();
        formData.append('file', file); // anexando arquivo
        await axios.post('http://localhost:3001/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
            console.log(res);
            getFile({ name: res.data.name,
                     path: 'http://localhost:3001' + res.data.path
                   })
        }).catch(err => console.log(err))}

    return (
        <div>
            <div className="file-upload">
                <input type="file" ref={el} onChange={handleChange} />
                <div className="progessBar" style={{ width: progress }}>
                   {progress}
                </div>
                <button onClick={uploadFile} className="upbutton">
                   Upload
                </button>
            <hr />
            {/*exibindo imagem recebida*/}
            {data.path && <img src={data.path} alt={data.name} />}
            </div>
        </div>
    );
}

export default FileUpload;