import { initNavigation } from './js/navigation.js'
import { renderAllCards, questionsObj } from './js/cards.js'
import { addQuestion, createForm } from './js/create.js'

renderAllCards()

initNavigation()

createForm()

// dark mode
const toggleDarkMode = document.querySelector('#dark-mode')
let imgCollection = document.querySelectorAll('.img-select')

toggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
  for (let i = 0; i < imgCollection.length; i += 1) {
    imgCollection.item(i).classList.toggle('dark-mode-img')
  }
})
