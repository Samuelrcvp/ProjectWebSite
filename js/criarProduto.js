const productsData = [
    { id: 1, nome: "Box dia das mães 1 metro", preco: "R$180,00", imagem: "/imgs/produtos/FotosSite1.jpg" },
    { id: 2,nome: "Box Aniversário", preco: "R$170,00", imagem: "/imgs/produtos/FotosSite2.jpg" },
    { id: 3,nome: "Box dia das mães", preco: "R$160,00", imagem: "/imgs/produtos/FotosSite3.jpg" },
    { id: 4,nome: "Box dia das mães", preco: "R$165,00", imagem: "/imgs/produtos/FotosSite4.jpg" },
    { id: 5,nome: "Box dia das mães", preco: "R$165,00", imagem: "/imgs/produtos/FotosSite5.jpg" },
    { id: 6,nome: "Box dia das mães", preco: "R$260,00", imagem: "/imgs/produtos/FotosSite6.jpg" },
    { id: 7,nome: "Box dia das mães (unidade)", preco: "R$185,00", imagem: "/imgs/produtos/FotosSite7.jpg" },
    { id: 8,nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite8.jpg" },
    { id: 9,nome: "Box dia das mães", preco: "R$150,00", imagem: "/imgs/produtos/FotosSite9.jpg" },
    { id: 10,nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite10.jpg" },
    { id: 11,nome: "Box dia das mães", preco: "R$199,00", imagem: "/imgs/produtos/FotosSite11.jpg" },
    { id: 12,nome: "duo de xícaras com suporte", preco: "R$90,00", imagem: "/imgs/produtos/FotosSite12.jpg" },
    { id: 13,nome: "Box envelope", preco: "R$120,00", imagem: "/imgs/produtos/FotosSite13.jpg" },
    { id: 14,nome: "Box dia das mães", preco: "R$189,00", imagem: "/imgs/produtos/FotosSite14.jpg" },
    { id: 15,nome: "Box love", preco: "R$180,00", imagem: "/imgs/produtos/FotosSite15.jpg" },
    { id: 16,nome: "Box dia das mães", preco: "R$169,00", imagem: "/imgs/produtos/FotosSite16.jpg" },
    { id: 17,nome: "Box dia das mães", preco: "R$249,00", imagem: "/imgs/produtos/FotosSite17.jpg" },
    { id: 18,nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite18.jpg" },
    { id: 19,nome: "caixa acrílica com balão", preco: "R$115,00", imagem: "/imgs/produtos/FotosSite19.jpg" },
    { id: 20,nome: "caixa acrílica", preco: "R$90,00", imagem: "/imgs/produtos/FotosSite20.jpg" },
    { id: 21,nome: "bubble de mesa grande", preco: "R$75,00", imagem: "/imgs/produtos/FotosSite21.jpg" },
    { id: 22,nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite22.jpg" },
    { id: 23,nome: "Box cervejeiro", preco: "R$199,00", imagem: "/imgs/produtos/FotosSite23.jpg" },
    { id: 24,nome: "Bubble de mesa pequeno", preco: "R$40,00", imagem: "/imgs/produtos/FotosSite24.jpg" },
    { id: 25,nome: "Box Aniversário", preco: "R$150,00", imagem: "/imgs/produtos/FotosSite25.jpg" },
    { id: 26,nome: "bubble de mesa grande", preco: "R$75,00", imagem: "/imgs/produtos/FotosSite26.jpg" },
    { id: 27,nome: "Box Aniversário", preco: "R$189,00", imagem: "/imgs/produtos/FotosSite27.jpg" },
    { id: 28,nome: "Bubble médio", preco: "R$60,00", imagem: "/imgs/produtos/FotosSite28.jpg" },
    { id: 29,nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite29.jpg" },
    { id: 30,nome: "caixa acrílica", preco: "R$105,00", imagem: "/imgs/produtos/FotosSite30.jpg" },
    { id: 31,nome: "Bubble grande", preco: "R$75,00", imagem: "/imgs/produtos/FotosSite31.jpg" },
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
