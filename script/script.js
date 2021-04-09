const MENU__BTN = document.querySelector('.menu-btn')
const NAV__RIGHT__THING = document.querySelector('nav .nav-right-thing')

MENU__BTN.addEventListener('click', () => {
  if (NAV__RIGHT__THING.style.display === 'block') {
    NAV__RIGHT__THING.style.display = 'none'
    MENU__BTN.style.padding = '10px 8px'
  } else {
    NAV__RIGHT__THING.style.display = 'block'
    MENU__BTN.style.padding = '0'
  }
})
