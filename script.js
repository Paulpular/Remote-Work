const hamburger1 = document.querySelector('.menu-list')
const hamburger2 = document.querySelector('.menu-X')
const mobile_menu1 = document.querySelector('.menu-1')
const div = document.querySelector('.third_decendant')

hamburger1.addEventListener('click', ()=>{
    hamburger1.classList.add('invisible')
    hamburger2.classList.add('visible')
    mobile_menu1.classList.toggle('switch')
    div.classList.toggle('switch')
})

hamburger2.addEventListener('click', ()=>{
    hamburger1.classList.remove('invisible')
    hamburger2.classList.remove('visible')
    mobile_menu1.classList.toggle('switch')
    div.classList.toggle('switch')
})