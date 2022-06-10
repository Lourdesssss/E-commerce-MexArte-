const formulario = document.getElementById("formulario-pago") //Se trae el formulario HTML y se declara en la constante
const inputs = document.querySelectorAll("#formulario-pago input") //Se traen los inputs HTML y se declaran en la constante

/* Expresiones regulares */
/* Validaciones prefabricadas para el checeo de los datos establecidos en los inputs */
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    direccion: /^[a-zA-Z0-9\s]{1,40}$/,
    telefono: /^[0-9\s]{1,14}$/,
}

const validarFormulario = (e) => {    //e, solo se indica como parámetro, se refiere al evento
    switch (e.target.name){           // con target.name nos identifica los inputs por su name otorgado en el HTML 
        case "nombres":               //Se hace un switch para los distintos casos de inputs.
            if(expresiones.nombre.test(e.target.value)){ /* llamamos nuestra expresión regular, con test probamos, target.value para llamar el valor introducido */
                document.getElementById("nombres").classList.remove("validacion-incorrecta")
                document.getElementById("nombres").classList.add("validacion-correcta")
            } else {                  //Si no se cumple la expresión regular y el valor del input
                document.getElementById("nombres").classList.add("validacion-incorrecta")
                document.getElementById("nombres").classList.remove("validacion-correcta")
                /* document.querySelector("#error-nombre").classList.add("input-error-activo") */ /* Para colocar mensaje de error, el problema que nos mueve los demás elementos */
            }
        break;                        //El break se coloca para que no salte al siguiente case

        case "apellidos":               
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById("apellidos").classList.add("validacion-correcta")
                document.getElementById("nombres").classList.remove("validacion-incorrecta")
        } else {                  
                document.getElementById("apellidos").classList.add("validacion-incorrecta")
                document.getElementById("apellidos").classList.remove("validacion-correcta")
            }
        break;
        case "correo":               
            if(expresiones.correo.test(e.target.value)){ 
                document.getElementById("correo").classList.remove("validacion-incorrecta")
                document.getElementById("correo").classList.add("validacion-correcta")
        } else {                  
                document.getElementById("correo").classList.add("validacion-incorrecta")
                document.getElementById("correo").classList.remove("validacion-correcta")
            }
        break;
        case "direccion":               
                if(expresiones.direccion.test(e.target.value)){
                document.getElementById("direccion").classList.remove("validacion-incorrecta")
                document.getElementById("direccion").classList.add("validacion-correcta")
        } else {                 
                document.getElementById("direccion").classList.add("validacion-incorrecta")
                document.getElementById("direccion").classList.remove("validacion-correcta")
            }           
        break;

        case "telefono":               
                if(expresiones.telefono.test(e.target.value)){
                document.getElementById("telefono").classList.remove("validacion-incorrecta")
                document.getElementById("telefono").classList.add("validacion-correcta")
        } else {                  
                document.getElementById("telefono").classList.add("validacion-incorrecta")
                document.getElementById("telefono").classList.remove("validacion-correcta")
            }             
        break;
    }
}

/* Por cada input que tengamos en nuestra página nos va a ejecutar la función */
inputs.forEach((input) => {          /* Por cada input nos va a ejecutar la función flecha, se pone parámetro input para identificarlo */
    input.addEventListener("keyup", validarFormulario); //indíca que al soltar una tecla realiza la función, la cual está arriba
    input.addEventListener("blur", validarFormulario); //indíca que cada vez que se dá un click fuera de algún input, realiza la función
    //Esto con la finalidad de ir comprobando cada elemento puesto en inputs
}); 


/* Esta es la misma función que se encuentra arriba, solo que aquí se pone un console.log para realizar la prueba de que works */
/* Por cada input que tengamos en nuestra página nos va a ejecutar la función */
//inputs.forEach((input) => {                              /* Por cada input nos va a ejecutar la función flecha, se pone parámetro input para identificarlo */
//    input.addEventListener("keyup", () => {         /* keyup nos dice que cada ves que se levante una tecla, realiza la función flecha */
//       console.log("Tecla levantada")           /* Esto nos arroja un valor en consola para saber que funciona (prueba) */
//    });
//}); 


/* Para que nuestro formulario no nos mande información y nos cambié de página (prueba), luego si se cambia en el backend*/
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
})