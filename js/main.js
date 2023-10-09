  //capturo el section
  const section = document.getElementById('seccion')
  console.log(section);


fetch("../datos/products.json")
  .then(response=>response.json())
  .then(products=>{
    products.forEach(product => {
      const article = document.createElement ('article')
      article.classList.add('col-md-4')
      article.classList.add('mb-3')
      article.classList.add('border-custom')
      article.innerHTML += `
        <img class="w-100"src='${product.imagen[0]}'>
        <h2> ${product.nombre[0]}</h2>
        <a class='btn btn-custom d-block' href="detalles.html?id=${product.id}">Mas info</a>
      `
      section.appendChild(article)
      
      article.addEventListener('click',function(){
        localStorage.setItem('selectedProduct',JSON.stringify(product))
      })
    });
  })