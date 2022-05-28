import { getLS, setLS } from "./localStorage.js"

export const updateData = (indice,cliente) =>{
    let dbCliente = getLS();
    dbCliente[indice] = cliente;
    setLS(dbCliente);

}