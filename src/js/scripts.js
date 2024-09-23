/*------------------------------------------------*/
/*------------------Burger menu-------------------*/
/*--------Адаптивне меню при малих екранах--------*/
/*------------------------------------------------*/

let burger = document.querySelector(".burger")
burger.onclick = () => {
    let menu = document.querySelector(".header__menu__container")
    let btn = document.querySelector(".header__menu__btn")

    menu.classList.toggle("show")
    btn.classList.toggle("show")
    burger.classList.toggle("burger-close")

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
                index = 0
                break;
                // Підготовка до школи  
            case 'prepare':
                index = 1
                break;
                // Курс Мама+Малюк  
            case 'course':
                index = 2
                break;
            // Англійська мова  
            case 'english':
                index = 3
                break;
            // Логопед-дефектолог  
            case 'logoped':
                index = 4
                break;
            // Творчі майстер-класи  
            case 'art':
                index = 5
                break;
            // Цікава субота  
            case 'saturday':
                index = 6
                break;
            // Цікава субота 
            case 'genius':
                index = 7
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
/*---Показати иа сховати відповіді на питання---*/
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

window.onwheel = (event) =>{
    let menu = document.querySelector(".header__menu__moving-part")
    if(event.deltaY > 0) {
        menu.style.top = "-130px"
    } else {
        menu.style.top = "0px"
        
    }
    console.log("scroling window")
}


const photoSlider = new InfinitySlider(".slider", {
    isArrows: true,
    isSlidesToScrollAll: true,
    baseCardWidth: "263rem",
    gap: 20,
    isAutoplay: true,
    autoplaySpeed: 5000,
    transitionCard: "all 1.5s ease-in-out",
});

photoSlider.init();

window.onresize = function () {
    photoSlider.init();
};