const productsData = [
    {categoria: "box", SKU: 'box001',nome: "Box dia das mães 1 metro", preco: "R$180,00", imagem: "/imgs/produtos/FotosSite1.jpg"},
    {categoria: "box", SKU: 'box002',nome: "Box Aniversário", preco: "R$170,00", imagem: "/imgs/produtos/FotosSite2.jpg" },
    {categoria: "box", SKU: 'box003',nome: "Box dia das mães", preco: "R$160,00", imagem: "/imgs/produtos/FotosSite3.jpg" },
    {categoria: "box", SKU: 'box004',nome: "Box dia das mães", preco: "R$165,00", imagem: "/imgs/produtos/FotosSite4.jpg" },
    {categoria: "box", SKU: 'box005',nome: "Box dia das mães", preco: "R$165,00", imagem: "/imgs/produtos/FotosSite5.jpg" },
    {categoria: "box", SKU: 'box006',nome: "Box dia das mães", preco: "R$260,00", imagem: "/imgs/produtos/FotosSite6.jpg" },
    {categoria: "box", SKU: 'box007',nome: "Box dia das mães (unidade)", preco: "R$185,00", imagem: "/imgs/produtos/FotosSite7.jpg" },
    {categoria: "box", SKU: 'box008',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite8.jpg" },
    {categoria: "box", SKU: 'box009',nome: "Box dia das mães", preco: "R$150,00", imagem: "/imgs/produtos/FotosSite9.jpg" },
    {categoria: "box", SKU: 'box010',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite10.jpg" },
    {categoria: "box", SKU: 'box011',nome: "Box dia das mães", preco: "R$199,00", imagem: "/imgs/produtos/FotosSite11.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite11.jpg", "/imgs/produtos/FotosSite11-1.jpg","/imgs/produtos/FotosSite11-2.jpg"] },
    {categoria: "mugs", SKU: 'mug012',nome: "duo de xícaras com suporte", preco: "R$90,00", imagem: "/imgs/produtos/FotosSite12.jpg" },
    {categoria: "box", SKU: 'box013',nome: "Box envelope", preco: "R$120,00", imagem: "/imgs/produtos/FotosSite13.jpg" },
    {categoria: "box", SKU: 'box014',nome: "Box dia das mães", preco: "R$189,00", imagem: "/imgs/produtos/FotosSite14.jpg" },
    {categoria: "box", SKU: 'box015',nome: "Box love", preco: "R$180,00", imagem: "/imgs/produtos/FotosSite15.jpg" },
    {categoria: "box", SKU: 'box016',nome: "Box dia das mães", preco: "R$169,00", imagem: "/imgs/produtos/FotosSite16.jpg" },
    {categoria: "box", SKU: 'box017',nome: "Box dia das mães", preco: "R$249,00", imagem: "/imgs/produtos/FotosSite17.jpg" },
    {categoria: "box", SKU: 'box018',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite18.jpg" },
    {categoria: "box", SKU: 'box019',nome: "caixa acrílica com balão", preco: "R$115,00", imagem: "/imgs/produtos/FotosSite19.jpg" },
    {categoria: "box", SKU: 'box020',nome: "caixa acrílica", preco: "R$90,00", imagem: "/imgs/produtos/FotosSite20.jpg" },
    {categoria: "ballon", SKU: 'bb021',nome: "bubble de mesa grande", preco: "R$75,00", imagem: "/imgs/produtos/FotosSite21.jpg" },
    {categoria: "box", SKU: 'box022',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite22.jpg" },
    {categoria: "box", SKU: 'box023',nome: "Box cervejeiro", preco: "R$199,00", imagem: "/imgs/produtos/FotosSite23.jpg" },
    {categoria: "ballon", SKU: 'bb024',nome: "Bubble de mesa pequeno", preco: "R$40,00", imagem: "/imgs/produtos/FotosSite24.jpg" },
    {categoria: "box", SKU: 'box025',nome: "Box Aniversário", preco: "R$150,00", imagem: "/imgs/produtos/FotosSite25.jpg" },
    {categoria: "ballon", SKU: 'bb026',nome: "bubble de mesa grande", preco: "R$75,00", imagem: "/imgs/produtos/FotosSite26.jpg" },
    {categoria: "box", SKU: 'box027',nome: "Box Aniversário", preco: "R$189,00", imagem: "/imgs/produtos/FotosSite27.jpg" },
    {categoria: "ballon", SKU: 'bb028',nome: "Bubble médio", preco: "R$60,00", imagem: "/imgs/produtos/FotosSite28.jpg" },
    {categoria: "box", SKU: 'box029',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite29.jpg" },
    {categoria: "box", SKU: 'box030',nome: "caixa acrílica", preco: "R$105,00", imagem: "/imgs/produtos/FotosSite30.jpg" },
    {categoria: "ballon", SKU: 'bb031',nome: "Bubble grande", preco: "R$75,00", imagem: "/imgs/produtos/FotosSite31.jpg" },
    {categoria: "box", SKU: 'box032',nome: "box romântica", preco: "R$380,00", imagem: "/imgs/produtos/FotosSite32.jpg" },
    {categoria: "box", SKU: 'box033',nome: "box coorporativo", preco: "R$160,00", imagem: "/imgs/produtos/FotosSite33.jpg" },
    {categoria: "box", SKU: 'box034',nome: "box Minnie", preco: "R$180,00", imagem: "/imgs/produtos/FotosSite34.jpg" },
    {categoria: "box", SKU: 'box035',nome: "box Orquídea", preco: "R$190,00", imagem: "/imgs/produtos/FotosSite35.jpg" },
    {categoria: "box", SKU: 'box036',nome: "Box coração", preco: "R$190,00", imagem: "/imgs/produtos/FotosSite36.jpg" },
    {categoria: "box", SKU: 'box037',nome: "Envelope Heineken", preco: "R$90,00", imagem: "/imgs/produtos/FotosSite37.jpg" },
    {categoria: "box", SKU: 'box038',nome: "Box corona", preco: "R$320,00", imagem: "/imgs/produtos/FotosSite38.jpg" },
    {categoria: "box", SKU: 'box039',nome: "Envelope cerveja especial", preco: "R$90,00", imagem: "/imgs/produtos/FotosSite39.jpg" },
    {categoria: "box", SKU: 'box040',nome: "Box bubble coração", preco: "R$140,00", imagem: "/imgs/produtos/FotosSite40.jpg" },
    {categoria: "box", SKU: 'box041',nome: "Balde Casal", preco: "R$180,00", imagem: "/imgs/produtos/FotosSite41.jpg" },
    {categoria: "box", SKU: 'box042',nome: "Balde cervejeiro", preco: "R$180,00", imagem: "/imgs/produtos/FotosSite42.jpg" },
    {categoria: "box", SKU: 'box043',nome: "Box grande amor", preco: "R$340,00", imagem: "/imgs/produtos/FotosSite43.jpg" },
    {categoria: "box", SKU: 'box044',nome: "Box vinho", preco: "R$120,00", imagem: "/imgs/produtos/FotosSite44.jpg" },
    {categoria: "box", SKU: 'box045',nome: "Box Florida Aniversário", preco: "R$210,00", imagem: "/imgs/produtos/FotosSite45.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite45.jpg", "/imgs/produtos/FotosSite45-1.jpg","/imgs/produtos/FotosSite45-2.jpg","/imgs/produtos/FotosSite45-3.jpg"] },
    {categoria: "box", SKU: 'box046',nome: "Box fechada com visor", preco: "R$120,00", imagem: "/imgs/produtos/FotosSite46.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite46.jpg", "/imgs/produtos/FotosSite46-1.jpg","/imgs/produtos/FotosSite46-2.jpg","/imgs/produtos/FotosSite46-3.jpg"] },
    {categoria: "ballon", SKU: 'bb047',nome: "Balão aniversário tamanho P", preco: "R$40,00", imagem: "/imgs/produtos/FotosSite47.jpg" },
    {categoria: "ballon", SKU: 'bb048',nome: "Balão aniversário tamanho P", preco: "R$40,00", imagem: "/imgs/produtos/FotosSite48.jpg" },
    {categoria: "ballon", SKU: 'bb049',nome: "Topo de bolo grande", preco: "R$25,00", imagem: "/imgs/produtos/FotosSite49.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite49.jpg", "/imgs/produtos/FotosSite49-1.jpg"] },
    {categoria:"box", SKU:'box050', nome:"Box café da manhã", preco:"R$280,00", imagem: "/imgs/produtos/FotosSite50.jpg"},
    {categoria:"outros", SKU:'box051', nome:"tubolatas unidade", preco:"R$12,00", imagem: "/imgs/produtos/FotosSite51.jpg"},
    {categoria:"ballon", SKU:'bb052', nome:"Balão Bubble joaninha", preco:"R$60,00", imagem: "/imgs/produtos/FotosSite52.jpg"},
    {categoria:"box", SKU:'box053', nome:"Box café da manhã", preco:"R$230,00", imagem: "/imgs/produtos/FotosSite53.jpg"},
    {categoria:"box", SKU:'box054', nome:"Box aniversário", preco:"R$160,00", imagem: "/imgs/produtos/FotosSite54.jpg"},
    {categoria: "box", SKU: 'box055',nome: "Box fechada com visor", preco: "R$120,00", imagem: "/imgs/produtos/FotosSite55.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite55.jpg", "/imgs/produtos/FotosSite55-1.jpg","/imgs/produtos/FotosSite55-2.jpg","/imgs/produtos/FotosSite55-3.jpg"] },
    {categoria:"box", SKU:'box056', nome:"Box namorados vinho", preco:"R$250,00", imagem: "/imgs/produtos/FotosSite56.jpg"},
    {categoria:"ballon", SKU:'bb057', nome:"Bubble tamanho G", preco:"R$70,00", imagem: "/imgs/produtos/FotosSite57.jpg"},
    {categoria:"box", SKU:'box058', nome:"Box Guloseimas", preco:"R$170,00", imagem: "/imgs/produtos/FotosSite58.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite58.jpg","/imgs/produtos/FotosSite58-1.jpg","/imgs/produtos/FotosSite58-2.jpg"]},
    {categoria:"box", SKU:'box059', nome:"Box temática Harry Potter", preco:"R$150,00", imagem: "/imgs/produtos/FotosSite59.jpg"},
    {categoria:"box", SKU:'box060', nome:"Box de Vinho", preco:"R$260,00", imagem: "/imgs/produtos/FotosSite60.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite60.jpg","/imgs/produtos/FotosSite60-1.jpg","/imgs/produtos/FotosSite60-2.jpg","/imgs/produtos/FotosSite60-3.jpg"]},
    {categoria:"box", SKU:'box061', nome:"Box futebol - Galo", preco:"R$260,00", imagem: "/imgs/produtos/FotosSite61.jpg"},
    {categoria:"box", SKU:'box062', nome:"Box Cerveja Heineken", preco:"R$220,00", imagem: "/imgs/produtos/FotosSite62.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite62.jpg","/imgs/produtos/FotosSite62-1.jpg"]},
    {categoria:"box", SKU:'box063', nome:"Box Amiga Psicologa", preco:"R$230,00", imagem: "/imgs/produtos/FotosSite63.jpg",
    imagensSecundarias:["/imgs/produtos/FotosSite63.jpg","/imgs/produtos/FotosSite63-1.jpg","/imgs/produtos/FotosSite63-2.jpg"]},
    // Adicionar produtos
];

function filtrarProdutos() {
  const categoriaSelecionada = document.querySelector('input[name="category"]:checked').value;
  const productsContainer = document.querySelector('#products-container');
  const produtos = productsContainer.querySelectorAll('.row');

  produtos.forEach(produto => {
    const categoriaProduto = produto.querySelector('.product-categoria').textContent;

    if (categoriaSelecionada === 'all' || categoriaSelecionada === categoriaProduto) {
      produto.style.display = 'grid';
    } else {
      produto.style.display = 'none';
    }
  });
}

const radios = document.querySelectorAll('input[name="category"]');
radios.forEach(radio => {
  radio.addEventListener("change", filtrarProdutos);
});

function createProducts() {
    const productsContainer = document.querySelector('#products-container');
    const productTemplate = document.querySelector('#product-template');

    productsData.forEach(product => {
        const productElement = productTemplate.content.cloneNode(true);

        productElement.querySelector(".product-categoria").textContent = product.categoria;
        productElement.querySelector(".product-name").textContent = product.nome;
        productElement.querySelector(".product-price").textContent = product.preco;
        productElement.querySelector(".product-sku").textContent = product.SKU;
        const productImage = productElement.querySelector("img");
        productImage.src = product.imagem;
        // // Abrir modal
        // productImage.addEventListener ("click", () =>{
        //     const modalImage = document.querySelector('#modal-img');
        //     modalImage.src = product.imagem;
        //     const modal = document.querySelector(".modal");
        //     modal.classList.add("modal-active");
        // });
        // // Fechar modal
        // const modalCloseButton = document.querySelector('#bt-close');
        // modalCloseButton.addEventListener("click", () => {
        // const modal = document.querySelector(".modal");
        // modal.classList.remove("modal-active");
        // });     

        // Adiciona evento de clique ao produto
        productElement.querySelector(".row").addEventListener("click", () => {
            // Armazena as informações do produto clicado em sessionStorage
            sessionStorage.setItem("productDetails", JSON.stringify(product));
            // Redireciona para a página "detalhes.html"
            window.location.href = "detalhes.html";
        });  

        productsContainer.appendChild(productElement);
    });
}
createProducts();

const productDetails = JSON.parse(sessionStorage.getItem("productDetails"));
const productImages = document.querySelector('#productImage');
const smallImg = document.getElementsByClassName('small-imgs');

// Define a imagem principal
productImages.src = productDetails.imagem;

// Adicione os eventos de clique para as miniaturas de imagem
for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function() {
        productImages.src = smallImg[i].src;
    }
}

