import './style.css';

const showSubmenu = function showSubmenu(submenu) {
  submenu.classList.add('visible');
  submenu.classList.add('offset-layer');
};

const hideSubmenu = function hideSubmenu(submenu) {
  submenu.classList.remove('visible');
  submenu.classList.remove('offset-layer');
};

// const hideMenu = function hideMenu(menu) {
//   [...menu.children].forEach((submenu) => {
//     submenu.classList.remove('visible');
//     submenu.classList.remove('offset-layer');
//   });
// };

const menuContainers = document.querySelectorAll('.menu-container');
menuContainers.forEach((menuContainer) => {
  const menu = menuContainer.firstElementChild;
  const submenu = [...menuContainer.children].find((element) =>
    element.classList.contains('submenu'),
  );
  menu.addEventListener('mouseover', () => {
    showSubmenu(submenu);
  });

  menu.addEventListener('mouseout', () => {
    hideSubmenu(submenu);
  });
});
