import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const [array_usuarios, set_array_usuarios] = useState([]);

    return (
        <GlobalContext.Provider value={{

            array_usuarios,
            set_array_usuarios
        }}>
            {children}
        </GlobalContext.Provider>
    )
}