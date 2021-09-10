export function initNavigation() {
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
}
