const sideMenu = document.querySelector('.side-menu');
const menuOpenIcon = document.querySelector('.header-menu');
const closeMenuIcon = document.querySelector('.close-menu');
const Nav = document.querySelector('nav');

menuOpenIcon.addEventListener('click', () => {
  sideMenu.classList.remove('hidden');
})

closeMenuIcon.addEventListener('click', () => {
  sideMenu.classList.add('hidden');
})

//window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    sideMenu.classList.add('hidden');
    Nav.classList.remove('hidden');
    menuOpenIcon.classList.add('hidden');
  }
  else {
    Nav.classList.add('hidden');
    menuOpenIcon.classList.remove('hidden');
  }
})

//window load
window.addEventListener('load', () => {
  if (window.innerWidth > 768) {
    sideMenu.classList.add('hidden');
    Nav.classList.remove('hidden');
    menuOpenIcon.classList.add('hidden');
  }
  else {
    Nav.classList.add('hidden');
    menuOpenIcon.classList.remove('hidden');
  }
})

