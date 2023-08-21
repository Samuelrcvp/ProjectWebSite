
// Barra de pesquisa

const searchIcon = document.querySelector("#search-icon");
const searchBar = document.querySelector(".search-bar");
const productTemplate = document.querySelector("#product-template");

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

  let isSearchBarVisible = false;

  searchIcon.addEventListener("click", () => {
      if (isSearchBarVisible) {
          if (searchBar.value === "") {
              searchBar.classList.remove("show-search-bar");
          } else {
              const searchTerm = removeAccents(searchBar.value.toLowerCase());
              const productList = document.querySelectorAll(".row");
              let encontrar = false;

              for (const product of productList) {
                  const productName = removeAccents(product.querySelector(".product-name").textContent.toLowerCase());
                  if (productName.includes(searchTerm) && searchBar.value !== " ") {
                      product.scrollIntoView({behavior: 'smooth'})
                      encontrar = true;
                  }
              }

              if (!encontrar) {
                  searchBar.classList.add("error");
                  setTimeout(() => {
                      searchBar.classList.remove("error");
                  }, 500);
              }
          }
          searchBar.value = "";

      } else {
          searchBar.classList.add("show-search-bar");
          searchBar.focus();
      }
      
      isSearchBarVisible = !isSearchBarVisible;
  });

  searchBar.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
          searchIcon.click();
      }
  });

// Rolagem de tela header

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

// Botão de menu mobile

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.nav-menu');

menu.onclick = () => {
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



