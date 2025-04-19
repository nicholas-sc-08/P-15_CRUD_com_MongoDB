import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext';
import { useEffect } from 'react';

function Inicio() {

  const { array_usuarios, set_array_usuarios } = useContext(GlobalContext);

  useEffect(() => {

    buscar_usuarios();
    console.log(array_usuarios);
    

  }, []);

  async function buscar_usuarios(){

    try {

      const usuarios = await axios.get(`http://localhost:3000/usuarios`);
      set_array_usuarios(usuarios.data);
      
    } catch (erro) {
      
      console.error(erro);
    };
  };

  return (
    <div>

      <h1>Início</h1>

      {array_usuarios.map((usuario, i) => (

        <div key={i}>

          <p>Id: {usuario._id}</p>
          <p>Nome: {usuario.nome}</p>
          <p>Email: {usuario.email}</p>
          <p>Senha: {usuario.senha}</p>
        </div>
      ))}

    </div>
  )
}

export default Inicio