import Modal from './modal.js'

const modal = Modal()

//pegar todos os botoes que existem com a class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //add escuta
    button.addEventListener("click" , event => {
        modal.open()
    })
})

//pegar quando o marcar como lido for clicado