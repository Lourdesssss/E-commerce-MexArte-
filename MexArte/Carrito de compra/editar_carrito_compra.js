/* ------ */
/* AÑADIR */
/* ------ */
/* Empezamos creando una constante que llama a todos los botones "añadir al carrito" con class = addToCart */
/* Se emplea el DOM querySelectorAll para llamar a todos los botones con esa clase */
const addToShoppingCartButtons = document.querySelectorAll(".addToCart");
/* for each, por cada uno de ellos haz algo */
/* addEvenListener para que detecte al momento de hacer click en nuestros botones */
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener("click", addToCartClicked);
});

/* Se añade variable para la ubicación de los items en el html, se creó después pero se pasa aquí para hacerla global */
shoppingCartItemsContainer = document.querySelector(
    ".container-fluid"
    );

/* Al tener un EventListener, función callback nos arroja un event, el cual se indica en la funció siguiente */
/* Con closest, es la forma que aunque tengan los mismos nombres en las clases, cambiara la información al botón que tenga más cerca */
function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest(".item"); /* item es la clase del contenedor del articulo completo, la clase de la tarjeta */
    /* Definimos los elementos, los cuales son reacomodados en el carrito de compra */
    /* Empleamos un querySelector para especificar cada elemento, al final indicamos el tipo de contenido (textContent...) */
    const itemTitle = item.querySelector(".item-nombreObra").textContent;
    const itemPrice = item.querySelector(".item-precio").textContent;
    const itemImage = item.querySelector(".item-image").src;

addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

/* Función para mostrar en HTML el producto, item, la localización está en ShoppingCartItemsContainer */
function addItemToShoppingCart(itemTitle, itemPrice, itemImage){
    const shoppingCartRow = document.createElement("div");
    const shoppingCartContent = `
    <div id="Tarjeta1" class="col-12"> <!-- Tarjeta 1 todo horizontal -->
                    <div id="tarjeton" class="card"> <!-- Tarjeta no.1 -->
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src=${itemImage} class="img-fluid rounded-start" alt="..." id="images">
                          </div>
                          <div id="cardLadoDereho" class="col-md-8"> <!-- Lado derecho, parte con texto -->
                                <div id="cuerpoTarjeta" class="card-body">
                                    <div class="row">
                                        <div id="Texto1"class="col-12 col-sm-6">
                                            <h2>${itemTitle}</h2>
                                            <h3>Leonardo Da Vinci</h3>
                                        </div>
                                        <div id="Texto2"class="col-12 col-sm-6">
                                            <h3>Precio</h3>
                                            <h3>${itemPrice}</h3>
                                        </div>
                                        <div id="Texto3"class="col-12 col-sm-6">
                                            <h3>77 cm x 53 cm</h3>
                                            <h3>1507</h3>
                                        </div>
                                        <div id="Texto4"class="col-12 col-sm-6">
                                            <button class="boton-basura"><i class="fa-solid fa-trash"></i></button>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);
}