console.log("Script Inicio Leer Json");

/**
 * Función que redirecciona a los artistas del inicio a sus perfiles 
 * @param {numeric} idArtista 
 */
function changePage(idArtista) {
  window.location.href = `../perfil/perfil.html?idArtist=${idArtista}`
}



/**
 * Función que lista los artistas  con fetch a partir de un JSON
 */
function artistas() {
  fetch("../inicio/artists.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //obtenemos el elemento que contendrá a los artistas emergentes en html mediante su ID
      let artistas = document.getElementById("artistas");
      // hacemos una iteración por los objetos dentro de los datos obtenidos por fetch
      // por cada objeto se concatenará al elemento html "artistas" los elementos para mostrar
      // a nuestros artistas cambiando los datos de forma dinámica dependiendo del objeto
      for (const artist of data.artists) {
        artistas.innerHTML += `
        <div class="col">              
        <div class="our-team">
        <div class="picture">
        
          <img src="${artist.url}"  class="img-fluid rounded-circle"  alt="Circle image" onclick="changePage(${artist.idArtist})">
     
            <h5>${artist.name}</h5>
            <p>${artist.kindOf}</p>
          
          </div>
        </div>
      </div>
              `;
      }
    });
}


// Se ejecutan las funciones
artistas();

//     contenedor.click(window.location.href=/perfil/perfil.html);
/*
<div class="col">              
<div class="our-team">
<div class="picture">

  <img src="${artist.url}" onclick="changePage(${artist.idArtist})">

    <h5>${artist.name}</h5>
    <p>${artist.kindOf}</p>
  </div>
</div>
</div>*/