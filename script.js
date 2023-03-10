/* eslint-disable no-unused-vars */
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

const cards = () => {
  const card = cardsInfo.map(
    (cardsInfo) => ` <div class="card ${cardsInfo.class}">
                      <div class="description">
                        <div class="heading">${cardsInfo.title}</div>
                        <div class="support-text">
                          <p>
                            ${cardsInfo.description}
                          </p>
                        </div>
                        <div class="tech-stack">
                          <ul>
                            <li>${cardsInfo.tech_stack.tech1}</li>
                            <li>${cardsInfo.tech_stack.tech2}</li>
                            <li>${cardsInfo.tech_stack.tech3}</li>
                          </ul>
                        </div>
                      </div>
                      <button onclick='popupInfo(${cardsInfo.id})' type="submit" class="project-button">See Project</button>
                    </div> `,
  );
  return card;
};

const firstCardInfo = {
  id: 1,
  class: 'more',
  image: '#',
  title2: 'Multi-Post Stories',
  details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  tech_stack: {
    tech0: 'css',
    tech1: 'html',
    tech2: 'bootstrap',
    tech3: 'Ruby',
  },
};

const firstCard = ` <div id="yoga-img"></div>
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
                      <button onclick='openfirst()' id="project-button" type="submit" href='#modal'>See Project</button>
                    </div>`;

const popupInfo = (projectId) => {
  if (projectId == null) return;
  let checked = cardsInfo.filter((elem) => elem.id === projectId);
  checked = checked.shift();
  const modalMobile = ` <div id="modal "class="modal">
                        <header class='modal-header'>
                          <h1 class="modal-heading font-size">${checked.title}</h1>
                          <div class="close-btn" onclick="closeModal()">
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
  document.getElementById('modal-container').innerHTML = modalMobile;
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.add('active');
  overlay.classList.add('active');
};

const modalfirst = `<div id="modal "class="modal">
                      <header class='modal-header'>
                        <h1 class="modal-heading">${firstCardInfo.title2}</h1>
                        <div class="close-btn" onclick="closeModal()">
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
                            <button type="submit" id="seeLive" class="project-button popup">See Live<img src="icons/seeLive.svg" /></button>
                            <button type="submit" id="seeSource" class="project-button popup">See Source<img src="icons/seeSource.svg" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="overlay"></div>`;

window.addEventListener('load', () => {
  document.getElementById('first-project').innerHTML = firstCard;
  document.querySelector('.card-container').innerHTML = cards().join('');
});

const openfirst = () => {
  document.getElementById('modal-container').innerHTML = modalfirst;
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.add('active');
  overlay.classList.add('active');
};

function closeModal() {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.getElementById('modal-container').removeChild(document.querySelector('.modal'));
}

const validatorLog = document.getElementById('validator-log');
const form = document.getElementById('form');
const emailBox = document.getElementById('email');
const nameBox = document.getElementById('fullname');
const messageBox = document.getElementById('message');
const regexp = /[A-Z]/;

form.addEventListener('submit', (event) => {
  if (regexp.test(emailBox.value)) {
    event.preventDefault();
    validatorLog.innerText = '*no capital letters can be used for email address';
  }
});

form.addEventListener('input', () => {
  const formData = {
    name: nameBox.value,
    email: emailBox.value,
    message: messageBox.value,
  };
  localStorage.setItem('contactForm', JSON.stringify(formData));
});
