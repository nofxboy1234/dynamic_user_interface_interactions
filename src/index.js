import './style.css';

// const menus = document.querySelectorAll('.menu');
// menus.forEach((menu) => {
//   [...menu.children].forEach((submenu) => {
//     submenu.classList.add('visible');
//   });
// });

const showMenu = function showMenu(menu) {
  [...menu.children].forEach((submenu) => {
    submenu.classList.add('visible');
  });
};

const hideMenu = function hideMenu(menu) {
  [...menu.children].forEach((submenu) => {
    submenu.classList.remove('visible');
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
