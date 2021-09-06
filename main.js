// Navigation through main sections

const mainElQuestions = document.querySelector('#main__questions')
const mainElBookmarks = document.querySelector('#main__bookmarks')
const mainElAddQuestion = document.querySelector('#main__create')
const mainElProfile = document.querySelector('#main__profile')

const buttonElHome = document.querySelector('#navbar__home')
const buttonElBookmarks = document.querySelector('#navbar__bookmarks')
const buttonElAddQuestion = document.querySelector('#navbar__add-question')
const buttonElProfile = document.querySelector('#navbar__profile')

const mainElArr = document.querySelectorAll('.main')
const navbarElArr = document.querySelectorAll('.navbar__item')

function hideAll() {
  mainElArr.forEach(mainEl => {
    mainEl.classList.add('main--hidden')
  })
}

function showButtonMainSection() {
  navbarElArr.forEach(navEl => {
    navEl.classList.remove('item__link--position')
  })
}

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

//Part 1: Five bookmarks const for main__questions & five bookmarks const for main__bookmarks

const toggleBookmark = document.querySelectorAll('.question-bookmark')

const toggleBookmarked = document.querySelectorAll('.question-bookmarked')

const saveBookmark = document.querySelectorAll('.card-bookmarked')

toggleBookmark.forEach((buttonEl, indexCard) => {
  buttonEl.addEventListener('click', () => {
    if (saveBookmark[indexCard].classList.contains('card--hidden')) {
      saveBookmark[indexCard].classList.remove('card--hidden')
    } else {
      saveBookmark[indexCard].classList.add('card--hidden')
    }
  })
})

toggleBookmark.forEach((bookmarkEl, index) => {
  bookmarkEl.addEventListener('click', () => {
    bookmarkEl.classList.toggle('card-header__bookmark')
    bookmarkEl.classList.toggle('card-header__bookmarked')
  })
})

toggleBookmarked.forEach((bookmarkEl, index) => {
  bookmarkEl.addEventListener('click', () => {
    saveBookmark[index].classList.toggle('card--hidden')
    toggleBookmark[index].classList.remove('card-header__bookmarked')
    toggleBookmark[index].classList.add('card-header__bookmark')
  })
})

// Card answers

const toggleAnswerButton = document.querySelectorAll('.answer-button')

const presentAnswer = document.querySelectorAll('.present-answer')

toggleAnswerButton.forEach((buttonEl, indexAnswer) => {
  buttonEl.addEventListener('click', () => {
    if (presentAnswer[indexAnswer].classList.contains('answer--hidden')) {
      presentAnswer[indexAnswer].classList.remove('answer--hidden')
      buttonEl.textContent = 'Hide Answer'
      buttonEl.classList.add('card-content__hide-answer')
      buttonEl.classList.remove('card-content__show-answer')
    } else {
      presentAnswer[indexAnswer].classList.add('answer--hidden')
      buttonEl.textContent = 'Show Answer'
      buttonEl.classList.remove('card-content__hide-answer')
      buttonEl.classList.add('card-content__show-answer')
    }
  })
})

// Question form

const resetFormElAfterSubmitButton = document.querySelector(
  '.add-question-form__submit-button'
)
const resetFormElButton = document.querySelector(
  '.add-question-form__reset-button'
)

resetFormElAfterSubmitButton.addEventListener('click', () => {
  document.getElementById('form').reset()
  result = window.confirm(
    'Your question has been successfully submitted and will be reviewed at some point in the future and once successfully reviewed will be included with the already existing questions. Thank you for your efforts! :-)'
  )
})

resetFormElButton.addEventListener('click', () => {
  document.getElementById('form').reset()
})

// Dark mode

const toggleDarkMode = document.querySelector('#dark-mode')
let imgCollection = document.querySelectorAll('.img-select')

toggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
  for (let i = 0; i < imgCollection.length; i += 1) {
    imgCollection.item(i).classList.toggle('dark-mode-img')
  }
})
