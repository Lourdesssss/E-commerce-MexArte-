console.log("Carrito web works!")
document.addEventListener('DOMContentLoaded', () => {
  // Variables
  const baseDeDatos = [
      {
          id: 1,
          nombre: 'Obra número 1',
          precio: 1,
          imagen: 'https://media.admagazine.com/photos/618a6acbcc7069ed5077ca7f/master/w_1600%2Cc_limit/68704.jpg'
      },
      {
          id: 2,
          nombre: 'Obra número 2',
          precio: 1.2,
          imagen: 'https://media.revistaad.es/photos/60c745c1f8ba795ce91acd92/master/w_1600%2Cc_limit/196890.jpg'
      },
      {
          id: 3,
          nombre: 'Obra número 3',
          precio: 2.1,
          imagen: 'https://media.admagazine.com/photos/618a6acca9f7fab6f062307b/master/w_1600%2Cc_limit/68705.jpg'
      },
      {
          id: 4,
          nombre: 'Obra número 4',
          precio: 0.6,
          imagen: 'https://estaticos-cdn.elperiodico.com/clip/3aecb3cf-ce6e-4dec-8788-1922ef8b5e01_alta-libre-aspect-ratio_default_0.jpg'
      }

  ];

  /**
   * Función que lee JSON base de datos
   */
function baseDeDatos2() {
    fetch("base_datos.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.baseDatos);
    });
}

  let carrito = [];
  const divisa = '$';
  const DOMitems = document.querySelector('#items');
  const DOMcarrito = document.querySelector('#carrito');
  const DOMtotal = document.querySelector('#total');
  const DOMbotonVaciar = document.querySelector('#boton-vaciar');

  // Funciones

  /**
  * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
  */
  function renderizarProductos() {
      baseDeDatos.forEach((info) => {
          // Estructura
          const miNodo = document.createElement('div');
          miNodo.classList.add('card', 'col-sm-3');
          // Body
          const miNodoCardBody = document.createElement('div');
          miNodoCardBody.classList.add('card-body');
          // Titulo
          const miNodoTitle = document.createElement('h5');
          miNodoTitle.classList.add('card-title');
          miNodoTitle.textContent = info.nombre;
          // Imagen
          const miNodoImagen = document.createElement('img');
          miNodoImagen.classList.add('img-fluid', 'img-list');
          miNodoImagen.setAttribute('src', info.imagen);
          // Precio
          const miNodoPrecio = document.createElement('p');
          miNodoPrecio.classList.add('card-text');
          miNodoPrecio.textContent = `${divisa}${info.precio}`;
          // Boton 
          const miNodoBoton = document.createElement('button');
          miNodoBoton.classList.add('btn', 'btn-warning');
          miNodoBoton.textContent = 'Añadir';
          miNodoBoton.setAttribute('marcador', info.id);
          miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
          // Insertamos
          miNodoCardBody.appendChild(miNodoImagen);
          miNodoCardBody.appendChild(miNodoTitle);
          miNodoCardBody.appendChild(miNodoPrecio);
          miNodoCardBody.appendChild(miNodoBoton);
          miNodo.appendChild(miNodoCardBody);
          DOMitems.appendChild(miNodo);
      });
  }

  /**
  * Evento para añadir un producto al carrito de la compra
  */
  function anyadirProductoAlCarrito(evento) {
      // Anyadimos el Nodo a nuestro carrito
      carrito.push(evento.target.getAttribute('marcador'))
      // Actualizamos el carrito 
      renderizarCarrito();

  }

  /**
  * Dibuja todos los productos guardados en el carrito
  */
  function renderizarCarrito() {
      // Vaciamos todo el html
      DOMcarrito.textContent = '';
      // Quitamos los duplicados
      const carritoSinDuplicados = [...new Set(carrito)];
      // Generamos los Nodos a partir de carrito
      carritoSinDuplicados.forEach((item) => {
          // Obtenemos el item que necesitamos de la variable base de datos
          const miItem = baseDeDatos.filter((itemBaseDatos) => {
              // ¿Coincide las id? Solo puede existir un caso
              return itemBaseDatos.id === parseInt(item);
          });
          // Cuenta el número de veces que se repite el producto
          const numeroUnidadesItem = carrito.reduce((total, itemId) => {
              // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
              return itemId === item ? total += 1 : total;
          }, 0);
          // Creamos el nodo del item del carrito
          const miNodo = document.createElement('li');
          miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
          miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
          // Boton de borrar
          const miBoton = document.createElement('button');
          miBoton.classList.add('btn', 'btn-warning', 'mx-5');
          miBoton.textContent = '';
          miBoton.style.marginLeft = '1rem';
          miBoton.dataset.item = item;
          miBoton.addEventListener('click', borrarItemCarrito);
          const miBasurero = document.createElement('i');
          miBasurero.classList.add("fa-solid fa-trash");
          miBoton.appendChild(miBasurero);
          // Añadimos imágen
          const miImagen = document.createElement('img');
          miImagen.classList.add('img-fluid', 'img-cart');
          miImagen.setAttribute('src', miItem[0].imagen);
          // Mezclamos nodos
          miNodo.appendChild(miImagen);
          miNodo.appendChild(miBoton);
          DOMcarrito.appendChild(miNodo);
          //Creamos el nodo del item del carrito
          /* const miTitulo = document.createElement('li');
          miTitulo.classList.add('list-group-item', 'text-right', 'mx-2');
          miTitulo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
          miNodo.appendChild(miTitulo); */
      });
     // Renderizamos el precio total en el HTML
     DOMtotal.textContent = calcularTotal();
  }

  /**
  * Evento para borrar un elemento del carrito
  */
  function borrarItemCarrito(evento) {
      // Obtenemos el producto ID que hay en el boton pulsado
      const id = evento.target.dataset.item;
      // Borramos todos los productos
      carrito = carrito.filter((carritoId) => {
          return carritoId !== id;
      });
      // volvemos a renderizar
      renderizarCarrito();
  }

  /**
   * Calcula el precio total teniendo en cuenta los productos repetidos
   */
  function calcularTotal() {
      // Recorremos el array del carrito 
      return carrito.reduce((total, item) => {
          // De cada elemento obtenemos su precio
          const miItem = baseDeDatos.filter((itemBaseDatos) => {
              return itemBaseDatos.id === parseInt(item);
          });
          // Los sumamos al total
          return total + miItem[0].precio;
      }, 0).toFixed(2);
  }

  /**
  * Varia el carrito y vuelve a dibujarlo
  */
  function vaciarCarrito() {
      // Limpiamos los productos guardados
      carrito = [];
      // Renderizamos los cambios
      renderizarCarrito();
  }

  // Eventos
  DOMbotonVaciar.addEventListener('click', vaciarCarrito);

  // Inicio
  renderizarProductos();
  renderizarCarrito();
});