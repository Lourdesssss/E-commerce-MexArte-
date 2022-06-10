console.log("Script Prueba Boton");

// Función que obtiene los parametros de la url
/* function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

fetch("../inicio/obras.json")
  .then((response) => response.json())
  .then((data) => {
    let idObra = getQueryVariable("idObra");
    console.log(idObra);
    console.log(data);
    console.log(data.images[1].url);

    let firstImage = document.getElementById("firstImage");
    let price = document.getElementById("product-price");
    let tituloObra = document.getElementById("titulo-obra");
    let descripcionObra = document.getElementById("descripcion-obra");
    firstImage.src = `${data.images[idObra - 1].url}`;
    price.innerHTML = `$${data.images[idObra - 1].price}`;
    tituloObra.innerHTML = `${data.images[idObra - 1].name}`;
    descripcionObra.innerHTML = `${data.images[idObra - 1].about}`;
  }); */

  //Asignamos el botón html a constante button
  /*const button = document.getElementById("button")
  //Se agrega EvenLis para que al dar click realice el fetch y nos lea el formato json que le pedimos
  button.addEventListener('click', () => {
      fetch("/inicio/obras.json")
      .then(res => res.json())
      .then((data) => console.log(data))
  })*/

  const button2 = document.getElementById("button") 
  
  button.addEventListener('click', () =>{
    const newPost = {
      title: 'A new post',
      body: 'Cuerpo de nuestro objeto, este solo es un ejemplo',
      userId: 1 
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers:{
            'Content-type': 'application/json'
        }
    }).then(res => res.json())
    .then(data => console.log(data))
  })

  
