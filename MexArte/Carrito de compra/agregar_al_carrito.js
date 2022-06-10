console.log("Prueba JS carrito de compra")
/* JS para la ejecución del JSON lo cual simula la base de datos, así como las funcionalidades de agregar, eliminar al carrito */
/* const items = document.getElementById("");
const templateCard = document.getElementById("").content; */

/* Se añade un DomContentLoaded para que nos ejecute el fetch cuando haya cargado todo el documento */
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

/* Fetch que carga nuestro json y se atrapa error con catch */
const fetchData = async () => {
    try {
        const res = await fetch("productos.json")
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


/* ------------------------ */
/* LOCAL STORAGE */
/* ------------------------ */

/* activar función guardar_localStorage para guardar nuevos elementos en localstorage, se desactiva funcion obtener_localstorage, y luego se cambia los papeles  */

/* guardar_localStorage(); */

obtener_localStorage();


/* Función para obtener la informació guardada en el localstorage, se llama en parte superior */
function obtener_localStorage(){

    if(localStorage.getItem("List")){                //El if se emplea en caso de error, que no colapse nuestra página, para obtener el error en else
    let list = JSON.parse(localStorage.getItem("List"));    //Se usa json parse para convertirlo a objeto de nuevo, se emplea get para llamar y la llave usada en el set
    console.log(list);          //llamamos el list creado en la línea anterior
    }else{
        console.log("No hay entradas en el localStorage")
    }
}

/* Función para guardar en el localstorage, se llama en la parte superior */
function guardar_localStorage(){

lst = [{                    //Creamos un objeto
	name: "Gerardo",
	age: 26,
    correo: "geraismehu"
},{
	name: "Francisco",
	age: 29,
    correo: "francisquillo"
}];


localStorage.setItem("List", JSON.stringify(lst));      //Se convierte el objeto a json para que lo tome como string en localstorage

}
/* ------------------------ */
/* END LOCAL STORAGE */
/* ------------------------ */


