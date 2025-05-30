import React, { useEffect } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext } from 'react';
import { useState } from 'react';

function Cadastro_endereco() {

    const [ endereco, set_endereco ] = useState({cep: ``, rua: ``, numero_residencial: ``, cidade: ``, estado: ``});
    const { array_enderecos, set_array_enderecos } = useContext(GlobalContext);

    async function buscar_enderecos(){

        try {
            
            const enderecos = await axios.get(`http://localhost:3000/enderecos`);
            set_array_enderecos(enderecos.data);

        } catch (erro) {
           
            console.error(erro);
        };
    };

    useEffect(() => {

        buscar_enderecos();

    }, []);

    async function cadastrar_endereco(e){

        e.preventDefault();

        try {
            
            await axios.post(`http://localhost:3000/enderecos`, endereco);
            buscar_enderecos();
            set_endereco({cep: ``, rua: ``, numero_residencial: ``, cidade: ``, estado: ``});

        } catch (erro) {
          
            console.error(erro);
        };
    };

    async function excluir_endereco(id_endereco){

        try {
            
            await axios.delete(`http://localhost:3000/enderecos/${id_endereco}`);
            buscar_enderecos();

        } catch (erro) {
          
            console.error(erro);
        };
    };

    async function editar_endereco(id_endereco){

        try {
            
            await axios.put(`http://localhost:3000/enderecos/${id_endereco}`, endereco);
            buscar_enderecos();
            set_endereco({cep: ``, rua: ``, numero_residencial: ``, cidade: ``, estado: ``});

        } catch (erro) {
          
            console.error(erro);
        };
    };

  return (
    <div>

        <h1>Cadastro endereco</h1>

        <form onSubmit={cadastrar_endereco}>
        <label>CEP</label>
        <input type="text" required value={endereco.cep} onChange={e => set_endereco({...endereco, cep: e.target.value})}/>

        <label>Rua</label>
        <input type="text" required value={endereco.rua} onChange={e => set_endereco({...endereco, rua: e.target.value})}/>

        <label>Número</label>
        <input type="text" required value={endereco.numero_residencial} onChange={e => set_endereco({...endereco, numero_residencial: e.target.value})}/>

        <label>Cidade</label>
        <input type="text" required value={endereco.cidade} onChange={e => set_endereco({...endereco, cidade: e.target.value})}/>

        <label>Estado</label>
        <input type="text" required value={endereco.estado} onChange={e => set_endereco({...endereco, estado: e.target.value})}/>

        <button type='submit'>Cadastrar</button>

        </form>

        {array_enderecos.map((mensagem) => (

            <div key={mensagem._id}>

                <p>Id: {mensagem._id}</p>
                <p>CEP: {mensagem.cep}</p>
                <p>Rua: {mensagem.rua}</p>
                <p>Número: {mensagem.numero_residencial}</p>
                <p>Cidade: {mensagem.cidade}</p>
                <p>Estado: {mensagem.estado}</p>
                <button onClick={() => editar_endereco(mensagem._id)}>Editar Endereço</button>
                <button onClick={() => excluir_endereco(mensagem._id)}>Excluir Endereço</button>
            </div>
        ))}
    </div>
  )
}

export default Cadastro_endereco