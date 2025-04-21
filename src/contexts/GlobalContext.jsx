import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const [array_usuarios, set_array_usuarios] = useState([]);
    const [array_enderecos, set_array_enderecos] = useState([]);

    return (
        <GlobalContext.Provider value={{

            array_usuarios,
            set_array_usuarios,
            array_enderecos,
            set_array_enderecos
        }}>
            {children}
        </GlobalContext.Provider>
    )
}