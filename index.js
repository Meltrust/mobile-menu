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

const button = document.getElementById('menuBars');
button.addEventListener('click', toggleMobileMenu);

const item = document.querySelectorAll('.list-menu-item');
item.forEach((e) => {
  e.addEventListener('click', () => elem.classList.remove('show-menu-mobile'));
});
