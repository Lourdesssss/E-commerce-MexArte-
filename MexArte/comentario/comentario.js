const nombre = document.getElementById("name")
const email = document.getElementById("email")
const nombres = document.getElementById("nombres")
const apellidos = document.getElementById("apellidos")
const comentario = document.getElementById("comentarios")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = "" //Aquí nos retornan los mensajes al clickear en el boton
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if (!regexEmail.test(email.value)) {
        warnings += `¡Por favor, llena correctamente el formulario! <br>`
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "¡Mensaje enviado exitosamente!"
    }
})


/* Validación de inputs por colores */

const inputs = document.querySelectorAll("#form input")

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    comentario: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}

const validarFormulario = (e) => {    //e, solo se indica como parámetro, se refiere al evento
    switch (e.target.name){           // con target.name nos identifica los inputs por su name otorgado en el HTML 
        case "email":               //Se hace un switch para los distintos casos de inputs.
            if(expresiones.correo.test(e.target.value)){ /* llamamos nuestra expresión regular, con test probamos, target.value para llamar el valor introducido */
                document.getElementById("email").classList.remove("validacion-incorrecta")
                document.getElementById("email").classList.add("validacion-correcta")
            } else {                  //Si no se cumple la expresión regular y el valor del input
                document.getElementById("email").classList.add("validacion-incorrecta")
                document.getElementById("email").classList.remove("validacion-correcta")
                /* document.querySelector("#error-nombre").classList.add("input-error-activo") */ /* Para colocar mensaje de error, el problema que nos mueve los demás elementos */
            }
        break;                        //El break se coloca para que no salte al siguiente case
        case "nombres":               
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById("nombres").classList.add("validacion-correcta")
                document.getElementById("nombres").classList.remove("validacion-incorrecta")
        } else {                  
                document.getElementById("nombres").classList.add("validacion-incorrecta")
                document.getElementById("nombres").classList.remove("validacion-correcta")
            }
        break;

        case "apellidos":               
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById("apellidos").classList.add("validacion-correcta")
                document.getElementById("apellidos").classList.remove("validacion-incorrecta")
        } else {                  
                document.getElementById("apellidos").classList.add("validacion-incorrecta")
                document.getElementById("apellidos").classList.remove("validacion-correcta")
            }
        break;
        case "comentarios":               
        if(expresiones.nombre.test(e.target.value)){
            document.getElementById("comentarios").classList.add("validacion-correcta")
            document.getElementById("comentarios").classList.remove("validacion-incorrecta")
    } else {                  
            document.getElementById("comentarios").classList.add("validacion-incorrecta")
            document.getElementById("comentarios").classList.remove("validacion-correcta")
        }
    break;
    }
}

inputs.forEach((input) => {          /* Por cada input nos va a ejecutar la función flecha, se pone parámetro input para identificarlo */
    input.addEventListener("keyup", validarFormulario); //indíca que al soltar una tecla realiza la función, la cual está arriba
    input.addEventListener("blur", validarFormulario); //indíca que cada vez que se dá un click fuera de algún input, realiza la función
    //Esto con la finalidad de ir comprobando cada elemento puesto en inputs
}); 

// Registrar nuevo comentario
function postComentario() {

    fetch('http://localhost:8080/Comentario', {
        //se indica el tipo de peticion
        
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            nombre: nombres.value,
            apellido: apellidos.value,
            correo: email.value,
            comentario: comentario.value, 
        })
    })
    .then(response => response.json())
    .then(data =>{
        console.log('Success: ', data);
        console.log('Fecha de creación: ', data.createdAt);
    })
    .catch(error =>{
        console.error('Error: ', error);
    })
}