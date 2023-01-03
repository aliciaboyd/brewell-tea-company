const menuButton = document.querySelector('.menu-toggle');
const fixedNav = document.querySelector('.main-nav');
const mobileNavHeader = document.querySelector('.mobile-nav-header');
const mobileNavLinks = document.querySelector('.nav-links');
const mobileNavLogo = document.querySelector(".logo img");

function resetNav() {
  menuButton.innerHTML = "Menu";
  mobileNavHeader.classList.remove('active');
  mobileNavLinks.classList.remove('active');
  menuButton.classList.remove('active');
  mobileNavLogo.src = "img/logos/brewell-logo-lt.svg";
};

function showHideNav() {
  if (!menuButton.classList.contains('active')) {
    menuButton.innerHTML = "Close";
    mobileNavHeader.classList.toggle('active');
    mobileNavLinks.classList.toggle('active');
    menuButton.classList.toggle('active');
    mobileNavLogo.src = "img/logos/brewell-logo-dark.svg";
  } else {
    resetNav();
  };
};

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    resetNav();
  }
});

menuButton.addEventListener('click', showHideNav);


window.addEventListener('scroll', () => {
  if (window.scrollY > (window.innerHeight / 2)){
    fixedNav.classList.add('nav-scroll-bg')
  } else {
    fixedNav.classList.remove('nav-scroll-bg')
  }
});