import { getLS, setLS } from "./localStorage.js"

export const createCliente = (cliente) =>{
    let dbcliente = getLS();
    dbcliente.push(cliente);
    setLS(dbcliente);
    
}    