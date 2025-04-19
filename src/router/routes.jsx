import { createBrowserRouter } from "react-router-dom";
import Inicio from '../pages/Inicio.jsx';
import Cadastro from '../pages/Cadastro/Cadastro.jsx';
import Login from '../pages/Login/Login.jsx';

const router = createBrowserRouter([
   { path: `/`, element: <Inicio /> },  
   { path: `/cadastro`, element: <Cadastro/>},
   { path: `/login`, element: <Login/>}

])

export default router;