import './style.css';

// const menus = document.querySelectorAll('.menu');
// menus.forEach((menu) => {
//   [...menu.children].forEach((submenu) => {
//     submenu.classList.add('visible');
//   });
// });

const menus = document.querySelectorAll('.menu');
menus.forEach((menu) => {
  menu.addEventListener('mouseover', (event) => {
    [...menu.children].forEach((submenu) => {
      submenu.classList.add('visible');
    });
  });

  menu.addEventListener('mouseout', (event) => {
    [...menu.children].forEach((submenu) => {
      submenu.classList.remove('visible');
    });
  });
});
