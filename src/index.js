import './style.css';

const showSubMenu = function showSubMenu(event, subMenu) {
  console.log('showSubmenu');
  subMenu.classList.add('visible');

  // subMenu.classList.add('offset-layer');
};

const hideSubMenu = function hideSubMenu(subMenu) {
  console.log('hideSubmenu');

  // subMenu.classList.add('layer-minus-1');
  // subMenu.classList.remove('layer-0');

  subMenu.classList.remove('visible');
  // subMenu.classList.remove('offset-layer');
};

// const hello = function hello() {
//   console.log(this);

// };

const menuContainers = document.querySelectorAll('.menu-container');
menuContainers.forEach((menuContainer) => {
  const subMenu = [...menuContainer.children].find((element) =>
    element.classList.contains('sub-menu'),
  );

  menuContainer.addEventListener('mouseenter', (event) => {
    showSubMenu(event, subMenu);
  });

  menuContainer.addEventListener('mouseleave', () => {
    hideSubMenu(subMenu);
  });

  // subMenu.addEventListener('animationend', () => {
  //   subMenu.classList.remove('layer-minus-1');
  //   subMenu.classList.add('layer-0');
  // });
});
