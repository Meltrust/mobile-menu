const elem = document.getElementById('menuMobile');
const item = document.querySelectorAll('.list-menu-item');
const logo = document.getElementById('logo');
const menubars = document.getElementById('menuBars');

const toggleMobileMenu = () => {
  if (!elem.classList.contains('show-menu-mobile')) {
    elem.classList.add('show-menu-mobile');
    logo.style.display = 'none';
    menubars.style.display = 'none';
  } else {
    elem.classList.remove('show-menu-mobile');
    logo.style.display = 'block';
    menubars.style.display = 'inline-block';
  }
};

const button = document.getElementById('menuBars');
button.addEventListener('click', toggleMobileMenu);
console.log(elem);
item.forEach((e) => {
  e.addEventListener('click', toggleMobileMenu);
});
