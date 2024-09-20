let burger = document.querySelector(".burger")
burger.onclick = () => {
    let menu = document.querySelector(".header__menu__container")
    let btn = document.querySelector(".header__menu__btn")

    menu.classList.toggle("show")
    btn.classList.toggle("show")

    burger.classList.toggle("burger-close")

}

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

let choise = new URLSearchParams(document.location.search).get("choise")
if (choise) {
    if (select) {
        // Дитячий садок 1,5-7 років
        // Підготовка до школи  
        // Курс Мама+Малюк  
        // Англійська мова  
        // Логопед-дефектолог  
        // Творчі майстер-класи  
        // Цікава субота  
        let index = -1
        switch (choise) {
            case 'kindergarten':
                index = 0
                break;
            case 'prepare':
                index = 1
                break;
            case 'course':
                index = 2
                break;
            case 'english':
                index = 3
                break;
            case 'logoped':
                index = 4
                break;
            case 'art':
                index = 5
                break;
            case 'saturday':
                index = 6
                break;
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

let kindergartenQuestionsBtn = document.querySelectorAll(".main__kindergarten-questions-item_button")
if (kindergartenQuestionsBtn) {
    kindergartenQuestionsBtn.forEach(currentQuestionBtn => {
        currentQuestionBtn.onclick = () => {

            currentQuestionBtn.classList.toggle("main__kindergarten-questions-item_button-show")
            currentQuestionBtn.nextElementSibling.classList.toggle("main__kindergarten-questions-item_answer-show")

        }
    })
}