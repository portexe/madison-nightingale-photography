import { closeHamburger } from './hamburger.js';

export function initLinkClicks() {
  const linkClickMap = {
    wedding: 'wedding-section',
    modeling: 'model-section',
    maternity: 'maternity-section',
    couples: 'couples-section',
    about: 'about-me',
  };

  const arrayOfLinks = Array.from(document.querySelectorAll('#links div'));

  arrayOfLinks.forEach((link) =>
    link.addEventListener('click', (evt) => {
      const linkClicked = evt.target.innerText.toLowerCase();
      const section = document.getElementById(linkClickMap[linkClicked]);

      if (window.innerWidth <= 750) {
        closeHamburger();
      }

      section.scrollIntoView({ behavior: 'smooth' });
    })
  );
}
