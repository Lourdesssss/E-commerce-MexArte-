const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

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

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Enviado"
    }
})

/* Validación de inputs por colores */

const inputs = document.querySelectorAll("#form input")

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{8,18}$/, // 4 a 18 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    direccion: /^[a-zA-Z0-9\s]{1,40}$/,
    telefono: /^[0-9\s]{1,14}$/,
}

const validarFormulario = (e) => {    //e, solo se indica como parámetro, se refiere al evento
    switch (e.target.name){           // con target.name nos identifica los inputs por su name otorgado en el HTML 
        //Contraseña actual
        case "password":               //Se hace un switch para los distintos casos de inputs.
            if(expresiones.password.test(e.target.value)){ /* llamamos nuestra expresión regular, con test probamos, target.value para llamar el valor introducido */
                document.getElementById("password").classList.remove("validacion-incorrecta")
                document.getElementById("password").classList.add("validacion-correcta")
            } else {                  //Si no se cumple la expresión regular y el valor del input
                document.getElementById("password").classList.add("validacion-incorrecta")
                document.getElementById("password").classList.remove("validacion-correcta")
                /* document.querySelector("#error-nombre").classList.add("input-error-activo") */ /* Para colocar mensaje de error, el problema que nos mueve los demás elementos */
            }
        break;                        //El break se coloca para que no salte al siguiente case
        //Nueva contraseña
        case "password2":               
            if(expresiones.password.test(e.target.value)){
                document.getElementById("password2").classList.add("validacion-correcta")
                document.getElementById("password2").classList.remove("validacion-incorrecta")
        } else {                  
                document.getElementById("password2").classList.add("validacion-incorrecta")
                document.getElementById("password2").classList.remove("validacion-correcta")
            }
        break;
        //Confirmar nueva contraseña
        case "password3":               
            if(expresiones.password.test(e.target.value)){
                document.getElementById("password3").classList.add("validacion-correcta")
                document.getElementById("password3").classList.remove("validacion-incorrecta")
        } else {                  
                document.getElementById("password3").classList.add("validacion-incorrecta")
                document.getElementById("password3").classList.remove("validacion-correcta")
            }
        break;
    }
}

inputs.forEach((input) => {          /* Por cada input nos va a ejecutar la función flecha, se pone parámetro input para identificarlo */
    input.addEventListener("keyup", validarFormulario); //indíca que al soltar una tecla realiza la función, la cual está arriba
    input.addEventListener("blur", validarFormulario); //indíca que cada vez que se dá un click fuera de algún input, realiza la función
    //Esto con la finalidad de ir comprobando cada elemento puesto en inputs
}); 