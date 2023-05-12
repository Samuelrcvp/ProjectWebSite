const productsData = [
    { SKU: 'box001',nome: "Box dia das mães 1 metro", preco: "R$180,00", imagem: "/imgs/produtos/FotosSite1.jpg" },
    { SKU: 'box002',nome: "Box Aniversário", preco: "R$170,00", imagem: "/imgs/produtos/FotosSite2.jpg" },
    { SKU: 'box003',nome: "Box dia das mães", preco: "R$160,00", imagem: "/imgs/produtos/FotosSite3.jpg" },
    { SKU: 'box004',nome: "Box dia das mães", preco: "R$165,00", imagem: "/imgs/produtos/FotosSite4.jpg" },
    { SKU: 'box005',nome: "Box dia das mães", preco: "R$165,00", imagem: "/imgs/produtos/FotosSite5.jpg" },
    { SKU: 'box006',nome: "Box dia das mães", preco: "R$260,00", imagem: "/imgs/produtos/FotosSite6.jpg" },
    { SKU: 'box007',nome: "Box dia das mães (unSKUade)", preco: "R$185,00", imagem: "/imgs/produtos/FotosSite7.jpg" },
    { SKU: 'box008',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite8.jpg" },
    { SKU: 'box009',nome: "Box dia das mães", preco: "R$150,00", imagem: "/imgs/produtos/FotosSite9.jpg" },
    { SKU: 'box010',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite10.jpg" },
    { SKU: 'box011',nome: "Box dia das mães", preco: "R$199,00", imagem: "/imgs/produtos/FotosSite11.jpg" },
    { SKU: 'box012',nome: "duo de xícaras com suporte", preco: "R$90,00", imagem: "/imgs/produtos/FotosSite12.jpg" },
    { SKU: 'box013',nome: "Box envelope", preco: "R$120,00", imagem: "/imgs/produtos/FotosSite13.jpg" },
    { SKU: 'box014',nome: "Box dia das mães", preco: "R$189,00", imagem: "/imgs/produtos/FotosSite14.jpg" },
    { SKU: 'box015',nome: "Box love", preco: "R$180,00", imagem: "/imgs/produtos/FotosSite15.jpg" },
    { SKU: 'box016',nome: "Box dia das mães", preco: "R$169,00", imagem: "/imgs/produtos/FotosSite16.jpg" },
    { SKU: 'box017',nome: "Box dia das mães", preco: "R$249,00", imagem: "/imgs/produtos/FotosSite17.jpg" },
    { SKU: 'box018',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite18.jpg" },
    { SKU: 'box019',nome: "caixa acrílica com balão", preco: "R$115,00", imagem: "/imgs/produtos/FotosSite19.jpg" },
    { SKU: 'box020',nome: "caixa acrílica", preco: "R$90,00", imagem: "/imgs/produtos/FotosSite20.jpg" },
    { SKU: 'box021',nome: "bubble de mesa grande", preco: "R$75,00", imagem: "/imgs/produtos/FotosSite21.jpg" },
    { SKU: 'box022',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite22.jpg" },
    { SKU: 'box023',nome: "Box cervejeiro", preco: "R$199,00", imagem: "/imgs/produtos/FotosSite23.jpg" },
    { SKU: 'box024',nome: "Bubble de mesa pequeno", preco: "R$40,00", imagem: "/imgs/produtos/FotosSite24.jpg" },
    { SKU: 'box025',nome: "Box Aniversário", preco: "R$150,00", imagem: "/imgs/produtos/FotosSite25.jpg" },
    { SKU: 'box026',nome: "bubble de mesa grande", preco: "R$75,00", imagem: "/imgs/produtos/FotosSite26.jpg" },
    { SKU: 'box027',nome: "Box Aniversário", preco: "R$189,00", imagem: "/imgs/produtos/FotosSite27.jpg" },
    { SKU: 'box028',nome: "Bubble médio", preco: "R$60,00", imagem: "/imgs/produtos/FotosSite28.jpg" },
    { SKU: 'box029',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite29.jpg" },
    { SKU: 'box030',nome: "caixa acrílica", preco: "R$105,00", imagem: "/imgs/produtos/FotosSite30.jpg" },
    { SKU: 'box031',nome: "Bubble grande", preco: "R$75,00", imagem: "/imgs/produtos/FotosSite31.jpg" },
    // Adicionar produtos
];

function createProducts() {
    const productsContainer = document.querySelector('#products-container');
    const productTemplate = document.querySelector('#product-template');

    productsData.forEach(product => {
        const productElement = productTemplate.content.cloneNode(true);

        productElement.querySelector(".product-name").textContent = product.nome;
        productElement.querySelector(".product-price").textContent = product.preco;
        const productImage = productElement.querySelector("img");
        productImage.src = product.imagem;
        // Abrir modal
        productImage.addEventListener ("click", () =>{
            const modalImage = document.querySelector('#modal-img');
            modalImage.src = product.imagem;
            const modal = document.querySelector(".modal");
            modal.classList.add("modal-active");
        });
        // Fechar modal
        const modalCloseButton = document.querySelector('#bt-close');
        modalCloseButton.addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        modal.classList.remove("modal-active");
        });

        // img.classList.add("small-img");
        
        productsContainer.appendChild(productElement);
    });
}
createProducts();
