const btnToggle = document.querySelector(".header-hamberger")
const nav = document.querySelector(".menu")

btnToggle.addEventListener('click',function(e){
    nav.classList.toggle("open")
})
