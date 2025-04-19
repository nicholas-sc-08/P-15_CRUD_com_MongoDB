import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext';
import { useEffect } from 'react';
import axios from 'axios';

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

  async function deletar_usuario(_id){

    try {
      
      await axios.delete(`http://localhost:3000/usuarios/${_id}`);
      buscar_usuarios();

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

          <button onClick={() => deletar_usuario(usuario._id)}>Deletar usuario</button>
        </div>
      ))}

    </div>
  )
}

export default Inicio