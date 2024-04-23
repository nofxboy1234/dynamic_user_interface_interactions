import './style.css';

const showMenu = function showMenu(menu) {
  [...menu.children].forEach((submenu) => {
    submenu.classList.add('visible');
    submenu.classList.add('offset-layer');
  });
};

const hideMenu = function hideMenu(menu) {
  [...menu.children].forEach((submenu) => {
    submenu.classList.remove('visible');
    submenu.classList.remove('offset-layer');
  });
};

const menus = document.querySelectorAll('.menu');
menus.forEach((menu) => {
  menu.addEventListener('mouseover', () => {
    showMenu(menu);
  });

  menu.addEventListener('mouseout', () => {
    hideMenu(menu);
  });
});
