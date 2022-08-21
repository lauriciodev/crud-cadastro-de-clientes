let modal = document.getElementById("modal__modal");

const openModal = () =>{
modal.classList.add("open")
}
const closeModal = () =>{
modal.classList.remove("open")
}


//inputs 
 let nome = document.getElementById("nome");
 let telefone = document.getElementById("telefone");
 let email = document.getElementById("email");
 let cidade = document.getElementById("cidade");


const clienteTemporario = {
  nome:"lauricio2",
  telefone:"9998998889",
  email:"lauricio2@gmail.com",
  cidadem:"vitorino-freire"
}

const getLocalStorage = () =>  JSON.parse( localStorage.getItem("dataBase")) ?? [];
const setLocalStorage = (cliente) =>  localStorage.setItem("dataBase", JSON.stringify(cliente)) 



// read 

const readCliente = () => getLocalStorage()

//create 

const createCliente = (cliente) =>{
 const  data = getLocalStorage();
 data.push(cliente);
 setLocalStorage(data);
}



//delete

const deleteCliente = (indice) =>{
  const  data  = getLocalStorage();
  data.splice(indice,1);
 setLocalStorage(data);
}


// update

const updateCliente = (cliente, indice) => {
  const  data = getLocalStorage();
  data[indice] = cliente;
  setLocalStorage(data);

}



const isValidClient = () => { return document.getElementById("form").reportValidity()}



// salvar cliente

const saveClient = () =>{
  if(isValidClient()){
    let dadosFront = {
      nome:nome.value,
      telefone:telefone.value,
      email:email.value,
      cidade:cidade.value
    }


    createCliente(dadosFront);
    closeModal();

  }
}







let callModal = document.getElementById("call__modal");
let closeModalBtn = document.getElementById("btn__close");
let btnCadastrar = document.getElementById("btn__cadastrar");

callModal.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
btnCadastrar.addEventListener("click", saveClient);


