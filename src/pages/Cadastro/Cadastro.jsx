import React, { useContext, useEffect, useState } from 'react';
import './Cadastro.css';
import axios from 'axios';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Link } from 'react-router-dom';

function Cadastro() {

  const [ usuario, set_usuario ] = useState({nome: ``, email: ``, senha: ``});
  const { array_usuarios, set_array_usuarios } = useContext(GlobalContext);

  useEffect(() => {

    buscar_usuarios();

  }, []);

  async function buscar_usuarios(){

    try {
      
      const usuarios = await axios.get(`http://localhost:3000/usuarios`);
      set_array_usuarios(usuarios.data);

    } catch (erro) {
      
      console.error(erro);
    };
  };


  async function cadastrar_usuario(e){

    e.preventDefault();

    try {

      await axios.post(`http://localhost:3000/usuarios`, usuario);
      set_usuario({nome: ``, email: ``, senha: ``});
      
    } catch (erro) {
      
      console.error(erro);
    };
  };

  return (
    <div className='container_cadastro'>

      <h1>Cadastro</h1>

      <form onSubmit={cadastrar_usuario}>

      <label>Nome</label>
      <input type="text" required value={usuario.nome} onChange={e => set_usuario({...usuario, nome: e.target.value})}/>

      <label>Email</label>
      <input type="email" required value={usuario.email} onChange={e => set_usuario({...usuario, email: e.target.value})}/>

      <label>Senha</label>
      <input type="text" minLength={7} maxLength={12} required value={usuario.senha} onChange={e => set_usuario({...usuario, senha: e.target.value})}/>

      <button type='submit'>Cadastrar</button>

      <Link to={`/login`}>Ir para Login</Link>
      <Link to={`/`}>Ir para Início</Link>
      </form>

    </div>
  )
}

export default Cadastro