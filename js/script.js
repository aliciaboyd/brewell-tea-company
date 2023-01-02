const menuButton = document.querySelector('.menu-toggle');
const mobileNavHeader = document.querySelector('.mobile-nav-header');
const mobileNavLinks = document.querySelector('.nav-links');
const mobileNavLogo = document.querySelector(".logo img");
let navOpenStatus;

function resetNav() {
  menuButton.innerHTML = "Menu";
  mobileNavHeader.classList.remove('active');
  mobileNavLinks.classList.remove('active');
  menuButton.classList.remove('active');
  mobileNavLogo.src = "img/logos/brewell-logo-lt.svg";
  navOpenStatus = false;
};

function showHideNav() {
  if (!menuButton.classList.contains('active')) {
    menuButton.innerHTML = "Close";
    mobileNavHeader.classList.toggle('active');
    mobileNavLinks.classList.toggle('active');
    menuButton.classList.toggle('active');
    mobileNavLogo.src = "img/logos/brewell-logo-dark.svg";
    navOpenStatus = true;
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