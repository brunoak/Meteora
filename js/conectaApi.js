//conectaApi.js
let conexaoConvertidaProduto = [];
async function conexao(){
    const url = await fetch("https://brunoak.github.io/api-produtos/produtos.json");
    const conexaoConvertida = await url.json();
    console.table(conexaoConvertida.produto)
    conexaoConvertidaProduto = conexaoConvertida.produto
    mostraProduto(conexaoConvertidaProduto)
} 

conexao()