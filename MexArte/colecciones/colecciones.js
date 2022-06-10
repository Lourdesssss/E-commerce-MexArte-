/**
 * Esta función mostrará los trabajos que cumplan con el criterio de precio
 * que establece cada botón
 * @param {*} min Parámetro mínimo de precio
 * @param {*} max Parámetro máximo de precio
 */
function filtrarPrecio(min, max){
  fetch("/cliente/cliente.json")
  .then((response) => response.json())
  .then((data)=>{
    /*console.log(typeof data);
    console.log(data.listaCompra[0].precio);*/
    let tbody = document.getElementById("tbody-opciones");
    tbody.innerHTML = "";
    for(const id in data.listaCompra){
      console.log(data.listaCompra[id].precio);
      if(data.listaCompra[id].precio >=min && data.listaCompra[id].precio <=max){

        tbody.innerHTML += `
        <!--opcion 1 de fotos-->
        <div class="row opcion item">
          <!--columna de foto-->
          <div class="col-6">
            <img src="${data.listaCompra[id].enlace}" alt="Prueba 1" class="mx-auto d-block imagen item-image">
          </div>

          <!--columna de descripcion-->
          <div class="col-xl-6">
            <h1 class="nombreObra item-nombreObra">"${data.listaCompra[id].nombreObra}"</h1>
            <h3 class="nombreArtista">${data.listaCompra[id].nombreArtista}</h3> <p class="corriente">${data.listaCompra[id].corriente}</p>
            <h6 class="descripcion">${data.listaCompra[id].descripcion}</h6>
            <button type="button" class="btn btn-warning addToCart">Agregar al carrito</button>
            <h6 class="precio item-precio">$${data.listaCompra[id].precio}</h6>
          </div>
        </div>`;
      }
    }
  });
}

/**
 * Esta función mostrará los trabajos que existan según la corriente a la
 * que pertenezca
 * @param {*} corriente Strign de la corriente
 */
function filtrarCorriente(corrienteSelect){
  fetch("/cliente/cliente.json")
  .then((response) => response.json())
  .then((data)=>{
    /*console.log(data.listaCompra[0].corriente);*/
    let seleccion=corrienteSelect;
    let tbody = document.getElementById("tbody-opciones");
    tbody.innerHTML = "";
    
    console.log(corrienteSelect);
    for(const id in data.listaCompra){
      if(data.listaCompra[id].corriente == corrienteSelect){
        tbody.innerHTML += `
        <!--opcion 1 de fotos-->
        <div class="row opcion item">
          <!--columna de foto-->
          <div class="col-6">
            <img src="${data.listaCompra[id].enlace}" alt="Prueba 1" class="mx-auto d-block imagen item-image">
          </div>

          <!--columna de descripcion-->
          <div class="col-xl-6">
            <h1 class="nombreObra item-nombreObra">"${data.listaCompra[id].nombreObra}"</h1>
            <h3 class="nombreArtista">${data.listaCompra[id].nombreArtista}</h3> <p class="corriente">${data.listaCompra[id].corriente}</p>
            <h6 class="descripcion">${data.listaCompra[id].descripcion}</h6>
            <button type="button" class="btn btn-warning addToCart">Agregar al carrito</button>
            <h6 class="precio item-precio">$${data.listaCompra[id].precio}</h6>
          </div>
        </div>`;
      }
    }
  });
}

/**
 * Función de reset para regresar a una vista sin filtros
 */
function opcionesObras() {
    fetch("/cliente/cliente.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
  
        //obtenemos el elemento que contendrá las obras destacadas en html mediante su ID
        let tbody = document.getElementById("tbody-opciones");
        // limpiamos el tbody
        tbody.innerHTML = "";
        //definimos el codigo html que estara dentro del tbody
        for(const id in data.listaCompra){
          console.log(data.listaCompra[id].precio);
    
            tbody.innerHTML += `
            <!--opcion 1 de fotos-->
            <div class="row opcion item">
              <!--columna de foto-->
              <div class="col-6">
                <img src="${data.listaCompra[id].enlace}" alt="Prueba 1" class="mx-auto d-block imagen item-image">
              </div>
    
              <!--columna de descripcion-->
              <div class="col-xl-6">
                <h1 class="nombreObra item-nombreObra">"${data.listaCompra[id].nombreObra}"</h1>
                <h3 class="nombreArtista">${data.listaCompra[id].nombreArtista}</h3> <p class="corriente">${data.listaCompra[id].corriente}</p>
                <h6 class="descripcion">${data.listaCompra[id].descripcion}</h6>
                <button type="button" class="btn btn-warning addToCart">Agregar al carrito</button>
                <h6 class="precio item-precio">$${data.listaCompra[id].precio}</h6>
              </div>
            </div>`;
        }
      });
}

/**
 * Esta función regresará una búsqueda filtrada según la artista que se seleccione
 * @param {*} artistaSelect 
 */
function filtrarArtista(artistaSelect){
  fetch("/cliente/cliente.json")
  .then((response) => response.json())
  .then((data)=>{
    /*console.log(data.listaCompra[0].corriente);*/
    let seleccion=artistaSelect;
    let tbody = document.getElementById("tbody-opciones");
    tbody.innerHTML = "";
    
    console.log(artistaSelect);
    for(const id in data.listaCompra){
      if(data.listaCompra[id].nombreArtista == artistaSelect){
        tbody.innerHTML += `
        <!--opcion 1 de fotos-->
        <div class="row opcion item">
          <!--columna de foto-->
          <div class="col-6">
            <img src="${data.listaCompra[id].enlace}" alt="Prueba 1" class="mx-auto d-block imagen item-image">
          </div>

          <!--columna de descripcion-->
          <div class="col-xl-6">
            <h1 class="nombreObra item-nombreObra">"${data.listaCompra[id].nombreObra}"</h1>
            <h3 class="nombreArtista">${data.listaCompra[id].nombreArtista}</h3> <p class="corriente">${data.listaCompra[id].corriente}</p>
            <h6 class="descripcion">${data.listaCompra[id].descripcion}</h6>
            <button type="button" class="btn btn-warning addToCart">Agregar al carrito</button>
            <h6 class="precio item-precio">$${data.listaCompra[id].precio}</h6>
          </div>
        </div>`;
      }
    }
  });
}

opcionesObras();
