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

// Data

const questionsObj = [
  {
    question: 'To which famous masterpiece does this detail belong?',
    imgDetail: '/images/arnolfinidetail.png',
    imgFull: '/images/arnolfini.png',
    answer:
      "The image detail shown above is a portion of the painting <strong>'The Arnolfini Wedding'</strong> by <strong>Jan van Eyck</strong> from <strong>1434</strong>. The artwork is located in the <strong>National Gallery in London</strong>.",
    isBookmarked: false,
    showAnswer: false,
    tags: ['15th century', 'painting', 'Netherlands'],
  },
  {
    question: 'To which famous masterpiece does this detail belong?',
    imgDetail: '/images/starrynightdetail.png',
    imgFull: '/images/starrynight.png',
    answer:
      "The moon can be seen in the oil painting <strong>'The Starry Night'</strong> by <strong>Vincent van Gogh</strong>. Van Gogh painted the picture in <strong>June 1889</strong> and it can be seen today in the <strong>Museum of Modern Art in New York</strong>.",
    isBookmarked: false,
    showAnswer: false,
    tags: ['19th century', 'painting', 'France'],
  },
  {
    question: 'To which famous masterpiece does this detail belong?',
    imgDetail: '/images/goyadetail.png',
    imgFull: '/images/goya.png',
    answer:
      "<strong>Francisco Goya</strong> painted <strong>'The Third of May'</strong> in the year <strong>1814</strong>. It's also known as 'El tres mayo de 1808en Madrid' and is located in the <strong>Museo del Prado in Madrid</strong>.",
    isBookmarked: false,
    showAnswer: false,
    tags: ['19th century', 'painting', 'Spain'],
  },
  {
    question: 'To which famous masterpiece does this detail belong?',
    imgDetail: '/images/wandererdetail.png',
    imgFull: '/images/wanderer.png',
    answer:
      "The <strong>'Wanderer above the Sea of Fog'</strong> was painted by <strong>Caspar David Friedrich</strong>. It' estimated that it was created <strong>around 1808</strong>. Today it is on display in the <strong>Kunsthalle Hamburg</strong>.",
    isBookmarked: false,
    showAnswer: false,
    tags: ['19th century', 'painting', 'Germany'],
  },
  {
    question: 'To which famous masterpiece does this detail belong?',
    imgDetail: '/images/andrewsdetail.png',
    imgFull: '/images/andrews.png',
    answer:
      "The hand belongs to a portrait of Mrs Andrews in <strong>'Mr and Mrs Andrews'</strong> by <strong>Thomas Gainsborough</strong>. It's located in the <strong>National Gallery in London</strong> and was painted <strong>around 1750</strong>.",
    isBookmarked: false,
    showAnswer: false,
    tags: ['19th century', 'painting', 'England'],
  },
]

// Question cards

function renderCard(questionsObj) {
  const cardSection = document.createElement('section')
  cardSection.classList.add('card')
  document.getElementById('main__questions').appendChild(cardSection)

  const cardHeader = document.createElement('div')
  cardHeader.classList.add('card-header')
  cardSection.appendChild(cardHeader)

  const cardTitle = document.createElement('h2')
  cardTitle.classList.add('card-header__title')
  cardTitle.textContent = 'Questions:'
  cardHeader.appendChild(cardTitle)

  const cardBookmark = document.createElement('button')
  cardBookmark.classList.add('question-bookmark')
  cardBookmark.classList.add('card-header__bookmark')
  cardBookmark.setAttribute('aria-label', 'Bookmark')
  cardHeader.appendChild(cardBookmark)

  const cardContent = document.createElement('div')
  cardContent.classList.add('card-content')
  cardSection.appendChild(cardContent)

  const cardContentQuestion = document.createElement('p')
  cardContentQuestion.classList.add('card-content__question')
  cardContentQuestion.textContent = questionsObj.question
  cardContent.appendChild(cardContentQuestion)

  const questionImage = document.createElement('img')
  questionImage.classList.add('card-content__img')
  questionImage.classList.add('img-select')
  questionImage.setAttribute('aria-label', 'Detail of masterpiece for question')
  questionImage.setAttribute('src', questionsObj.imgDetail)
  cardContent.appendChild(questionImage)

  const cardButtonElAnswer = document.createElement('button')
  cardButtonElAnswer.classList.add('card-content__show-answer')
  cardButtonElAnswer.classList.add('answer-button')
  cardButtonElAnswer.textContent = 'Show answer'
  cardContent.appendChild(cardButtonElAnswer)

  const cardContentAnswer = document.createElement('div')
  cardContentAnswer.classList.add('answer')
  cardContentAnswer.classList.add('answer--hidden')
  cardContentAnswer.classList.add('present-answer')
  cardContent.appendChild(cardContentAnswer)

  const answerHeader = document.createElement('div')
  answerHeader.classList.add('answer-header')
  cardContentAnswer.appendChild(answerHeader)

  const answerTitle = document.createElement('h3')
  answerTitle.classList.add('answer__title')
  answerTitle.textContent = 'Answer:'
  answerHeader.appendChild(answerTitle)

  const answerContent = document.createElement('div')
  answerContent.classList.add('answer__content')
  cardContentAnswer.appendChild(answerContent)

  const answerImage = document.createElement('img')
  answerImage.classList.add('content__img')
  answerImage.classList.add('img-select')
  answerImage.setAttribute('aria-label', 'Full view of masterpiece')
  answerImage.setAttribute('src', questionsObj.imgFull)
  answerContent.appendChild(answerImage)

  const answerText = document.createElement('p')
  answerText.classList.add('content__text')
  answerText.innerHTML = questionsObj.answer
  answerContent.appendChild(answerText)

  const tagsList = document.createElement('ul')
  tagsList.classList.add('tags')
  cardSection.appendChild(tagsList)

  questionsObj.tags.forEach(tag => {
    const tagsItem = document.createElement('li')
    tagsItem.classList.add('tags__item')
    tagsItem.textContent = tag
    tagsList.appendChild(tagsItem)
  })
}

questionsObj.forEach(object => {
  renderCards(object, 'main__questions')
})
cardBookmarked.forEach((object, index) => {
  renderCards(object, 'main__bookmarks')
})

const toggleBookmark = document.querySelectorAll('.question-bookmark')


toggleBookmark.forEach((bookmarkEl, index) => {
  bookmarkEl.addEventListener('click', () => {
    bookmarkEl.classList.toggle('card-header__bookmark')
    bookmarkEl.classList.toggle('card-header__bookmarked')
  })
})

// cardBookmarked.forEach((object, index) => {
//   renderCards(object, 'main__bookmarks')
// })

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
