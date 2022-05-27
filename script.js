
let Modal = document.querySelector(".modal__container");
let callModal = document.querySelector("#call__modal");
let cancel = document.querySelector("#cancel");

const changeModal = () =>{
    Modal.classList.toggle("modal__open");
}
cancel.addEventListener("click",changeModal);
callModal.addEventListener("click",changeModal);