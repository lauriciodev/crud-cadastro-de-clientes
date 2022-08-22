let modal = document.getElementById("modal__modal");

const openModal = () =>{
modal.classList.add("open")
}
const closeModal = () =>{
modal.classList.remove("open")
clearFileds();
nome.dataset.indice = "new"

}


//inputs 
 let nome = document.getElementById("nome");
 let telefone = document.getElementById("telefone");
 let email = document.getElementById("email");
 let cidade = document.getElementById("cidade");


const getLocalStorage = () =>  JSON.parse( localStorage.getItem("dataBase")) ?? [];
const setLocalStorage = (cliente) =>  localStorage.setItem("dataBase", JSON.stringify(cliente)) 



// read 

const readCliente = () => getLocalStorage()

//create 

const createCliente = (cliente) =>{
 const  data = getLocalStorage();
 data.push(cliente);
 setLocalStorage(data);
 updateRow();
}



//delete

const deleteCliente = (indice) =>{
  const  data  = getLocalStorage();
  data.splice(indice,1);
 setLocalStorage(data);
 updateRow();
 
}


// update

const updateCliente = (cliente, indice) => {
  const  data = getLocalStorage();
  data[indice] = cliente;
  setLocalStorage(data);
  updateRow();
  nome.dataset.indice = "new"


}


const isValidClient = () =>{
  return  document.getElementById("form").reportValidity()

}

const clearFileds = () =>{
  let fields = document.querySelectorAll(".modal__fields");
  fields.forEach(field => field.value = "");
}

const createTable = (client,index) =>{
  const newTable = document.createElement("tr");
  newTable.innerHTML = `
    <td>${client.nome}</td>
    <td>${client.telefone}</td>
    <td>${client.email}</td>
    <td>${client.cidade}</td>
    <td class="button__container">
      <button type="button" class="btn" id="edit-${index}">Editar</button>
      <button type="button" class="btn" id="delete-${index}">Deletar</button>
    </td>
  `
  document.getElementById("tableBody").append(newTable)


}


const updateRow = () =>{
  document.getElementById("tableBody").innerHTML = ""
  let dataBase = readCliente();
  dataBase.forEach(createTable);
}


// salvar cliente

const saveClient = () =>{
  if(isValidClient()){
    let dadosFront = {
      nome:nome.value,
      telefone:telefone.value,
      email:email.value,
      cidade:cidade.value
    }

    if(nome.dataset.indice === "new"){
    createCliente(dadosFront);
    closeModal();
    }else{
      updateCliente(dadosFront,nome.dataset.indice)
      closeModal();
      

    }


  }
}



const editCliente = (index) =>{
  let dataBase = readCliente();

      nome:nome.value = dataBase[index].nome
      telefone:telefone.value = dataBase[index].telefone
      email:email.value = dataBase[index].email
      cidade:cidade.value = dataBase[index].cidade

      nome.dataset.indice = index

      openModal()

}


const editDelete = (event) =>{
  if (event.target.type === "button") {
    const [action, indice]=  event.target.id.split("-");

     if(action == "edit"){
      
      editCliente(indice)
     }else{
      deleteCliente(indice)
     }


  }
}




updateRow();



let callModal = document.getElementById("call__modal");
let closeModalBtn = document.getElementById("btn__close");
let btnCadastrar = document.getElementById("btn__cadastrar");

callModal.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
btnCadastrar.addEventListener("click", saveClient);
document.getElementById("tableBody").addEventListener("click", editDelete)

