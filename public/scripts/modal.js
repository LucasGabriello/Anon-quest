export default function Modal(){

    const cancelButton = document.querySelector(".button.cancel")
    const modalWrapper = document.querySelector('.modal-wrapper')

    cancelButton.addEventListener("click",close)

    function open(){
        //ativa classe modal
        modalWrapper.classList.add("active")
    }
    function close(){
        //desativa classe modal
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}