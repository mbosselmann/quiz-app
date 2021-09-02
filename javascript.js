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

const toggleBookmarkOne = document.querySelector('#bookmark1')
const toggleBookmarkTwo = document.querySelector('#bookmark2')
const toggleBookmarkThree = document.querySelector('#bookmark3')
const toggleBookmarkFour = document.querySelector('#bookmark4')
const toggleBookmarkFive = document.querySelector('#bookmark5')
const toggleBookmarkSix = document.querySelector('#bookmark6')
const toggleBookmarkSeven = document.querySelector('#bookmark7')
const toggleBookmarkEight = document.querySelector('#bookmark8')
const toggleBookmarkNine = document.querySelector('#bookmark9')
const toggleBookmarkTen = document.querySelector('#bookmark10')

// Part 2: Const for bookmarked bookmarks to appear in main__bookmarks

const saveBookmarkOne = document.querySelector('#card6')
const saveBookmarkTwo = document.querySelector('#card7')
const saveBookmarkThree = document.querySelector('#card8')
const saveBookmarkFour = document.querySelector('#card9')
const saveBookmarkFive = document.querySelector('#card10')

toggleBookmarkOne.addEventListener('click', () => {
  toggleBookmarkOne.classList.toggle('card-header__bookmarked')
  toggleBookmarkOne.classList.toggle('card-header__bookmark')
  if (toggleBookmarkOne.classList == 'card-header__bookmarked') {
    saveBookmarkOne.classList.remove('card--hidden')
  } else {
    saveBookmarkOne.classList.add('card--hidden')
  }
})

toggleBookmarkTwo.addEventListener('click', () => {
  toggleBookmarkTwo.classList.toggle('card-header__bookmarked')
  toggleBookmarkTwo.classList.toggle('card-header__bookmark')
  if (toggleBookmarkTwo.classList == 'card-header__bookmarked') {
    saveBookmarkTwo.classList.remove('card--hidden')
  } else {
    saveBookmarkTwo.classList.add('card--hidden')
  }
})

toggleBookmarkThree.addEventListener('click', () => {
  toggleBookmarkThree.classList.toggle('card-header__bookmarked')
  toggleBookmarkThree.classList.toggle('card-header__bookmark')
  if (toggleBookmarkThree.classList == 'card-header__bookmarked') {
    saveBookmarkThree.classList.remove('card--hidden')
  } else {
    saveBookmarkThree.classList.add('card--hidden')
  }
})

toggleBookmarkFour.addEventListener('click', () => {
  toggleBookmarkFour.classList.toggle('card-header__bookmarked')
  toggleBookmarkFour.classList.toggle('card-header__bookmark')
  if (toggleBookmarkFour.classList == 'card-header__bookmarked') {
    saveBookmarkFour.classList.remove('card--hidden')
  } else {
    saveBookmarkFour.classList.add('card--hidden')
  }
})

toggleBookmarkFive.addEventListener('click', () => {
  toggleBookmarkFive.classList.toggle('card-header__bookmarked')
  toggleBookmarkFive.classList.toggle('card-header__bookmark')
  if (toggleBookmarkFive.classList == 'card-header__bookmarked') {
    saveBookmarkFive.classList.remove('card--hidden')
  } else {
    saveBookmarkFive.classList.add('card--hidden')
  }
})

toggleBookmarkSix.addEventListener('click', () => {
  toggleBookmarkSix.classList.toggle('card-header__bookmarked')
  toggleBookmarkSix.classList.toggle('card-header__bookmark')
  if (toggleBookmarkSix.classList.contains('card-header__bookmark')) {
    saveBookmarkOne.classList.add('card--hidden')
    toggleBookmarkOne.classList.remove('card-header__bookmarked')
    toggleBookmarkOne.classList.add('card-header__bookmark')
    toggleBookmarkSix.classList.remove('card-header__bookmark')
    toggleBookmarkSix.classList.add('card-header__bookmarked')
  } else {
    saveBookmarkOne.classList.remove('card--hidden')
  }
})

toggleBookmarkSeven.addEventListener('click', () => {
  toggleBookmarkSeven.classList.toggle('card-header__bookmarked')
  toggleBookmarkSeven.classList.toggle('card-header__bookmark')
  if (toggleBookmarkSeven.classList == 'card-header__bookmark') {
    saveBookmarkTwo.classList.add('card--hidden')
    toggleBookmarkTwo.classList.remove('card-header__bookmarked')
    toggleBookmarkTwo.classList.add('card-header__bookmark')
    toggleBookmarkSeven.classList.remove('card-header__bookmark')
    toggleBookmarkSeven.classList.add('card-header__bookmarked')
  } else {
    saveBookmarkTwo.classList.remove('card--hidden')
  }
})

toggleBookmarkEight.addEventListener('click', () => {
  toggleBookmarkEight.classList.toggle('card-header__bookmarked')
  toggleBookmarkEight.classList.toggle('card-header__bookmark')
  if (toggleBookmarkEight.classList == 'card-header__bookmark') {
    saveBookmarkThree.classList.add('card--hidden')
    toggleBookmarkThree.classList.remove('card-header__bookmarked')
    toggleBookmarkThree.classList.add('card-header__bookmark')
    toggleBookmarkEight.classList.remove('card-header__bookmark')
    toggleBookmarkEight.classList.add('card-header__bookmarked')
  } else {
    saveBookmarkThree.classList.remove('card--hidden')
  }
})

toggleBookmarkNine.addEventListener('click', () => {
  toggleBookmarkNine.classList.toggle('card-header__bookmarked')
  toggleBookmarkNine.classList.toggle('card-header__bookmark')
  if (toggleBookmarkNine.classList == 'card-header__bookmark') {
    saveBookmarkFour.classList.add('card--hidden')
    toggleBookmarkFour.classList.remove('card-header__bookmarked')
    toggleBookmarkFour.classList.add('card-header__bookmark')
    toggleBookmarkNine.classList.remove('card-header__bookmark')
    toggleBookmarkNine.classList.add('card-header__bookmarked')
  } else {
    saveBookmarkFour.classList.remove('card--hidden')
  }
})

toggleBookmarkTen.addEventListener('click', () => {
  toggleBookmarkTen.classList.toggle('card-header__bookmarked')
  toggleBookmarkTen.classList.toggle('card-header__bookmark')
  if (toggleBookmarkTen.classList == 'card-header__bookmark') {
    saveBookmarkFive.classList.add('card--hidden')
    toggleBookmarkFive.classList.remove('card-header__bookmarked')
    toggleBookmarkFive.classList.add('card-header__bookmark')
    toggleBookmarkTen.classList.remove('card-header__bookmark')
    toggleBookmarkTen.classList.add('card-header__bookmarked')
  } else {
    saveBookmarkFive.classList.remove('card--hidden')
  }
})

// Card answers

const toggleAnswerButtonArnolfini = document.querySelector(
  '#answer-button-arnolfini'
)
const toggleAnswerButtonGogh = document.querySelector('#answer-button-gogh')
const toggleAnswerButtonGoya = document.querySelector('#answer-button-goya')
const toggleAnswerButtonFriedrich = document.querySelector(
  '#answer-button-friedrich'
)
const toggleAnswerButtonGainsborough = document.querySelector(
  '#answer-button-gainsborough'
)

const presentAnswerArnolfini = document.querySelector('#answer-arnolfini')
const presentAnswerGogh = document.querySelector('#answer-gogh')
const presentAnswerGoya = document.querySelector('#answer-goya')
const presentAnswerFriedrich = document.querySelector('#answer-friedrich')
const presentAnswerGainsborough = document.querySelector('#answer-gainsborough')

toggleAnswerButtonArnolfini.addEventListener('click', () => {
  presentAnswerArnolfini.classList.toggle('answer--hidden')
  presentAnswerArnolfini.classList.toggle('answer')
  if (!presentAnswerArnolfini.classList.contains('answer--hidden')) {
    toggleAnswerButtonArnolfini.textContent = 'Hide Answer'
    toggleAnswerButtonArnolfini.classList.add('card-content__hide-answer')
  } else {
    toggleAnswerButtonArnolfini.textContent = 'Show Answer'
  }
})
