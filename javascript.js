// Main sections & navbar

const mainElQuestions = document.querySelector('#main__questions')
const mainElBookmarks = document.querySelector('#main__bookmarks')
const mainElAddQuestion = document.querySelector('#main__create')
const mainElProfile = document.querySelector('#main__profile')

const buttonElHome = document.querySelector('#navbar__home')
const buttonElBookmarks = document.querySelector('#navbar__bookmarks')
const buttonElAddQuestion = document.querySelector('#navbar__add-question')
const buttonElProfile = document.querySelector('#navbar__profile')

function hideAll() {
  mainElQuestions.classList.add('main--hidden')
  mainElBookmarks.classList.add('main--hidden')
  mainElAddQuestion.classList.add('main--hidden')
  mainElProfile.classList.add('main--hidden')
}

function showButtonMainSection() {
  buttonElHome.classList.remove('item__link--position')
  buttonElBookmarks.classList.remove('item__link--position')
  buttonElAddQuestion.classList.remove('item__link--position')
  buttonElProfile.classList.remove('item__link--position')
}

window.addEventListener('load', () => {
  hideAll()
  mainElQuestions.classList.remove('main--hidden')
  buttonElHome.classList.add('item__link--position')
})

buttonElBookmarks.addEventListener('click', () => {
  hideAll()
  mainElBookmarks.classList.remove('main--hidden')

  showButtonMainSection()
  buttonElBookmarks.classList.add('item__link--position')
})

buttonElAddQuestion.addEventListener('click', () => {
  hideAll()
  mainElAddQuestion.classList.remove('main--hidden')

  showButtonMainSection()
  buttonElAddQuestion.classList.add('item__link--position')
})

buttonElProfile.addEventListener('click', () => {
  hideAll()
  mainElProfile.classList.remove('main--hidden')

  showButtonMainSection()
  buttonElProfile.classList.add('item__link--position')
})

buttonElHome.addEventListener('click', () => {
  hideAll()
  mainElQuestions.classList.remove('main--hidden')

  showButtonMainSection()
  buttonElHome.classList.add('item__link--position')
})

// Bookmarks

const toggleBookmarkOne = document.querySelector('#bookmark1')
const toggleBookmarkTwo = document.querySelector('#bookmark2')
const toggleBookmarkThree = document.querySelector('#bookmark3')
const toggleBookmarkFour = document.querySelector('#bookmark4')
const toggleBookmarkFive = document.querySelector('#bookmark5')

toggleBookmarkOne.addEventListener('click', () => {
  toggleBookmarkOne.classList.toggle('card-header__bookmarked')
})

toggleBookmarkTwo.addEventListener('click', () => {
  toggleBookmarkTwo.classList.toggle('card-header__bookmarked')
})

toggleBookmarkThree.addEventListener('click', () => {
  toggleBookmarkThree.classList.toggle('card-header__bookmarked')
})

toggleBookmarkFour.addEventListener('click', () => {
  toggleBookmarkFour.classList.toggle('card-header__bookmarked')
})

toggleBookmarkFive.addEventListener('click', () => {
  toggleBookmarkFive.classList.toggle('card-header__bookmarked')
})
