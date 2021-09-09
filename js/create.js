import { questionsObj, renderAllCards } from './cards.js'

export function addQuestion() {
  const newQuestion = {
    question: 'To which famous masterpiece does this detail belong?',
    imgDetail: '/images/andrewsdetail.png',
    imgFull: '/images/andrews.png',
    answer:
      "The hand belongs to a portrait of Mrs Andrews in <strong>'Mr and Mrs Andrews'</strong> by <strong>Thomas Gainsborough</strong>. It's located in the <strong>National Gallery in London</strong> and was painted <strong>around 1750</strong>.",
    isBookmarked: false,
    showAnswer: false,
    tags: ['19th century', 'painting', 'England'],
  }

  questionsObj.push(newQuestion)
  renderAllCards()
  console.table(questionsObj)
  console.log(questionsObj)
}

export function createForm() {
  const resetFormElAfterSubmitButton = document.querySelector(
    '.add-question-form__submit-button'
  )
  const resetFormElButton = document.querySelector(
    '.add-question-form__reset-button'
  )

  resetFormElAfterSubmitButton.addEventListener('click', () => {
    document.getElementById('form').reset()
    addQuestion()
  })

  resetFormElButton.addEventListener('click', () => {
    document.getElementById('form').reset()
  })
}
