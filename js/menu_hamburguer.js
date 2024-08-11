const button = document.querySelector('.cabecalho_menu_img');
const menuNav = document.querySelector('.cabecalho_menu_mobile');

const imgMenuHamburguer = "url(assets/Mobile/Ícones/menu-aberto-png.png)";
const imgMenuFechar = "url(assets/Mobile/Ícones/menu-fechado.png)";

button.addEventListener('click', () => {
  menuNav.classList.toggle('menu-active');
  menuNav.classList.contains('menu-active') ? button.style.backgroundImage = imgMenuFechar : button.style.backgroundImage = imgMenuHamburguer;
});