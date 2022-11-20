import { jarallax } from 'jarallax'

document.addEventListener('DOMContentLoaded', () => {
  initParallax()
  initLinkClicks()
  initHamburger()
})

function initParallax() {
  jarallax(document.querySelectorAll('.main-section'), {
    speed: 0.2,
    type: 'scroll-opacity',
  })
  jarallax(document.querySelectorAll('.left-section'), {
    speed: 0.2,
    type: 'scale-opacity',
  })
  jarallax(document.querySelectorAll('.right-section'), {
    speed: 0.2,
    type: 'scale-opacity',
  })
}

function initLinkClicks() {
  const linkClickMap = {
    wedding: 'wedding-section',
    modeling: 'model-section',
    maternity: 'maternity-section',
    couples: 'couples-section',
    about: 'about-me',
  }

  const arrayOfLinks = Array.from(document.querySelectorAll('#links div'))

  arrayOfLinks.forEach((link) =>
    link.addEventListener('click', (evt) => {
      const linkClicked = evt.target.innerText.toLowerCase()
      const section = document.getElementById(linkClickMap[linkClicked])

      if (window.innerWidth <= 750) {
        closeHamburger()
      }

      section.scrollIntoView({ behavior: 'smooth' })
    })
  )
}

function initHamburger() {
  const hammy = document.getElementById('hamburger')

  hammy.addEventListener('click', () => {
    if (hammy.classList.contains('is-active')) {
      closeHamburger()
    } else {
      openHamburger()
    }
  })
}

function closeHamburger() {
  const hammy = document.getElementById('hamburger')
  const navigator = document.getElementById('navigation')

  hammy.classList.remove('is-active')
  navigator.style.display = 'none'
}

function openHamburger() {
  const hammy = document.getElementById('hamburger')
  const navigator = document.getElementById('navigation')

  hammy.classList.add('is-active')
  navigator.style.display = 'block'
}
