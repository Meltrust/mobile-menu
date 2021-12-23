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
  // if (elem.style.display === 'block') {
  //   elem.style.display = 'none';
  // logoName.style.display = 'none';
  // menuButton.style.display = 'none';
  // } else {
  // elem.style.display = 'block';
  // menuButton.style.display = 'block';
  // logoName.style.display = 'block';
};

const item = document.querySelectorAll('.list-menu-item');

// const closeMobileMenu = () => {
//   item.forEach((e) => e.classList.remove('show-menu-mobile'));
// };
item.forEach((e) => {
  e.addEventListener('click', (e) => elem.classList.remove('show-menu-mobile'));
});
