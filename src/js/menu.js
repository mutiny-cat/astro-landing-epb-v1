const button = document.querySelector('.header-button')
const nav = document.querySelector('.header-nav')
const open = document.querySelector('.header-open')
const close = document.querySelector('.header-close')
const logo = document.querySelector('.header-logo')
const menuItem = document.querySelectorAll('.header-a')
const gotoTop = document.querySelector('.header-top')

//Obrir i tancar menú
button.addEventListener('click', () => {
  overflow()
  activar()
})

//Si cliquem el logo tanquem el menú i anem al principi de la pàgina
logo.addEventListener('click', () => {
  if (nav.classList.contains('active')) {
    overflow()
    restaurar()
  }
})

//Si cliquem una opció tanquem el menú i anem a la secció triada
menuItem.forEach(item => {
  item.addEventListener('click', () => {
    overflow()
    restaurar()
  })
})

//Funció per controlar si tenim l'scroll activat
function overflow() {

  let width = window.innerWidth

  if (width < 1280) {
    if (document.body.classList.contains('hidden')) {
      document.body.classList.remove('hidden')
    }
    else {
      document.body.classList.add('hidden')
    }
  }
  else {
    document.body.classList.remove('hidden')
  }
}

//Funció per activar/desactivar el 'nav' i les icones d'obrir i tancar
function activar() {
  activarBotoGotoTop()
  nav.classList.toggle('active')
  open.classList.toggle('active')
  close.classList.toggle('active')
}

//Funció per restaurar el 'nav' i les icones d'obrir i tancar
function restaurar() {
  nav.classList.remove('active')
  open.classList.add('active')
  close.classList.remove('active')
}

//Funció per activar/desactivar el botó 'gotoTop'
function activarBotoGotoTop() {
  open.addEventListener('click', () => {
    if (open.classList.contains('active') && gotoTop.classList.contains('active')) {
      gotoTop.classList.remove('active')
    }
  })
}