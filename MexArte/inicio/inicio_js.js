console.log("Script Inicio Leer Json");

// Se ejecutan las funciones
obrasDestacadas();
artistasEmergentes();
coleccionesDestacadas();



/**
 * Función que redirecciona a los artistas del inicio a sus perfiles
 * @param {numeric} idArtista
 */
function changePage(idArtista) {
  window.location.href = `../perfil/perfil.html?idArtist=${idArtista}`;
}

/**
 * Función que lista las obras destacadas con fetch a partir de un JSON
 */
function obrasDestacadas() {
  fetch("obras.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.images[1].url);

      //obtenemos el elemento que contendrá las obras destacadas en html mediante su ID
      let tbody = document.getElementById("tbody-inicio");
      // limpiamos el tbody
      tbody.innerHTML = "";
      //definimos el codigo html que estara dentro del tbody
      tbody.innerHTML += `
    <tr>
                <td align="right" valign="bottom">
                  <a href="../detalleObra/detalle_obra.html?idObra=${data.images[0].idObra}">
                    <div class="img1-collage">
                      <figure style="margin: 0">
                        <img
                          class="img-fluid"
                          src="${data.images[0].url}"
                          alt=""
                        />
                        <div class="capa-text">
                          <h5>Ver más</h5>
                        </div>
                      </figure>
                    </div>
                  </a>
                </td>
                <td rowspan="2" align="left" valign="bottom">
                  <a href="../detalleObra/detalle_obra.html?idObra=${data.images[1].idObra}">
                    <div class="img2-collage">
                      <figure style="margin: 0">
                        <img
                          class="img-fluid"
                          src="${data.images[1].url}"
                          alt=""
                        />
                        <div class="capa-text">
                          <h5>Ver más</h5>
                        </div>
                      </figure>
                    </div>
                  </a>
                </td>
              </tr>
              <tr>
                <td rowspan="2" align="right" valign="top">
                  <a href="../detalleObra/detalle_obra.html?idObra=${data.images[2].idObra}">
                    <div class="img3-collage">
                      <figure style="margin: 0">
                        <img
                          class="img-fluid"
                          src="${data.images[2].url}"
                          alt=""
                        />
                        <div class="capa-text">
                          <h5>Ver más</h5>
                        </div>
                      </figure>
                    </div>
                  </a>
                </td>
              </tr>
              <tr>
                <td align="left" valign="top">
                  <a href="../detalleObra/detalle_obra.html?idObra=${data.images[3].idObra}">
                    <div class="img4-collage">
                      <figure style="margin: 0">
                        <img
                          class="img-fluid"
                          src="${data.images[3].url}"
                          alt=""
                        />
                        <div class="capa-text">
                          <h5>Ver más</h5>
                        </div>
                      </figure>
                    </div>
                  </a>
                </td>
              </tr>
    `;
    });
}

/**
 * Función que lista los artistas emergentes con fetch a partir de un JSON
 */
function artistasEmergentes() {
  fetch("artists.json")
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
            <div class="col-5 col-md-4 col-lg-3">
              <div class="contenedor-img-art row rounded-circle" id="contenedor-img-art" onclick="changePage(${artist.idArtist})">
                <img
                  class="img-fluid rounded-circle"
                  src="${artist.url}"
                 
                />
              </div>
              <h5>${artist.name}</h5>
              <h6>${artist.kindOf}</h6>
            </div>
              `;
      }
    });
}

/**
 * Función que lista las colecciones destacadas con fetch a partir de un JSON
 */
function coleccionesDestacadas() {
  fetch("collections.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.collections);

      let colecciones = document.getElementById("colecciones-des");
      for (const collection of data.collections) {
        colecciones.innerHTML += `
          <div class="col-8 col-sm-5 col-md-4 col-lg-3">
            <a href="">
              <div class="img1-coleccion">
                <figure style="margin: 0">
                  <img
                    class="img-fluid"
                    src="${collection.url}"
                    alt=""
                  />
                  <div class="capa-text">
                    <h5>Ver más</h5>
                  </div>
                </figure>
              </div>
            </a>
            <h5>${collection.name}</h5>
          </div>
        `;
      }
    });
}
