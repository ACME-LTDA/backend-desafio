// import { React, useState } from 'react';
// //import axios from 'axios';

// function EditaUsuario() {
//   const [dados, setDados] = useState({})
//   const [editavel, setEditavel] = useState(false)

//   // TODO usar o refresh token para esta operacao
//   useEffect(() => {
//     const fetchDados = async () => {
//       const resultado = await axios.get(`/usuarios/${sessao.idUsuario}`, {
//         headers: {
//           'Authorization': `Bearer ${sessao.token}`
//         }
//       })
//         .then(res => res.data.dados)

//       setDados(resultado)
//     };

//     fetchDados();
//   }, []);

//   return (
//     <>
//       {editavel ? <button type="button" onClick={() => setEditavel(true)}>Editar perfil</button>
//         : <form onSubmit={atualizarUsuario}>
//           <div className="form-group">
//             <label>Nome:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="nome"
//               placeholder="Digite o novo nome"
//               onChange={(e) => setNome(e.target.value)}
//             />
//             <h3>{nome}</h3>
//           </div>
//           <div className="form-group">
//             <label>Sobrenome:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="sobrenome"
//               placeholder="Digite o novo sobrenome"
//               onChange={(e) => setSobrenome(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Senha:</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               placeholder="Digite a nova senha"
//               onChange={(e) => setSenha(e.target.value)} />
//           </div>
//           <button
//             type="submit"
//             className="btn btn-primary mb-2"
//           // component={Link} to="/test-page"
//           >
//             Enviar
//           </button>

//         </form>
//     </>
//   )
// }

// export default EditaUsuario
