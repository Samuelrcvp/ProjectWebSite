const productsData = [
    {categoria: "box", SKU: 'box001',nome: "Box dia das mães 1 metro", preco: "R$180,00", imagem: "/imgs/produtos/FotosSite1.jpg" },
    {categoria: "box", SKU: 'box002',nome: "Box Aniversário", preco: "R$170,00", imagem: "/imgs/produtos/FotosSite2.jpg" },
    {categoria: "box", SKU: 'box003',nome: "Box dia das mães", preco: "R$160,00", imagem: "/imgs/produtos/FotosSite3.jpg" },
    {categoria: "box", SKU: 'box004',nome: "Box dia das mães", preco: "R$165,00", imagem: "/imgs/produtos/FotosSite4.jpg" },
    {categoria: "box", SKU: 'box005',nome: "Box dia das mães", preco: "R$165,00", imagem: "/imgs/produtos/FotosSite5.jpg" },
    {categoria: "box", SKU: 'box006',nome: "Box dia das mães", preco: "R$260,00", imagem: "/imgs/produtos/FotosSite6.jpg" },
    {categoria: "box", SKU: 'box007',nome: "Box dia das mães (unidade)", preco: "R$185,00", imagem: "/imgs/produtos/FotosSite7.jpg" },
    {categoria: "box", SKU: 'box008',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite8.jpg" },
    {categoria: "box", SKU: 'box009',nome: "Box dia das mães", preco: "R$150,00", imagem: "/imgs/produtos/FotosSite9.jpg" },
    {categoria: "box", SKU: 'box010',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite10.jpg" },
    {categoria: "box", SKU: 'box011',nome: "Box dia das mães", preco: "R$199,00", imagem: "/imgs/produtos/FotosSite11.jpg" },
    {categoria: "caneca", SKU: 'box012',nome: "duo de xícaras com suporte", preco: "R$90,00", imagem: "/imgs/produtos/FotosSite12.jpg" },
    {categoria: "box", SKU: 'box013',nome: "Box envelope", preco: "R$120,00", imagem: "/imgs/produtos/FotosSite13.jpg" },
    {categoria: "box", SKU: 'box014',nome: "Box dia das mães", preco: "R$189,00", imagem: "/imgs/produtos/FotosSite14.jpg" },
    {categoria: "box", SKU: 'box015',nome: "Box love", preco: "R$180,00", imagem: "/imgs/produtos/FotosSite15.jpg" },
    {categoria: "box", SKU: 'box016',nome: "Box dia das mães", preco: "R$169,00", imagem: "/imgs/produtos/FotosSite16.jpg" },
    {categoria: "box", SKU: 'box017',nome: "Box dia das mães", preco: "R$249,00", imagem: "/imgs/produtos/FotosSite17.jpg" },
    {categoria: "box", SKU: 'box018',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite18.jpg" },
    {categoria: "box", SKU: 'box019',nome: "caixa acrílica com balão", preco: "R$115,00", imagem: "/imgs/produtos/FotosSite19.jpg" },
    {categoria: "box", SKU: 'box020',nome: "caixa acrílica", preco: "R$90,00", imagem: "/imgs/produtos/FotosSite20.jpg" },
    {categoria: "box", SKU: 'box021',nome: "bubble de mesa grande", preco: "R$75,00", imagem: "/imgs/produtos/FotosSite21.jpg" },
    {categoria: "box", SKU: 'box022',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite22.jpg" },
    {categoria: "box", SKU: 'box023',nome: "Box cervejeiro", preco: "R$199,00", imagem: "/imgs/produtos/FotosSite23.jpg" },
    {categoria: "box", SKU: 'box024',nome: "Bubble de mesa pequeno", preco: "R$40,00", imagem: "/imgs/produtos/FotosSite24.jpg" },
    {categoria: "box", SKU: 'box025',nome: "Box Aniversário", preco: "R$150,00", imagem: "/imgs/produtos/FotosSite25.jpg" },
    {categoria: "box", SKU: 'box026',nome: "bubble de mesa grande", preco: "R$75,00", imagem: "/imgs/produtos/FotosSite26.jpg" },
    {categoria: "box", SKU: 'box027',nome: "Box Aniversário", preco: "R$189,00", imagem: "/imgs/produtos/FotosSite27.jpg" },
    {categoria: "camisa", SKU: 'box028',nome: "Bubble médio", preco: "R$60,00", imagem: "/imgs/produtos/FotosSite28.jpg" },
    {categoria: "box", SKU: 'box029',nome: "Box café da manhã", preco: "R$350,00", imagem: "/imgs/produtos/FotosSite29.jpg" },
    {categoria: "box", SKU: 'box030',nome: "caixa acrílica", preco: "R$105,00", imagem: "/imgs/produtos/FotosSite30.jpg" },
    {categoria: "box", SKU: 'box031',nome: "Bubble grande", preco: "R$75,00", imagem: "/imgs/produtos/FotosSite31.jpg" },
    // Adicionar produtos
];

const box = produto => produto.categoria === 'box';
const caneca = produto => produto.categoria === 'caneca';
const camisa = produto => produto.categoria === 'camisa';
const produtoSelecionado = document.querySelector('#products-container');

const filtrarCaneca = productsData.filter(produto => caneca(produto));
console.log(filtrarCaneca);
const filtrarBox = productsData.filter(produto => box(produto));
console.log(filtrarBox);
const filtrarCamisa = productsData.filter(produto => camisa(produto));
console.log(filtrarCamisa);


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
        productsContainer.appendChild(productElement);
    });
}
createProducts();
