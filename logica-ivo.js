const colorPicker = document.querySelector('#color-picker')
const fontSelect= document.querySelector('font-select')
const themeToggle= document.querySelector('theme-toggle')
const articleColorPiker= document.querySelector('article-color-picker')
const body= document.querySelector('body')
const newsArticles=document.querySelectorAll('.news')


const loadPreferences=()=> {
    const savedColor=localStorage.getItem('primaryColor')
    if(savedColor){
        document.documentElement.style.setProperty('--primary-color', savedColor)
        colorPicker.value=savedColor;

    }

    const savedArticleColor=localStorage.getItem('articleColor');
    if (savedArticleColor){
        newsArticles.forEach(article => {
            article.style.backgroundColor=savedArticleColor;
        });
    }

    const savedFont = localStorage.getItem('fontFamily')
    if (savedFont){
        document.documentElement.style.setProperty('--font-family', savedFont);
        fontSelect.value=savedColor
    }

    const savedTheme=localStorage.getItem('theme')
    if (saved==='dark'){
        body.classList.add('dark')
        themeToggle.innerHTML='<span class= "material-icons">light_mode</span>'
    }

}

colorPicker.addEventListener('input', (e)=>{
    const color= e.target.value;
    document.documentElement.style.setProperty('--primary-color',color)
    localStorage.setItem('primaryColor', color);

})
articleColorPiker.addEventListener('input', (e)=>{
    const color = e.target.value;
    newsArticles.forEach(article=>{
        article.style.backgroundColor=color
    })
    localStorage.setItem('articleColor', color)
})

fontSelect.addEventListener('change', (e)=>{
    const font = e.target.value;
    document.documentElement.style.setProperty('--font-family', font)
    localStorage.setItem('fontFamily', font);
})

themeToggle.addEventListener('click', ()=> {
    body.classList.toggle('dark')
    const isDark = body.classList.contains('dark');
    themeToggle.innerHTML = isDark
        ? '<span class="material-icons">light_mode</span>'
        :'<span class="material-icons">dark_mode</span>'
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
})

loadPreferences();