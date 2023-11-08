const navElement = document.querySelector('.nav')
const hambergerElement = document.querySelector('.hamburger')


hambergerElement.addEventListener('click', ()=>{
    navElement.classList.toggle('nav-open')
    hambergerElement.classList.toggle('hamburger-open')
})


navElement.addEventListener('click', ()=>{
    navElement.classList.remove('nav-open')
    hambergerElement.remove('hamburger-open')
    
})
