const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const cvv = document.getElementById("cvv")
const cp = document.getElementById("cp")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if (!regexEmail.test(email.value)) {
        warnings += `E-mail inválido. <br>`
        entrar = true
    }

    if (pass.value.length < 8) {
        warnings += `Contraseña inválida, debe contener más de 8 caracteres. <br>`
        entrar = true
    }

    if (cvv.value.length > 3) {
        warnings += `CVV inválido, no debe de contener más de 3 números. <br>`
        entrar = true
    }

    if (cp.value.length > 5) {
        warnings += `Código postal inválido, no debe de contener más de 5 números. <br>`
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Enviado"
    }
})

