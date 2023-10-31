const btnMenu = document.querySelector('#btn_menu')
const menuMobile = document.querySelector('#menu_mobile')
const overlay = document.querySelector('.overlay_menu')

btnMenu.addEventListener('click', () => {
    menuMobile.classList.add('abrir_menu')
})

menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('abrir_menu')
})

overlay.addEventListener('click', () => {
    menuMobile.classList.remove('abrir_menu')
})