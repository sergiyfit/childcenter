/*------------------------------------------------*/
/*------------------Burger menu-------------------*/
/*--------Адаптивне меню при малих екранах--------*/
/*------------------------------------------------*/

let burger = document.querySelector(".burger")
let menu = document.querySelector(".header__menu__container")
let btn = document.querySelector(".header__menu__btn")
burger.onclick = () => {

    menu.classList.toggle("show")
    burger.classList.toggle("burger-close")

}

menu.onclick = ( e ) => {
    if(e.target.firstElementChild.className != "header__menu__subitem__elements"){
        menu.classList.remove("show")
        burger.classList.remove("burger-close")

    }
}

/*------------------------------------------------*/
/*------------Custom select in contacts-----------*/
/*-----Випадаючий список замість стандартного-----*/
/*------------------------------------------------*/

let select = document.querySelector(".select")

if (select) {
    select.onclick = (event) => {
        event.preventDefault()
        event.cancelBubble = true
        customSelect.style.display = "block"
        select.style.display = "none"
    }

    document.body.onclick = () => {
        select.style.display = "block"
        customSelect.style.display = "none"
    }

    let customSelect = document.querySelector(".custom-select")

    for (let i = 0; i < select.options.length; i++) {
        let subItem = document.createElement("div")
        subItem.classList.add("custom-select-item")
        subItem.innerText = select.options[i].value
        customSelect.appendChild(subItem)
        subItem.onclick = function (event) {
            event.cancelBubble = true
            select.selectedIndex = i
            let oldElem = document.querySelector(".custom-select-item__selected")
            if (oldElem) oldElem.classList.remove("custom-select-item__selected")
            subItem.classList.add("custom-select-item__selected")
            setTimeout(() => {
                select.style.display = "block"
                customSelect.style.display = "none"
            }, 200)
        }
    }
}

/*----------------------------------------------*/
/*----------------------------------------------*/
/*-------------Валідація інпутів----------------*/
/*----------------------------------------------*/
/*----------------------------------------------*/
const formname = document.querySelectorAll("#username")
formname.forEach( textInput => {
    textInput.onkeyup = function()
    {this.value = this.value.replace(/[\d]/g,'')}
})
const formphone = document.querySelectorAll("#usernum")
formphone.forEach( phoneInput => {
    phoneInput.onkeyup = function()
    {   
        this.value = this.value.slice(0,1) + this.value.slice(1).replace(/[\D]/g,'')
    }
})

/*----------------------------------------------*/
/*-----------AUTOMATIC CHOISE SELECT -----------*/
/*--При кліку на записатись, в вкладці контакти-*/ 
/*---------в селект передає назву курсу---------*/
/*----------------------------------------------*/

let choise = new URLSearchParams(document.location.search).get("choise")
if (choise) {
    if (select) {
        let index = -1
        switch (choise) {
            // Дитячий садок 1,5-7 років
            case 'kindergarten':
                index = 1
                break;
                // Підготовка до школи  
            case 'prepare':
                index = 2
                break;
                // Курс Мама+Малюк  
            case 'course':
                index = 3
                break;
            // Англійська мова  
            case 'english':
                index = 4
                break;
            // Логопед-дефектолог  
            case 'logoped':
                index = 5
                break;
            // Творчі майстер-класи  
            case 'art':
                index = 6
                break;
            // Цікава субота  
            case 'saturday':
                index = 7
                break;
            // Цікава субота 
            case 'genius':
                index = 8
                break;
        }

        if (index >= 0) {
            let items = document.querySelectorAll(".custom-select-item")
            select.selectedIndex = index
            items[index].classList.add("custom-select-item__selected")
        }
    }
}

/*----------------------------------------------*/
/*-----------SHOW AND HIDE QUESTUIONS-----------*/
/*---Показати та сховати відповіді на питання---*/
/*----------------------------------------------*/
let kindergartenQuestionsBtn = document.querySelectorAll(".main__kindergarten-questions-item_button")
if (kindergartenQuestionsBtn) {
    kindergartenQuestionsBtn.forEach(currentQuestionBtn => {
        currentQuestionBtn.onclick = () => {
            currentQuestionBtn.classList.toggle("main__kindergarten-questions-item_button-show")
            currentQuestionBtn.nextElementSibling.classList.toggle("main__kindergarten-questions-item_answer-show")

        }
    })
}

/*----------------------------------*/
/*------------scrolling-------------*/
/*---------------menu---------------*/
/*----------------------------------*/
let lastScroll = 0

window.onscroll = (event) =>{
    let menuBox = document.querySelector(".header__menu__moving-part")
    if(window.scrollY > 130 && lastScroll < window.scrollY) {
        menuBox.style.top = "-780px"
        
        setTimeout( function(){
            menuBox.style.top = "-130px"
            menu.classList.remove("show")
            burger.classList.remove("burger-close")
        }, 500 )


    } else {
        menuBox.style.top = "0px"        
    }
    lastScroll = window.scrollY
}

/**************************************/
/*------------------------------------*/
/*------------REED MORE---------------*/
/*------------------------------------*/
/**************************************/

let reports = document.querySelectorAll(".main__report_card_text")
reports.forEach( report => {
    const numSymbol = 388
    const text = report.innerText
    if (text.length > numSymbol){
        const limitSymbol = text.slice(0, numSymbol).lastIndexOf(" ")
        const firstPart = text.slice(0, limitSymbol+1)
        const secondPart = text.slice(limitSymbol+1)
        report.innerText = firstPart
        let reedMore = document.createElement("strong")
        reedMore.innerText = " більше.."
        report.appendChild(reedMore)

        let textMore = document.createElement("span")
        textMore.innerText = secondPart
        textMore.style.display = "none"
        report.appendChild(textMore)
        
        reedMore.onclick = function(){
            reedMore.style.display = "none"
            textMore.style.display = "inline"            
        } 


    }
})