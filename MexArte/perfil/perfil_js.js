let paginaActual = 1;
let itemsPagina = 8;
let totalObrasArtista = 20;
let i = 0;
const array = [];

// petición fecth al archivo JSON de los artistas para obtener su información
fetch("../inicio/artists.json")
  .then((response) => response.json())
  .then((data) => {
    let idArtist = getQueryVariable("idArtist");
    console.log(idArtist);
    console.log(data);

    let perfilImage = document.getElementById("perfil-image");
    let perfilName = document.getElementById("perfil-name");
    let perfilTipo = document.getElementById("perfil-tipo");
    let perfilAcerca = document.getElementById("perfil-acerca");
    perfilImage.src = `${data.artists[idArtist - 1].url}`;
    perfilName.innerHTML = `${data.artists[idArtist - 1].name}`;
    perfilTipo.innerHTML = `${data.artists[idArtist - 1].kindOf}`;
    perfilAcerca.innerHTML = `${data.artists[idArtist - 1].about}`;
  });

change(1);
iniciarBtns();
indiceInicialPagina();

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

/**
 * Función que lista los botones según el número de páginas de obras del artista
 */
function iniciarBtns() {
  let btnsPaginacion = document.getElementById("btns-paginacion");
  btnsPaginacion.innerHTML = "";
  for (let index = 0; index < totalPaginas(); index++) {
    btnsPaginacion.innerHTML += `
      <button type="button" class="btn" id="btn-pag${
        index + 1
      }" onclick="onclickIndice(${index})">${index + 1}</button>
      `;
  }
  document.getElementById("btn-pag1").classList.add("active");
}

/**
 * Función que calcula el total de paginas a listar según el numero de obras por artista y las obras que debe listar cada página
 */
function totalPaginas() {
  return Math.ceil(totalObrasArtista / itemsPagina);
}

/**
 * Función que calcula los indices de inicio de cada página
 */
function indiceInicialPagina() {
  for (
    let index = 0;
    index < Math.ceil(totalObrasArtista / itemsPagina);
    index++
  ) {
    array.push(8 * index);
  }
  console.log(array);
}

function anteriorPagina() {
  if (paginaActual > 1) {
    document
      .getElementById(`btn-pag${paginaActual}`)
      .classList.remove("active");
    paginaActual--;
    i = array[paginaActual - 1];
    document.getElementById(`btn-pag${paginaActual}`).classList.add("active");
    change(paginaActual);
  }
}

function siguientePagina() {
  if (paginaActual < totalPaginas()) {
    document
      .getElementById(`btn-pag${paginaActual}`)
      .classList.remove("active");
    paginaActual++;
    document.getElementById(`btn-pag${paginaActual}`).classList.add("active");
    i = array[paginaActual - 1];
    change(paginaActual);
  }
}

/**
 * Función que hace el cambio de página y actualiza la obras en el contenedor
 * @param {numeric} page 
 */
function change(page) {
  let btnAnterior = document.getElementById("btn-anterior");
  let btnSiguiente = document.getElementById("btn-siguiente");
  let rowObrasArt = document.getElementById("row-obras-art");
  rowObrasArt.innerHTML = "";
  if (page < 1) page = 1;
  if (page > totalPaginas()) page = totalPaginas();

  while (i < page * itemsPagina) {
    if (i == totalObrasArtista) {
      break;
    } else {
      rowObrasArt.innerHTML += `
        <div class="col-10 col-sm-6 col-md-5 col-lg-3">
          <a href="">
            <div class="img-obra-perfil">
            <figure style="margin: 0">
              <img
                class="img-fluid"
                src="https://estaticos-cdn.elperiodico.com/clip/3aecb3cf-ce6e-4dec-8788-1922ef8b5e01_alta-libre-aspect-ratio_default_0.jpg"
                alt=""
              />
              <div class="capa-text">
                <h5>Ver más</h5>
              </div>
            </figure>
            </div>
          </a>
          <h5>Obra ${i + 1}</h5>
        </div>
        `;
      i++;
    }
  }

  if (page == 1) {
    btnAnterior.style.visibility = "hidden";
  } else {
    btnAnterior.style.visibility = "visible";
  }
  if (page == totalPaginas()) {
    btnSiguiente.style.visibility = "hidden";
  } else {
    btnSiguiente.style.visibility = "visible";
  }
}

/**
 * Función que hace el cambio de página en base a los indices de página
 * @param {numeric} indice 
 */
function onclickIndice(indice) {
  i = array[indice];
  document.getElementById(`btn-pag${paginaActual}`).classList.remove("active");
  paginaActual = indice + 1;
  document.getElementById(`btn-pag${paginaActual}`).classList.add("active");
  change(indice + 1);
}

