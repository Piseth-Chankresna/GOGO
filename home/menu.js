var menuNav = document.querySelector('.menu-nav');
var sideMenu = document.getElementById('sideMenu');
var menuOverlay = document.getElementById('menuOverlay');
var sideMenuClose = document.getElementById('sideMenuClose');

var openSideMenu = function () {
  var scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = scrollbarWidth + 'px';

  sideMenu.classList.add('active');
  menuOverlay.classList.add('active');
  document.body.classList.add('no-scroll');
  menuNav.setAttribute('aria-expanded', 'true');
  sideMenu.setAttribute('aria-hidden', 'false');
};

var closeSideMenu = function () {
  sideMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
  document.body.style.paddingRight = '';
  menuNav.setAttribute('aria-expanded', 'false');
  sideMenu.setAttribute('aria-hidden', 'true');
};

menuNav.addEventListener('click', openSideMenu);
menuNav.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openSideMenu();
  }
});

sideMenuClose.addEventListener('click', closeSideMenu);
sideMenuClose.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    closeSideMenu();
  }
});

menuOverlay.addEventListener('click', closeSideMenu);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeSideMenu();
});

sideMenu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', closeSideMenu);
});
