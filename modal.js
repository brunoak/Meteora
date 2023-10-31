document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll("a.produtos__card__botão");
    const modal = document.querySelector("dialog");
    const close = document.querySelector("header .modal__header_close"); // Alterei o seletor aqui

    botoes.forEach(function(botao) {
        botao.addEventListener('click', function(event) {
            event.preventDefault();
            modal.showModal();
        });
    });

    close.addEventListener('click',function(){
        event.preventDefault();
        modal.close();
        console.log("Fui clicado");
    });
});

