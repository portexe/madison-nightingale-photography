import { initLinkClicks } from './links.js';
import { initParallax } from './parallax.js';
import { initHamburger } from './hamburger.js';

document.addEventListener('DOMContentLoaded', () => {
  initParallax();
  initLinkClicks();
  initHamburger();
});

document.addEventListener('scroll', () => {
  const jarallaxHasInitialized = Boolean(
    document.getElementById('jarallax-container-0')
  );

  if (!jarallaxHasInitialized) {
    initParallax();
  }
});
