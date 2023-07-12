const productDetails = JSON.parse(sessionStorage.getItem("productDetails"));

document.addEventListener("DOMContentLoaded", () => {
    const productImage = document.querySelector('#MainImg');
    const smallImg = document.getElementsByClassName('small-imgs');

    // Define a imagem principal
    productImage.src = productDetails.imagem;

    // Adicione os eventos de clique para as miniaturas de imagem
    for (let i = 0; i < smallImg.length; i++) {
        smallImg[i].onclick = function() {
            productImage.src = smallImg[i].src;
        }
    }

    // Preencha os detalhes do produto
    document.querySelector('.product-sku-datails').textContent = productDetails.SKU;
    document.querySelector('.product-name-datails').textContent = productDetails.nome;
    document.querySelector('.product-price-details').textContent = productDetails.preco;
    document.querySelector('.product-name-datails-mobile').textContent = productDetails.nome;
    
});

const thumbnailsContainer = document.querySelector('.small-img-group');
const imagensSecundarias = productDetails.imagensSecundarias;

imagensSecundarias.forEach(imagem => {

  const thumbnail = document.createElement('img');
  thumbnail.src = imagem;
  thumbnail.classList.add('small-imgs');

  // Evento de clique para trocar a imagem principal
  thumbnail.addEventListener('click', () => {
    document.querySelector('#MainImg').src = imagem;
  });

  // Adiciona a miniatura ao container das miniaturas
  thumbnailsContainer.appendChild(thumbnail);
});
