let burger = document.querySelector(".burger")
burger.onclick = () => {
    let menu = document.querySelector(".header__menu__container")
    let btn = document.querySelector(".header__menu__btn")

    menu.classList.toggle("show")
    btn.classList.toggle("show")
    
    burger.classList.toggle("burger-close")

}

let select = document.querySelector(".select")
select.onclick = (event) => {
    event.preventDefault()
    event.cancelBubble = true
    customSelect.style.display = "block"
    select.style.display = "none"
} 

document.body.onclick = () =>{
    select.style.display = "block"
    customSelect.style.display = "none"
}

let customSelect = document.querySelector(".custom-select")
for(let i=0; i < select.options.length;i++ ){
    let subItem = document.createElement("div")
    subItem.classList.add("custom-select-item")
    subItem.innerText = select.options[i].value
    customSelect.appendChild(subItem)
    subItem.onclick = function(event){
        event.cancelBubble = true
        select.selectedIndex=i
        let oldElem = document.querySelector(".custom-select-item__selected")
        if(oldElem) oldElem.classList.remove("custom-select-item__selected")
        subItem.classList.add("custom-select-item__selected")
        setTimeout(()=>{
            select.style.display = "block"
            customSelect.style.display = "none"
        },200)
    }
}