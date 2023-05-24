
// Barra de pesquisa

// selecione o ícone de pesquisa
const searchIcon = document.querySelector("#search-icon");

// selecione a barra de pesquisa
const searchBar = document.querySelector(".search-bar");

// adicione um ouvinte de eventos de clique ao ícone de pesquisa
searchIcon.addEventListener("click", () => {
  // verifique se a barra de pesquisa já está visível
  if (searchBar.classList.contains("show-search-bar")) {
    // obtenha o valor atual da barra de pesquisa
    const searchTerm = searchBar.value;

    // redirecione para a página de resultados de pesquisa
    window.location.href = "/search?query=" + searchTerm;
  } else {
    // exiba a barra de pesquisa
    searchBar.classList.add("show-search-bar");
    searchBar.focus();
  }
});

// adicione um ouvinte de eventos de tecla à barra de pesquisa
searchBar.addEventListener("keyup", (event) => {
  // verifique se a tecla pressionada foi Enter
  if (event.key === "Enter") {
    // obtenha o valor atual da barra de pesquisa
    const searchTerm = searchBar.value;

    // redirecione para a página de resultados de pesquisa
    window.location.href = "/search?query=" + searchTerm;
  }
});

// const searchTerm = "Box Balão de Flores";

// // Percorre a matriz productsData
// for (let i = 0; i < productsData.length; i++) {
//   // Verifica se o nome do produto corresponde ao termo de pesquisa
//   if (productsData[i].nome === searchTerm) {
//     // Faça algo com o produto encontrado, como exibir o nome ou imagem
//     console.log(productsData[i]);
//   }
// }


// Rolagem de tela animada

const target = document.querySelectorAll('[data-anime]')

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element){
    if (windowTop > element.offsetTop) {
      element.classList.add('animate')
    }else{
      element.classList.remove('animate')
    }
  })
}
animeScroll();

if(target.length){
window.addEventListener('scroll', function(){
  animeScroll();
})
}

// Rolagem de tela header

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

// Botão de menu mobile

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.nav-menu');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

document.addEventListener('click', (fecharMenuMobile) => {
    // Verifica se o clique ocorreu fora do menu
    if (!fecharMenuMobile.target.closest('#menu-icon') && !fecharMenuMobile.target.closest('.nav-menu')) {
      menu.classList.remove('bx-x');
      navmenu.classList.remove('open');
    }
  });

// // Zoom página produtos

// const box = document.getElementById("select-image");
// const img = document.getElementById("image-select");

// box.addEventListener("mousemove", (e) =>{
//     const x = e.clientX - e.target.offsetLeft;
//     const y = e.clientY - e.target.offsetTop;

//     console.log(x , y);

//     img.style.transformOrigin = `${x}px ${y}px`;
//     img.style.transform = "scale(2)";
//     img.style.cursor = "zoom-in";
// });

// box.addEventListener("mouseleave", () =>{
//     img.style.transformOrigin = "center center"
//     img.style.transform = "scale(1)";
// });

// Abrir barra Pesquisar



