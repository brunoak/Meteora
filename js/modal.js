//modal.js

const modal = document.querySelector("dialog");

window.modalProduto = function modalProduto(image, alt, titulo, descricao, preco) {
    modal.innerHTML = `
        <header class="modal__header">
            <div class="modal__header_tablet">
                <img src="assets/Mobile/Ícones/check-circle.svg" alt="">
                <h4>Confira detalhes sobre o produto</h4>
            </div>
            <a class="modal__header_close" href="#"><img src="assets/Mobile/Ícones/bx-x.svg" alt=""></a>
        </header>
        <section class="modal__body">
            <div class="modal__body__img">
                <picture>
                    <source media="(min-width: 768px)" srcset="${image}" type="image/png">
                    <img src="${image}" alt="${alt}">
                </picture>
            </div>
            <div class="modal__body__conteudo_lado_direito_tablet">
                <div class="modal__body__produto">
                    <h4>${titulo}</h4>
                    <p class="modal__body__produto_descrição">${descricao}</p>
                    <hr>
                    <p class="modal__body__produto_preço">R$ ${preco}</p>
                    <p class="modal__body__produto_placeholder">Vendido e entregue por Riachuelo</p>
                    <hr class="hr">
                </div>
                <div class="modal__body__descrição">
                    <h4>Cores:</h4>
                    <form class="modal__body__descrição__formulario">
                        <div>
                            <input type="radio" id="html" name="fav_language" value="HTML">
                            <label for="html">Azul Claro</label>
                        </div>
                        <div>
                            <input type="radio" id="css" name="fav_language" value="CSS">
                            <label for="css">OffWhite</label>
                        </div>
                        <div>
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript">
                            <label for="javascript">Preto</label>
                        </div>
                    </form>
                    <hr class="hr">
                    <h4>Tamanho:</h4>
                    <form class="modal__body__descrição__formulario">
                        <div>
                            <input type="radio" id="html" name="fav_language" value="HTML">
                            <label for="html">P</label>
                        </div>
                        <div>
                            <input type="radio" id="css" name="fav_language" value="CSS">
                            <label for="css">PP</label>
                        </div>
                        <div>
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript">
                            <label for="javascript">M</label>
                        </div>
                        <div>
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript">
                            <label for="javascript">G</label>
                        </div>
                        <div>
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript">
                            <label for="javascript">GG</label>
                        </div>
                    </form>
                    <a class="modal__body__descrição__botao" href="http://">Adicionar a Sacola</a>
                </div>
            </div>
        </section>   
    `;
    modal.showModal();
};

// Evento para fechar o modal
document.querySelector('body').addEventListener('click', function(event){
    if(event.target.closest('.modal__header_close')){
        event.preventDefault();
        modal.close();
    }
});

