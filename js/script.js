function updateProductInfo(productNumber) {
  
    var productText = document.querySelector(".product-text h5");
    productText.textContent = produtos[productNumber].productText;
  
    var productName = document.querySelector(".price h4");
    productName.textContent = produtos[productNumber].productName;
  
    var productPrice = document.querySelector(".price p");
    productPrice.textContent = produtos[productNumber].productPrice;
  }
  
  // Evento de clique em cada imagem para chamar a função de atualização com o número da imagem correspondente
  var smallImgs = document.querySelectorAll(".small-img");
  smallImgs.forEach(function(smallImg, index) {
    smallImg.addEventListener("click", function() {
      updateProductInfo(index);
    });
  });




// Barra de pesquisa

document.getElementById("search-icon").addEventListener("click", function() {
    document.querySelector(".search-bar").classList.toggle("show-search-bar");
  });

  // Ampliar produto

let imagens = document.querySelectorAll('.small-img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal-img');
let btClose = document.querySelector('#bt-close');
let srcVal="";
for (let i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener('click', function() {
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal-active');
    });
}

btClose.addEventListener('click', function(){
    modal.classList.toggle('modal-active')
});

document.addEventListener('click', function(event) {
    // Verifica se o clique ocorreu fora do modal
    if (!event.target.closest('.modal-img') && !event.target.closest('.small-img')) {
        modal.classList.remove('modal-active');
    }
});

// Rolagem de tela header

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

// Botão de menu mobile

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.nav-menu');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

document.addEventListener('click', (event) => {
    // Verifica se o clique ocorreu fora do menu
    if (!event.target.closest('#menu-icon') && !event.target.closest('.nav-menu')) {
      menu.classList.remove('bx-x');
      navmenu.classList.remove('open');
    }
  });

// Zoom página produtos

const box = document.getElementById("select-image");
const img = document.getElementById("image-select");

box.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x , y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";
    img.style.cursor = "zoom-in";
});

box.addEventListener("mouseleave", () =>{
    img.style.transformOrigin = "center center"
    img.style.transform = "scale(1)";
});

// Abrir barra Pesquisar


  
  

// // Laço de repetição para gerar o código HTML
// for (let i = 1; i <= 32; i++) {
//     document.write(`
//         <div class="row">
//             <div class="card-img">
//                 <img class="small-img" src="/imgs/produtos/FotosSite${i}.jpg" alt="Imagem do Produto">
//             </div>
//             <div class="product-text">
//                 <h5>Sale</h5>
//             </div>
//             <div class="price">
//                 <h4>Bubble balloon</h4>
//                 <p>R$150 - R$200</p>
//             </div>
//         </div>
//     `);
// }





