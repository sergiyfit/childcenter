let burger = document.querySelector(".burger")
burger.onclick = () => {
    let menu = document.querySelector(".header__menu__container")
    let btn = document.querySelector(".header__menu__btn")
    menu.classList.toggle("show")
    btn.classList.toggle("show")
    burger.classList.toggle("burger-close")

}