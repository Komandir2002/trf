const  menu = document.querySelector(".menu")
const links = document.querySelectorAll('.nav__link')
const body_b = document.querySelector(".intro")
const removeClass =()=>{
    links.forEach((item)=>{
        item.classList.remove("hide")
    })
    menu.classList.add('hide')
}
menu.addEventListener('click',removeClass)
const addClass =()=>{
    links.forEach((item)=>{
        item.classList.add("hide")
    })
     menu.classList.remove('hide')
}
body_b.addEventListener("mouseover",addClass)

