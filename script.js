const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.top-nav'); 
const navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => { hamburger.classList.toggle('active'); });
hamburger.addEventListener('click', () => { mobileNav.classList.toggle('active'); });

for (let i = 0; i < navItems.length; i += 1) {
  navItems[i].addEventListener('click', () => {
  document.body.style.overflowY = 'scroll';
//   hamburger.classList.remove('active');
  mobileNav.classList.remove('active');
  });};