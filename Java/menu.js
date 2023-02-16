let mobile_menu = document.querySelector('.mobile_menu')
let menu = document.querySelector('.menu')

mobile_menu.addEventListener('click', () => {
    menu.classList.toggle('active')
    mobile_menu.classList.toggle('active')
})
