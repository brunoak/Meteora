//mostraProduto.js

const produtos = document.querySelector(".produtos__produto")
console.log(produtos)


function mostraProduto(itens){
    produtos.innerHTML="";
    itens.forEach(produto => {
        produtos.innerHTML += `
            <div class="produtos__card" id="produtos__card_camiseta">
                <img src="${produto.imagem}" alt="${produto.alt}">
                <div class="produtos__card_borda">
                    <h3 class="produtos__card__titulo">${produto.titulo}</h3>
                    <p class="produtos__card__descrição">${produto.descricao}.</p>
                    <p class="produtos__card__preço">R$ ${produto.preco}</p>
                    <a class="produtos__card__botão" href="#"
                        data-imagem = "${produto.imagem}"
                        data-alt="${produto.alt}" 
                        data-titulo="${produto.titulo}" 
                        data-descricao="${produto.descricao}" 
                        data-preco="${produto.preco}">
                    Veja mais</a>
                </div>
            </div>
        ` 
    });

    produtos.addEventListener('click', function(event){
        if(event.target.classList.contains('produtos__card__botão')){
            event.preventDefault();
            
            const imagem = event.target.getAttribute('data-imagem');
            const alt = event.target.getAttribute('data-alt');
            const titulo = event.target.getAttribute('data-titulo');
            const descricao = event.target.getAttribute('data-descricao');
            const preco = event.target.getAttribute('data-preco');

            modalProduto(imagem, alt, titulo, descricao, preco)
        }
    })
}
