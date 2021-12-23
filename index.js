/* eslint-disable no-unused-vars */
const elem = document.getElementById('menuMobile');
const toggleMobileMenu = () => {
  // const logoName = document.getElementById('logo');
  // const menuButton = document.getElementById('menuBars');
  if (!elem.classList.contains('show-menu-mobile')) {
    elem.classList.add('show-menu-mobile');
  } else {
    elem.classList.remove('show-menu-mobile');
  }
};
const item = document.querySelectorAll('.list-menu-item');
item.forEach((e) => {
  e.addEventListener('click', (e) => elem.classList.remove('show-menu-mobile'));
});
