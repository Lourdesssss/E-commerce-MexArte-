const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const nombres = document.getElementById("nombres")
const apellidos = document.getElementById("apellidos")
const telefono = document.getElementById("phone")
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
	password: /^.{8,16}$/, // 8 a 16 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    direccion: /^[a-zA-Z0-9\s]{1,40}$/,
    telefono: /^[0-9\s]{1,14}$/,
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
        
        case "name":               
            if(expresiones.usuario.test(e.target.value)){
                document.getElementById("name").classList.add("validacion-correcta")
                document.getElementById("name").classList.remove("validacion-incorrecta")
        } else {                  
                document.getElementById("name").classList.add("validacion-incorrecta")
                document.getElementById("name").classList.remove("validacion-correcta")
            }
        break;

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

        case "password":               
            if(expresiones.password.test(e.target.value)){
                document.getElementById("password").classList.add("validacion-correcta")
                document.getElementById("password").classList.remove("validacion-incorrecta")
        } else {                  
                document.getElementById("password").classList.add("validacion-incorrecta")
                document.getElementById("password").classList.remove("validacion-correcta")
            }
        break;

        case "password2":               
            if(expresiones.password.test(e.target.value)){
                document.getElementById("password2").classList.add("validacion-correcta")
                document.getElementById("password2").classList.remove("validacion-incorrecta")
        } else {                  
                document.getElementById("password2").classList.add("validacion-incorrecta")
                document.getElementById("password2").classList.remove("validacion-correcta")
            }
        break;

        case "phone":               
            if(expresiones.telefono.test(e.target.value)){
                document.getElementById("phone").classList.add("validacion-correcta")
                document.getElementById("phone").classList.remove("validacion-incorrecta")
        } else {                  
                document.getElementById("phone").classList.add("validacion-incorrecta")
                document.getElementById("phone").classList.remove("validacion-correcta")
            }
        break;
    }

    //Verificación de contraseña
    let contra1 = document.getElementById("password");
    let contra2 = document.getElementById("password2");
    if (contra1.value !== contra2.value){
        document.getElementById("password2").classList.remove("validacion-correcta")
        document.getElementById("password2").classList.add("validacion-incorrecta")  
    }else{
        document.getElementById("password2").classList.remove("validacion-incorrecta")
        document.getElementById("password2").classList.add("validacion-correcta")
    }
    
}

inputs.forEach((input) => {          /* Por cada input nos va a ejecutar la función flecha, se pone parámetro input para identificarlo */
    input.addEventListener("keyup", validarFormulario); //indíca que al soltar una tecla realiza la función, la cual está arriba
    input.addEventListener("blur", validarFormulario); //indíca que cada vez que se dá un click fuera de algún input, realiza la función
    //Esto con la finalidad de ir comprobando cada elemento puesto en inputs
}); 

// metodo post para crear un nuevo usuario
function postUser() {
    let userType = valorSelect()
    let coleccionista = 0;
    let artista = 0;
    if(userType == 1){
        coleccionista = 1;
    }
    else{
        artista = 1;
    }

    fetch('http://localhost:9090/usuarios', {
        //se indica el tipo de peticion
        
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            correo: email.value,
            nombreUsuario: nombre.value,
            password: pass.value,
            nombre: nombres.value,
            apellidoPat: apellidos.value,
            telefono: telefono.value,
            coleccionista: coleccionista,
            artista: artista
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


function valorSelect() {

    //Para obtener el valor
    const selectUser = document.getElementById("PerfilUser").value;
    console.log(selectUser);

    return selectUser;

/*     //Para obtener el texto
    const valorUser = document.getElementById("PerfilUser");
    const seleccionada = valorUser.options[valorUser.selectedIndex].text;
    console.log(seleccionada); */
}

// Ejecución
/* valorSelect(); */

