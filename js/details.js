document.addEventListener("DOMContentLoaded", function() {
  //  retraso de 2 segundos (2000 milisegundos)
  setTimeout(function() {
    // Solicitar al usuario su destino
    let destino = prompt("Ingrese su destino (CABA o Interior):");

    //  a minúsculas
    destino = destino.toLowerCase();

    // capturar al elemento <h2>
    const costoenvio = document.getElementById('costoenvio');

    // Verificar el destino ingresado
    if (destino === "caba") {
      costoenvio.innerHTML = "El costo de envío es de 500$";
    } else if (destino === "interior") {
      costoenvio.innerHTML = "El costo de envío es de 1000$";
    } else {
      while(destino!=="caba" || destino!=="interior"){
      alert("Destino no válido. Por favor, ingrese CABA o Interior del país.")
      destino= prompt("Ingrese su destino (CABA o Interior):");
    }
    }
  }, 3000); // 3000 milisegundos (3 segundos)
});




const productDetails=document.getElementById('productDetails')
console.log(productDetails);

const selectedProduct=JSON.parse(localStorage.getItem('selectedProduct'))


  if (selectedProduct) {
    // Aplica slice para comenzar desde el segundo producto (índice 1)
    const productosParaCarrousel = selectedProduct.imagen.slice(1);
    const nombresParaCarrousel = selectedProduct.nombre.slice(1);
  
    productDetails.innerHTML = `
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-inner">
          ${productosParaCarrousel.map((imagen, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}" data-nombre="${nombresParaCarrousel[index]}">
              <img class="w-50" src="${imagen}" class="d-block w-50" alt="${nombresParaCarrousel[index]}">
              <div class="carousel-caption d-md-block">
                <h5 class="font-weight-bold">Precio:${selectedProduct['precio' + (index + 2)]} $</h5>
              </div>
            </div>
          `).join('')}
        </div>
        <!-- Controles del carrusel -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next text-white" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
      </div>
      <div id="nombreContainer">
        <h2>${nombresParaCarrousel[0]}</h2>
      </div>
      <h2 class="slogan">${selectedProduct.slogan}</h2>
      <h2>Descripción:${selectedProduct.descripcion}</h2>
    `;
  const carousel = document.getElementById('carouselExampleCaptions');
  carousel.addEventListener('slid.bs.carousel', function () {
    const activeItem = carousel.querySelector('.carousel-item.active');
    const nombre = activeItem.getAttribute('data-nombre');
    nombreContainer.innerHTML = `<h2>${nombre}</h2>`;
  });
  const descripcion=document.createElement('h2')

}
//localStorage.clear()