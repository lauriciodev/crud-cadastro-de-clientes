import { getLS, setLS } from './localStorage.js'
import { riseCliente } from "./riseClient.js"

export const deleteCliente = (indice) =>{
    let dbCliente = getLS();
    dbCliente.splice(indice,1);
    setLS(dbCliente);
    riseCliente()
    
 }