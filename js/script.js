// Toogle class active Navbar
const navbarNav = document.querySelector('.navbar-nav');

// Ketika menu hamburger di klik
  document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
  }

// Klik di luar sidebar untuk menghilangkan NAV
const hamburger = document.querySelector('#hamburger-menu');
  document.addEventListener('click', (e) => {
    if( !hamburger.contains(e.target) && !navbarNav.contains(e.target) ) {
      navbarNav.classList.remove('active');
    }
  })