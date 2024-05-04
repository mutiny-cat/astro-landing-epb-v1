const scrollBtn = document.querySelector('.header-top')

const refreshBtn = () => {
  if (document.documentElement.scrollTop >= 150) {
    scrollBtn.classList.add('active')
  } else {
    scrollBtn.classList.remove('active')
  }
}
refreshBtn()

scrollBtn.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

document.addEventListener("scroll", (e) => {
  refreshBtn()
})
