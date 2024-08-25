import { createContext, useState, useEffect } from "react";
import JSONS from "../Services/JSONServices";
export const myContext = createContext();

export function MyProvider ({children}){
    const [data, setData] = useState(false);
    const [updServ, setUpdServ] = useState(false)

    useEffect(()=>{
        getDataServ()
    }, [updServ])

    async function getDataServ() {
        const data = await JSONS.getData();
        setData(data);
    }

    const stateContext = {data, setData, updServ, setUpdServ}

    if (!data) {
        return (
            <h1>
                Loading...
            </h1>
        )
    }
    return <myContext.Provider value = {stateContext}>{children}</myContext.Provider>
}