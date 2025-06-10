import { createContext, ReactNode }  from "react";

export const  mainContext = createContext();

export function ContextProvider({children}: {children : ReactNode}) {

    return (
        <mainContext.Provider value={}>
            {children}
        </mainContext.Provider>
    )
    
}