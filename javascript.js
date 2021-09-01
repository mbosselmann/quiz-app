// Main-Sections mit Navbar einblenden

let mainElQuestions = document.querySelector('#main__questions')
let mainElBookmarks = document.querySelector('#main__bookmarks')
let mainElAddQuestion = document.querySelector('#main__create')
let mainElProfile = document.querySelector('#main__profile')

let buttonElHome = document.querySelector('#navbar__home')
let buttonElBookmarks = document.querySelector('#navbar__bookmarks')
let buttonElAddQuestion = document.querySelector('#navbar__add-question')
let buttonElProfile = document.querySelector('#navbar__profile')

window.addEventListener('load', () => {
  mainElQuestions.classList.remove('main--hidden')
})

buttonElBookmarks.addEventListener('click', () => {
  mainElBookmarks.classList.remove('main--hidden')
  mainElQuestions.classList.add('main--hidden')
  mainElAddQuestion.classList.add('main--hidden')
  mainElProfile.classList.add('main--hidden')
})

buttonElAddQuestion.addEventListener('click', () => {
  mainElBookmarks.classList.add('main--hidden')
  mainElQuestions.classList.add('main--hidden')
  mainElAddQuestion.classList.remove('main--hidden')
  mainElProfile.classList.add('main--hidden')
})

buttonElProfile.addEventListener('click', () => {
  mainElBookmarks.classList.add('main--hidden')
  mainElQuestions.classList.add('main--hidden')
  mainElAddQuestion.classList.add('main--hidden')
  mainElProfile.classList.remove('main--hidden')
})

buttonElHome.addEventListener('click', () => {
  mainElBookmarks.classList.add('main--hidden')
  mainElQuestions.classList.remove('main--hidden')
  mainElAddQuestion.classList.add('main--hidden')
  mainElProfile.classList.add('main--hidden')
})
