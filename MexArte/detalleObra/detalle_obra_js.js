console.log("Script Detalle Obra");

// Función que obtiene los parametros de la url
function getQueryVariable(variable) {
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

    let firstImage = document.getElementById("image-obra-detalle");
    let price = document.getElementById("product-price");
    let tituloObra = document.getElementById("titulo-obra");
    let descripcionObra = document.getElementById("descripcion-obra");
    firstImage.src = `${data.images[idObra - 1].url}`;
    price.innerHTML = `$${data.images[idObra - 1].price}MXN`;
    tituloObra.innerHTML = `${data.images[idObra - 1].name}`;
    descripcionObra.innerHTML = `${data.images[idObra - 1].about}`;
  });

  
