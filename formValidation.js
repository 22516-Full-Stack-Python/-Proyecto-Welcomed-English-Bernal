const $form = document.querySelector("form")

$form.onsubmit = function validateForm (e) {
    validateName(e)
}


function validateName (e) {
    const name = document.querySelector("#nombre").value 
    const regex = /[A-z]/g
    if(!name.match(regex)) {
        e.preventDefault()
    } 
}