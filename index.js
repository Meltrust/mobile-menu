const elem = document.getElementById('menuMobile');
const item = document.querySelectorAll('.list-menu-item');

const toggleMobileMenu = () => {
  if (!elem.classList.contains('show-menu-mobile')) {
    elem.classList.add('show-menu-mobile');
  } else {
    elem.classList.remove('show-menu-mobile');
  }
};

const button = document.getElementById('menuBars');
button.addEventListener('click', toggleMobileMenu);

item.forEach((e) => {
  e.addEventListener('click', () => elem.classList.remove('show-menu-mobile'));
});
