
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




const getLS = () => JSON.parse(localStorage.getItem ("dbCliente")) ?? [];
const setLS = (cliente) => localStorage.setItem("dbCliente",JSON.stringify(cliente));

//  função que ira criar um novo cliente 

const createCliente = (cliente) =>{
let dbcliente = readClient();
dbcliente.push(cliente);
setLS(dbcliente);

}





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

// função que ira atualizar os dado do  cliente 

const updateData = (indice,cliente) =>{
    let dbCliente = readClient();
    dbCliente[indice] = cliente;
    setLS(dbCliente);

}

// função que ira ler os dados do cliente 

const readClient = () => getLS();


//   função que ira deletar o cliente 

const deleteCliente = (indice) =>{
   let dbCliente = readClient();
   dbCliente.splice(indice,1);
   setLS(dbCliente);
   riseCliente()
   
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



let contClientes = document.querySelector("#cont__clientes");


// função que manda os dado para o front-end 

const sendClient = (cliente,indice) => {
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

const riseCliente = () =>{
    contClientes.innerHTML = "";
    let banco = readClient()
   banco.forEach((cliente,indice) => sendClient(cliente,indice))
    
}
riseCliente()




// eventos 

contClientes.addEventListener("click",getClick)
document.getElementById("btn__cadastro").addEventListener("click",validCliente)
cancel.addEventListener("click",changeModal);
callModal.addEventListener("click",changeModal);