import { createContext, ReactNode, useEffect, useState }  from "react";
import type User from "../types/User.ts";

interface MainContextType {
    data: User[] | undefined | null;
}

export const  mainContext = createContext<MainContextType>({
    data: [],
});

export function ContextProvider({children}: {children : ReactNode}) {
    const [data, setData] = useState<User[]| undefined | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const url: string = `https://jsonplaceholder.typicode.com/users`
    
                const req = await fetch(url);
    
                if(req.ok) {
                    const data: User[] = await req.json();
                    setData(data);
                } else {
                    setData(undefined);
                }
                
            } catch (error) {
                console.warn(error);
                setData(undefined)
            }
        })();

    }, []);

    return (
        <mainContext.Provider value={{ data }}>
            {children}
        </mainContext.Provider>
    )
    
}