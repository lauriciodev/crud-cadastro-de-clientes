import { createCliente } from "./create.js"
import { updateData } from './update.js'
import { getLS, setLS } from "./localStorage.js"
import { riseCliente } from "./riseClient.js"
import { deleteCliente } from "./delete.js"

let Modal = document.querySelector(".modal__container");
let callModal = document.querySelector("#call__modal");
let cancel = document.querySelector("#cancel");
const changeModal = () =>{
    Modal.classList.toggle("modal__open");
}

// campos inputs 
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let telefone = document.getElementById("telefone");
let cidade = document.getElementById("cidade");

//  função que ira criar um novo cliente 






// função qur irá validar o cliente 
const validCliente = () =>{
    if(nome.value !== "" && email.value !== "" && telefone.value !== "" && cidade.value !== ""){
        let newCliente = {
            nome:nome.value,
            email:email.value,
           telefone:telefone.value,
            cidade:cidade.value
        }

        createCliente(newCliente);
        riseCliente();
        changeModal();

        nome.value = ""
        email.value = ""
        telefone.value = ""
        cidade.value = ""


    }else{
        alert("preencha todos os campos!")
    }


}




// função que irá pegar o click 

const getClick = (evento) =>{
let click = evento.target
let ind = click.dataset.indice
let cliente = getLS()
if(click.id === "del"){
    if(confirm("deseja realmente deletar o cliente " + cliente[ind].nome )){
    deleteCliente(ind)
    }
}

}



export let contClientes = document.querySelector("#cont__clientes");


// função que manda os dado para o front-end 

export const sendClient = (cliente,indice) => {
    let newCliente = document.createElement("tr");
    newCliente.innerHTML = `
    <td>${cliente.nome}</td>
    <td>${cliente.email}</td>
    <td>${cliente.telefone}</td>
    <td>${cliente.cidade}</td>
    <td>
        <button class="btn" id="del" data-indice=${indice}><i class="ri-delete-bin-7-fill"></i></button>
        <button class="btn" id="edit" data-indice=${indice}><i class="ri-pencil-fill"></i></button>
    </td>
    `
   contClientes.append(newCliente)
}


riseCliente()




// eventos 

contClientes.addEventListener("click",getClick)
document.getElementById("btn__cadastro").addEventListener("click",validCliente)
cancel.addEventListener("click",changeModal);
callModal.addEventListener("click",changeModal);