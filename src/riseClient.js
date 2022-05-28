import { getLS } from "./localStorage.js"
import { contClientes, sendClient } from "./script.js"

export const riseCliente = () =>{
    contClientes.innerHTML = "";
    let banco = getLS()
    banco.forEach((cliente,indice) => sendClient(cliente,indice))
    
}