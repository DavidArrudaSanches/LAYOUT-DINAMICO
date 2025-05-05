
const body= document.querySelector('body')
const selectorFont = document.querySelector('#font-select')
const articleColorPiker=document.querySelector('#article-color-piker')
const themeToggle= document.querySelector('#themeToggle')

const newsArticles=document.querySelectorAll('.news')


document.addEventListener('input', (event)=>{
    const currentColor= localStorage.getItem('#article-color-piker')  
    localStorage.setItem('#article-color-piker', articleColorPiker.value)

})
