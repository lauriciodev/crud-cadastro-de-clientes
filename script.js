
let Modal = document.querySelector(".modal__container");
let callModal = document.querySelector("#call__modal");
let cancel = document.querySelector("#cancel");

const changeModal = () =>{
    Modal.classList.toggle("modal__open");
}

let clienteTeste = {
nome:"bichona",
email:"bicha@gmail.com",
telefone:"09452792872",
cidade:"sao paulo"
};


const getLS = () => JSON.parse(localStorage.getItem ("dbCliente")) ?? [];
const setLS = (cliente) => localStorage.setItem("dbCliente",JSON.stringify(cliente));

//  função que ira criar um novo cliente 

const createCliente = (cliente) =>{
let dbcliente = readClient();
dbcliente.push(cliente);
setLS(dbcliente);
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
   
}

let contClientes = document.querySelector("#cont__clientes");


// função que manda os dado para o front-end 

const sendClient = (cliente) => {
    let newCliente = document.createElement("tr");
    newCliente.innerHTML = `
    <td>${cliente.nome}</td>
    <td>${cliente.email}</td>
    <td>${cliente.telefone}</td>
    <td>${cliente.cidade}</td>
    <td>
        <button class="btn"><i class="ri-delete-bin-7-fill"></i></button>
        <button class="btn"><i class="ri-pencil-fill"></i></button>
    </td>
    `
   contClientes.append(newCliente)
}

const riseCliente = () =>{
    let banco = readClient()
   banco.forEach(sendClient)
    
}
riseCliente()




// eventos 

cancel.addEventListener("click",changeModal);
callModal.addEventListener("click",changeModal);