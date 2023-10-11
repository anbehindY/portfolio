// Interactivity for intro section
const role = document.querySelector('.first-role');
const interactiveText = () => {
  setTimeout(() => {
    role.textContent = 'Front-end Developer';
  }, 0);
  setTimeout(() => {
    role.textContent = 'Back-end Developer';
  }, 4000);
  setTimeout(() => {
    role.textContent = 'Full-stack Developer';
  }, 8000);
}
interactiveText();

// Interactivity for mobile hamburger CSS icon
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.top-nav');
const navItems = document.querySelectorAll('.nav-items');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
});

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

navItems.forEach((navItem) => navItem.addEventListener('click', () => {
  document.querySelector('.hamburger').classList.remove('active');
  mobileNav.classList.remove('active');
}));

// Action for closing every modal
const closeModal = () => {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.getElementById('modal-container').removeChild(document.querySelector('.modal'));
};

// Object containing the first card details
const firstCardInfo = {
  id: 1,
  class: 'more',
  image: 'books.png',
  title2: 'Books Collection',
  details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  tech_stack: {
    tech0: 'HTML',
    tech1: 'CSS',
    tech2: 'JavaScript',
  },
};

// Displays the first card with details
document.getElementById('first-project').innerHTML = `<div id="img"></div>
                    <div id="card">
                      <div id="main-text">
                        <h3>${firstCardInfo.title2}</h3>
                      </div>
                      <div id="support-text">
                        <p>
                          ${firstCardInfo.details}
                        </p>
                      </div>
                      <div class="tech-box">
                        <ul>
                          <li>${firstCardInfo.tech_stack.tech0}</li>
                          <li>${firstCardInfo.tech_stack.tech1}</li>
                          <li>${firstCardInfo.tech_stack.tech2}</li>
                        </ul>
                      </div>
                      <button id="project-button" type="button" href='#modal'>See Project</button>
                    </div>`;

// Styling the first card
const img = document.getElementById('img');
img.style.width = '100%';
img.style.background = `url(assets/${firstCardInfo.image})`;
img.style.backgroundRepeat = 'no-repeat';
img.style.backgroundSize = 'cover';
img.style.backgroundPosition = '25% 0';
img.style.zIndex = '1';
img.style.border = '1px solid black';

// Popup modal for the first card(will be executed when the user clicks on the first card button)
const modalfirst = `<div id="modal "class="modal">
                      <header class='modal-header'>
                        <h1 class="modal-heading">${firstCardInfo.title2}</h1>
                        <div class="close-btn">
                          <div class="rotator1"></div>
                          <div class="rotator2"></div>
                        </div>
                      </header>
                      <div class="tech-box popup">
                        <ul>
                          <li>${firstCardInfo.tech_stack.tech0}</li>
                          <li>${firstCardInfo.tech_stack.tech1}</li>
                          <li>${firstCardInfo.tech_stack.tech2}</li>
                        </ul>
                      </div>
                      <div class="content">
                        <div id="img10"></div>
                        <div class="right-section">
                          <p class="description popup">${firstCardInfo.details}</>
                          <div class="button-container">
                            <button type="submit" class="project-button popup"><a class="link" href="https://anbehindy.github.io/Books-Collection/#" target="_blank">See Live<img src="icons/seeLive.svg" /></a></button>
                            <button type="submit" class="project-button popup"><a class="link" href="https://github.com/anbehindY/Books-Collection" target="_blank">See Source<img src="icons/seeSource.svg" /></a></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="overlay"></div>`;

// Action for displaying the modal for the first card
const firstModal = () => {
  document.getElementById('modal-container').innerHTML = modalfirst;
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.add('active');
  overlay.classList.add('active');
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.onclick = closeModal;
};

// Displays the modal for the first card when the user clicks on the first card button
const firstButton = document.getElementById('project-button');
firstButton.onclick = firstModal;

// Array of objects which contain details of each card except the first card
const cardsInfo = [
  {
    id: 1,
    class: 'techscape',
    image: 'techscape_1.png',
    title: 'TechScape@3AM',
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    description: 'Techscape@3AM is a user interface for sharing technical knowledge to technical and non-technical people by programs, blogs, and conferences.',
    tech_stack: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'JavaScript',
    },
    liveLink: 'https://anbehindy.github.io/Techscape-3AM/index.html',
    sourceLink: 'https://github.com/anbehindY/Techscape-3AM',
  },
  {
    id: 2,
    class: 'mootv',
    image: 'mootv.png',
    title: 'MooTV',
    description: 'MooTV is a single page web application, which uses the TV Maze open api to get data about the movies and series.',
    tech_stack: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'JavaScript',
    },
    liveLink: 'https://anbehindy.github.io/JS-Capstone/dist/',
    sourceLink: 'https://github.com/anbehindY/JS-Capstone',
  },
  {
    id: 3,
    class: 'calculator',
    image: 'math_magicians.png',
    title: 'Math Magicians',
    description: 'Math Magicians is a single page application built with React. It can be used to deal with simple calculations and to display a random quote.',
    tech_stack: {
      tech1: 'React',
      tech2: 'CSS',
      tech3: 'API',
    },
    liveLink: 'https://math-magicians-ua6d.onrender.com',
    sourceLink: 'https://github.com/anbehindY/math-magicians',
  },
  {
    id: 4,
    class: 'space',
    image: 'space.png',
    title: 'Space Travel Hub',
    description: 'Space Travel Hub describes a number of features related to the rockets, and missions associated with space travel services',
    tech_stack: {
      tech1: 'React',
      tech2: 'Redux',
      tech3: 'API',
    },
    liveLink: 'https://space-travel-hub.onrender.com/',
    sourceLink: 'https://github.com/mercymugambi/space-travel-project',
  },
  {
    id: 5,
    class: 'got',
    image: 'got.png',
    title: 'GOT Characters',
    description: 'Game of thrones characters is a single-page web application. A list of houses and characters from the GOT TV shows are displayed.',
    tech_stack: {
      tech1: 'React',
      tech2: 'Redux',
      tech3: 'API',
    },
    liveLink: 'https://mellifluous-haupia-bcf5dd.netlify.app/',
    sourceLink: 'https://github.com/anbehindY/game-of-thrones-characters',
  },
  {
    id: 6,
    class: 'budget',
    image: 'budget.png',
    title: 'Budget Tracker',
    description: 'Budget Tracker is a web application that allows users to track their expenses and incomes.',
    tech_stack: {
      tech1: 'Rails',
      tech2: 'TailwindCSS',
      tech3: 'PostgreSQL',
    },
    liveLink: 'https://budget-tracker-first-release.onrender.com/',
    sourceLink: 'https://github.com/anbehindY/Budget-Tracker',
  },
];

// Extracting each card's details from the array and insert it inside each card
const card = cardsInfo.map((cardInfo) => `<div class="card ${cardInfo.class}">
                    <div class="description">
                      <div class="heading">${cardInfo.title}</div>
                        <div class="support-text">
                          <p>
                            ${cardInfo.description}
                          </p>
                        </div>
                        <div class="tech-stack">
                          <ul>
                            <li>${cardInfo.tech_stack.tech1}</li>
                            <li>${cardInfo.tech_stack.tech2}</li>
                            <li>${cardInfo.tech_stack.tech3}</li>
                          </ul>
                        </div>
                      </div>
                    <button id=${cardInfo.id} type="submit" class="project-button popup">See Project</button>
                  </div> `);

// Displays a collection of cards with details
document.querySelector('.card-container').innerHTML = card.join('');

// Popup modal for each card
const popupInfo = (projectId) => {
  if (projectId == null) return;
  let checked = cardsInfo.filter((cardInfo) => cardInfo.id === parseInt(projectId, 10));
  checked = checked.shift();
  const modalBox = ` <div id="modal "class="modal">
                        <header class='modal-header'>
                          <h1 class="modal-heading">${checked.title}</h1>
                          <div class="close-btn">
                            <div class="rotator1"></div>
                            <div class="rotator2"></div>
                          </div>
                        </header>
                        <div class="tech-box popup">
                          <ul>
                            <li>${checked.tech_stack.tech1}</li>
                            <li>${checked.tech_stack.tech2}</li>
                            <li>${checked.tech_stack.tech3}</li>
                          </ul>
                        </div>
                        <div class="content">
                          <div><img src="assets/${checked.image}" class='popup-img' /></div>
                          <div class="right-section">
                            <p class="description popup">${checked.description}</p>
                            <div class="button-container">
                              <button type="submit" class="project-button popup">
                                <div class='link-wrapper'>
                                  <a class="link" href=${checked.liveLink} target="_blank">See Live<img src="icons/seeLive.svg" /></a>
                                </div>
                              </button>
                              <button type="submit" class="project-button popup"><a class="link" href=${checked.sourceLink} target="_blank">See Source<img src="icons/seeSource.svg" /></a></button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="overlay"></div>`;
  document.getElementById('modal-container').innerHTML = modalBox;
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.add('active');
  overlay.classList.add('active');
  const closeBtns = document.querySelectorAll('.close-btn');
  closeBtns.forEach((btn) => btn.addEventListener('click', closeModal));
};

// Displays the modal for each card when the user clicks on the card button
const popupBtn = document.querySelectorAll('.project-button.popup');
popupBtn.forEach((btn) => btn.addEventListener('click', (event) => {
  const projectId = event.target.id;
  popupInfo(projectId);
}));

// Form validation
const validatorLog = document.getElementById('validator-log');
const form = document.getElementById('form');
const emailBox = document.getElementById('email');
const regexp = /[A-Z]/;

form.addEventListener('submit', (event) => {
  if (regexp.test(emailBox.value)) {
    event.preventDefault();
    validatorLog.innerText = '*no capital letters can be used for email address';
  }
});
