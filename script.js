const hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', () => { hamburger.classList.toggle('active'); });
const mobileNav = document.querySelector('.top-nav')
hamburger.addEventListener('click', () => { mobileNav.classList.toggle('active'); });