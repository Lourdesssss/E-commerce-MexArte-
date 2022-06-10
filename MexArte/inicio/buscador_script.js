console.log("Se inicia el script del buscador");
let arregloArtistas = [];
let buscador = document.getElementById("buscador");
let resultado = document.getElementById("resultado");

artistasBuscador();
pruebaMexArte();
pruebaMexArteUsuario();
// segun el evento "keyup" se realizara la funcion displayMatches
buscador.addEventListener("keyup", displayMatches);

/**
 * Función que lista los artistas emergentes con fetch a partir de un JSON
 */
 function artistasBuscador() {
    fetch("../inicio/artists.json")
      .then((response) => response.json())
      .then((data) => {
        for (const artist of data.artists) {
          arregloArtistas.push(artist);
        }
      });
  }

  function pruebaMexArte() {
    fetch("http://localhost:8080/obras")
      .then((response) => response.json())
      .then((data) => {

        console.log(data);
      });
  }


  function pruebaMexArteUsuario() {
    fetch("http://localhost:8080/usuarios/pedro@gmail.com")
      .then((response) => response.json())
      .then((data) => {

        console.log(data);
      });
  }

/**
 * Función que encuentra el match entre las letras en input y los nombres de los artistas en el arreglo
 * @param {String} wordToSearch 
 * @param {Array} arreglo 
 * @returns 
 */
 function findMatches(wordToSearch, arreglo) {
    return arreglo.filter((artist) => {
      const regex = new RegExp(wordToSearch, "gi");
      if (buscador.value.length == 0) {
        return null;
      } else {
        return artist.name.match(regex);
      }
    });
  }
  
  /**
   * Función que despliega los matches entre las entradas en el input y el arreglo de artistas
   * Al hacer click en uno de los artistas en el despligue te redirecciona a su perfil de artista
   * @param {Event} e 
   */
  function displayMatches(e) {
    resultado.innerHTML="";
    const matchedArray = findMatches(e.target.value, arregloArtistas);
    const html = matchedArray.map((artist) => {
      return `<a href="../perfil/perfil.html?idArtist=${artist.idArtist}">${artist.name}</><br>`;
    });
    console.log(html);
    if (html.length > 0) {
      for (const value of html) {
        console.log(value);
        resultado.innerHTML += value;
      }
    } else {
      resultado.innerHTML = null;
    }
  }