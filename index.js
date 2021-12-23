// init

const toggleMobileMenu = () => {
  const elem = document.getElementById('menuMobile');
  if (elem.style.display === 'block') {
    elem.style.display = 'none';
  } else {
    elem.style.display = 'block';
  }
}
