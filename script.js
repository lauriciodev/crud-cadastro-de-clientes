




//  <div class="info__container">
//  <h3 class="nome">lauricio</h3>
//  <h3 class="cargo">Motorista</h3>
//  <h3 class="salario">5000,00</h3>
//  <div class="functions">
//      <button class="btn__edit">
//           editar
//      </button>
//       <button class="btn__remove">
//        remover
//       </button>
//  </div>
// </div>


/* 
1-adicionar dados de forma dinamica
2-adicionar funções de ação de cada cadastro
3-passar parametros na função para destinguir as ações


*/


let btnSalvar = document.querySelector("#btn__salvar");

let btnCadastrar = document.querySelector("#btn__cadastrar");


let modal = document.querySelector(".cont__modal");

function show(acao) {
    if (acao === "cadastrar") {
        btnSalvar.style.display = "none"
        btnCadastrar.style.display = "inline"
        nome.value = "";
        cargo.value = "";
        salario.value = "";
        modal.classList.toggle("show");  
    } 


   
    else if (acao === "cancelar") {
        modal.classList.remove("show");  
    }
    
    
}




let nome = document.querySelector("#nome");
let cargo = document.querySelector("#cargo");
let salario = document.querySelector("#salario");





const banco = [
    { nome: "maria clara", cargo: "redatora", salario: "300,00" },
    { nome: "Samanta Silva", cargo: "fachineira", salario: "40,00" }
];


let parent = document.querySelector("#cont__parent");

const insertData = (nome,cargo,salario,indice) => {
    let newData = document.createElement("div");
    newData.classList.add("info__container");
    newData.innerHTML = `
    <h3>${indice + 1}</h3>
    <h3 class="nome">${nome}</h3> 
    <h3 class="cargo">${cargo}</h3>
    <h3 class="salario">${salario}</h3>

  <div class="functions">     
    <button class="btn__edit" id="edit" data-id=${indice}>
    editar
    </button>
    <button class="btn__remove" id="remove" data-id=${indice}>
    remover
    </button>
  </div>

    `;

    parent.appendChild(newData);
}

/*
função que ira adicinar novos funcionaios ao banco
*/

const newColaborator = () => {
    if (nome.value !== "" && cargo.value !== "" && salario.value !== "") {
        let nomeValue = nome.value;
        let cargoValue = cargo.value;
        let salarioValue = salario.value;

        banco.push({ nome: nomeValue, cargo: cargoValue, salario: salarioValue });
        getBanco()
        show('cancelar')

        nome.value = "";
        cargo.value = "";
        salario.value = "";
    } else {
        alert("preencha todos os dados!")
    }
}

const actions = (evento) => {
    let click = evento.target
    let idElemento = click.dataset.id;
    
    if (evento.target.id === "edit") {
        btnCadastrar.style.display = "none";
        btnSalvar.style.display = "inline";
        nome.value = banco[idElemento].nome
        cargo.value = banco[idElemento].cargo
        salario.value = parseFloat(banco[idElemento].salario).toFixed(2)
        modal.classList.toggle("show");
        
    } else if (evento.target.id === "remove") {
        banco.splice(idElemento, 1)
        getBanco();
    }

    
}

const edited = () => {
    //função que ira salvar apos a edição
}


const getBanco = () => {
    parent.innerHTML = "";

    banco.forEach((item,indice) => insertData(item.nome, item.cargo, item.salario, indice));
}

getBanco();

document.querySelector("#btn__salvar").addEventListener("click",edited)
document.querySelector(".container__cadastros").addEventListener("click",actions)
document.querySelector("#btn__cadastrar").addEventListener("click", newColaborator);

