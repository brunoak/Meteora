categoria = document.querySelectorAll('[data-value]');

categoria.forEach(categorias =>{
    categorias.addEventListener("click",(e)=>{
        e.preventDefault();
        chamaCategoria(categorias.dataset.value)
    } )
})

function chamaCategoria(produto){
    let produtos = conexaoConvertidaProduto.filter(p => p.categoria === produto)
    console.table(produtos)
    mostraProduto(produtos)
}