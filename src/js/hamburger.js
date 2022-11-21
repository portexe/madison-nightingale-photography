const activeClass = 'is-active';
const hamburgerElement = () => document.getElementById('hamburger');
const navigatorElement = () => document.getElementById('navigation');

export function closeHamburger() {
  const hammy = hamburgerElement();
  const navigator = navigatorElement();

  hammy.classList.remove(activeClass);
  navigator.style.display = 'none';
}

export function openHamburger() {
  const hammy = hamburgerElement();
  const navigator = navigatorElement();

  hammy.classList.add(activeClass);
  navigator.style.display = 'block';
}

export function initHamburger() {
  const hammy = hamburgerElement();

  hammy.addEventListener('click', () => {
    if (hammy.classList.contains(activeClass)) {
      closeHamburger();
    } else {
      openHamburger();
    }
  });
}
