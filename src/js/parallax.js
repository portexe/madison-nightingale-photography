import { jarallax } from 'jarallax';

const scrollOpacity = 'scroll-opacity';
const scaleOpacity = 'scale-opacity';

export function initParallax() {
  jarallax(document.querySelectorAll('.main-section'), {
    speed: 0.2,
    type: scrollOpacity,
  });

  jarallax(document.querySelectorAll('.left-section'), {
    speed: 0.2,
    type: scaleOpacity,
  });

  jarallax(document.querySelectorAll('.right-section'), {
    speed: 0.2,
    type: scaleOpacity,
  });
}
