import React from 'react';
import './Login.css';

function Login() {
  return (
    <div>

        <h1>Login</h1>
        <Link to={`/cadastro`}>Ir para Cadastro</Link>
        <Link to={`/`}>Ir para Início</Link>
    </div>
  )
}

export default Login