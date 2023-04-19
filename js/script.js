
// Barra de pesquisa

document.getElementById("search-icon").addEventListener("click", function() {
    document.querySelector(".search-bar").classList.toggle("show-search-bar");
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



