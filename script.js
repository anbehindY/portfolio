const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
});
const mobileNav = document.querySelector('.top-nav');
hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});
const navItems = document.querySelector('.nav-items');
navItems.onclick = navItems.forEach((navItem) => navItem.classList.remove('active'));