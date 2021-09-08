
import React, { useRef, useState } from 'react';
import axios from 'axios';

function FileUpload(){
    const filesElement = useRef(null);

    const sendFile = async () => {
    const dataForm = new FormData();
    for (const file of filesElement.current.files) {
        dataForm.append('file', file);
    }
    const res = await fetch(`http://localhost:3001/uploads`, {
        method: 'POST',
        body: dataForm,
    });
    const data = await res.parse;
    console.log(data);
    };

    return (
    <div>
        <input type="file" multiple ref={filesElement} />
        <button onClick={sendFile}>Send file</button>
    </div>
    );
}
export default FileUpload;