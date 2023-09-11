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
  image: 'desktop_books.png',
  title2: 'Books Collection',
  details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  tech_stack: {
    tech0: 'a',
    tech1: 'b',
    tech2: 'c',
    tech3: 'd',
  },
};

// Displays the first card with details
document.getElementById('first-project').innerHTML = ` <div id="img" style="background: url(Images/desktop_books.png)"></div>
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
                          <li>${firstCardInfo.tech_stack.tech3}</li>
                        </ul>
                      </div>
                      <button id="project-button" type="submit" href='#modal'>See Project</button>
                    </div>`;

 // Styling the first card
const img = document.getElementById('img');
img.style.width = '100%';
img.style.background = `url(Images/${firstCardInfo.image})`;
img.style.backgroundRepeat = 'no-repeat';
img.style.backgroundSize = 'contain';
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
                          <li>${firstCardInfo.tech_stack.tech3}</li>
                        </ul>
                      </div>
                      <div class="content">
                        <div id="img10"></div>
                        <div class="right-section">
                          <p class="description popup">${firstCardInfo.details}</>
                          <div class="button-container">
                            <button type="submit" id="seeLive" class="project-button popup"><a class="seeLive" href="https://anbehindy.github.io/Books-Collection/#" target="_blank">See Live<img src="icons/seeLive.svg" /></a></button>
                            <button type="submit" id="seeSource" class="project-button popup"><a class="seeSource" href="https://github.com/anbehindY/Books-Collection" target="_blank">See Source<img src="icons/seeSource.svg" /></a></button>
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
    class: 'more',
    image: '#',
    title: 'Profesional Art Printing Data',
    title2: 'Multi-Post Stories',
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description1: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    tech_stack: {
      tech0: 'css',
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    liveLink: '#',
    sourceLink: 'https://github.com/anbehindY',
  },
  {
    id: 2,
    class: 'healthCare',
    image: '#',
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    tech_stack: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    liveLink: '#',
    sourceLink: 'https://github.com/anbehindY',
  },
  {
    id: 3,
    class: 'website',
    image: '#',
    title: 'Website Portfollio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    tech_stack: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    liveLink: '#',
    sourceLink: 'https://github.com/anbehindY',
  },
  {
    id: 4,
    class: 'more',
    image: '#',
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    tech_stack: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    liveLink: '#',
    sourceLink: 'https://github.com/anbehindY',
  },
  {
    id: 5,
    class: 'healthCare',
    image: '#',
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    tech_stack: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    liveLink: '#',
    sourceLink: 'https://github.com/anbehindY',
  },
  {
    id: 6,
    class: 'website',
    image: '#',
    title: 'Website Portfollio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    tech_stack: {
      tech1: 'html',
      tech2: 'bootstrap',
      tech3: 'Ruby',
    },
    liveLink: '#',
    sourceLink: 'https://github.com/anbehindY',
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
                          <h1 class="modal-heading font-size">${checked.title}</h1>
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
                          <div id="img10"></div>
                          <div class="right-section">
                            <p class="description popup">${checked.description}</p>
                            <div class="button-container">
                              <button type="submit" id="seeLive" class="project-button popup">See Live<img src="icons/seeLive.svg" /></button>
                              <button type="submit" id="seeSource" class="project-button popup">See Source<img src="icons/seeSource.svg" /></button>
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
