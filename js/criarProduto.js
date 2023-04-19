const productsData = [
    { id: 1, nome: "Box Balão de Flores", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite1.jpg" },
    { id: 2,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite2.jpg" },
    { id: 3,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite3.jpg" },
    { id: 4,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite4.jpg" },
    { id: 5,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite5.jpg" },
    { id: 6,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite6.jpg" },
    { id: 7,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite7.jpg" },
    { id: 8,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite8.jpg" },
    { id: 9,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite9.jpg" },
    { id: 10,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite10.jpg" },
    { id: 11,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite11.jpg" },
    { id: 12,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite12.jpg" },
    { id: 13,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite13.jpg" },
    { id: 14,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite14.jpg" },
    { id: 15,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite15.jpg" },
    { id: 16,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite16.jpg" },
    { id: 17,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite17.jpg" },
    { id: 18,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite18.jpg" },
    { id: 19,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite19.jpg" },
    { id: 20,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite20.jpg" },
    { id: 21,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite21.jpg" },
    { id: 22,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite22.jpg" },
    { id: 23,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite23.jpg" },
    { id: 24,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite24.jpg" },
    { id: 25,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite25.jpg" },
    { id: 26,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite26.jpg" },
    { id: 27,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite27.jpg" },
    { id: 28,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite28.jpg" },
    { id: 29,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite29.jpg" },
    { id: 30,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite30.jpg" },
    { id: 31,nome: "Box Aniversário", preco: "R$150 - R$200", imagem: "/imgs/produtos/FotosSite31.jpg" },
    // Adicionar produtos
];

function createProducts() {
    const productsContainer = document.getElementById("products-container");
    const productTemplate = document.getElementById("product-template");

    productsData.forEach(product => {
        const productElement = productTemplate.content.cloneNode(true);

        productElement.querySelector(".product-name").textContent = product.nome;
        productElement.querySelector(".product-price").textContent = product.preco;
        const productImage = productElement.querySelector("img");
        productImage.src = product.imagem;
        // Abrir modal
        productImage.addEventListener ("click", () =>{
            const modalImage = document.getElementById("modal-img");
            modalImage.src = product.imagem;
            const modal = document.querySelector(".modal");
            modal.classList.add("modal-active");
        });
        // Fechar modal
        const modalCloseButton = document.getElementById("bt-close");
        modalCloseButton.addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        modal.classList.remove("modal-active");
        });

        // img.classList.add("small-img");
        
        productsContainer.appendChild(productElement);
    });
}
createProducts();
