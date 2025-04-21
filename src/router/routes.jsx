import { createBrowserRouter } from "react-router-dom";
import Inicio from '../pages/Inicio.jsx';
import Cadastro from '../pages/Cadastro/Cadastro.jsx';
import Login from '../pages/Login/Login.jsx';
import Cadastro_endereco from "../pages/Cadastro/Cadastro_endereco.jsx";

const router = createBrowserRouter([
   { path: `/`, element: <Inicio /> },  
   { path: `/cadastro`, element: <Cadastro/>},
   { path: `/login`, element: <Login/>},
   { path: `/cadastro_endereco`, element: <Cadastro_endereco/>}

])

export default router;