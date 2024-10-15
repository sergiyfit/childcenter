let popup = document.querySelector(".popup")
let popupNav = document.querySelector(".popup_nav")
let popupPolitic= document.querySelector(".politic")
let popupBtn = document.querySelectorAll(".popupRegister")
let popupBackground = document.querySelector(".popup_background")
let popupClose= document.querySelector(".popup-dialog-close")
let imgContainer = document.querySelector(".popup-img-box")

popup.onclick = (e) => {e.cancelBubble=true}

popupBtn.forEach(popBtn => {
    popBtn.onclick = (event) => {
        event.preventDefault()
        if (document.querySelectorAll("form").length >=2 ){
            let contactForm = document.querySelector("form input")
            contactForm.focus();
            contactForm.scrollIntoView();

        } else {
            popupBackground.style.display = "flex"
            popupClose.nextElementSibling.style.display="block"
            popup.classList.remove(".milk-background")
            popupPolitic.style.display="none"
            popupNav.style.display = "none"

            if (window.innerWidth > 500){
                popup.style.width = "480px"

            } else {
                popup.style.width = "320px"
            }
        }

    }
})
popupClose.onclick = () => {
    popupBackground.style.display = "none"
    popupNav.style.display = "none"
    popup.querySelectorAll("img").forEach(e => e.remove())
    imgContainer.style.width = "auto"
    imgContainer.style.height = "auto"
    imgContainer.style.overflow = "visible"
    popup.querySelectorAll(".main__report_card").forEach(e => e.remove())
}
popupBackground.onclick = () => {popupClose.onclick()}


let foodmenu = document.querySelector("#foodmenu")
if (foodmenu){
    foodmenu.onclick = (e) => {
        e.preventDefault()
        e.cancelBubble = true
        popupPolitic.style.display="none"
        popupBackground.style.display = "flex"
        popupClose.nextElementSibling.style.display="none"
        // popup.classList.add("milk-background")
        let popupImg = document.createElement("img")
        imgContainer.insertAdjacentElement("afterbegin",popupImg)
        let currentImg = 1
        
        popupImg.style.display = "block"
        popup.style.width = "max-content"
        popup.style.height = "max-content"     
           
        if(window.innerWidth < window.innerHeight){
            popupImg.style.height = "auto"
            popupImg.style.width = "90vw"
        } else {
            popupImg.style.height = "90vh"
            popupImg.style.width = "auto"
        }

        
        popupNav.style.display = "flex"
        
        let popDots = popupNav.querySelectorAll(".global-dot")
        let arrLeft = document.querySelector(".arr-left")
        let arrRight = document.querySelector(".arr-right")
        
        popDots.forEach( (popDot,index) => {
            popDot.onclick = function(e) {
                e.cancelBubble = true
                popDots[index].classList.add("global-dot--active")
                popDots[currentImg-1].classList.remove("global-dot--active")
                currentImg = index + 1
                popupImg.src = "img/photo/menu/week-" + currentImg + "min.gif"
            }
        });
        
        arrRight.onclick = function(e) {
            e.cancelBubble = true
            popDots[currentImg-1].classList.remove("global-dot--active")
            currentImg = currentImg >=4 ? 1 : currentImg + 1 
            popupImg.src = "img/photo/menu/week-" + currentImg + ".png"
            popDots[currentImg-1].classList.add("global-dot--active")
        }

        arrLeft.onclick = function(e) {
            e.cancelBubble  = true
        popDots[currentImg-1].classList.remove("global-dot--active")
            currentImg = currentImg <=1 ? 4 : currentImg + -1 
            popupImg.src = "img/photo/menu/week-" + currentImg + ".png"
            popDots[currentImg-1].classList.add("global-dot--active")
        }
        // let dotCont = document.createElement("div")
        // dotCont.classList.add("global-nav")
        // dotCont.style.position = "absolute"
        // dotCont.style.top = "100%"
        // popup.appendChild(dotCont)
        
        
        popupImg.src = "img/photo/menu/week-" + currentImg + ".png"
        popupImg.onclick = function(){           
            // currentImg = currentImg >=4 ? 1 : currentImg + 1 
            // popupImg.src = "img/photo/menu/week-" + currentImg + ".png"
            
            popupImg.style.height = "auto"
            if (window.innerWidth < 720){
                popupImg.style.width = "300%"
                imgContainer.style.width = "100vw"
                imgContainer.style.height = "100vh"
                popup.style.overflow = "hidden"
                imgContainer.style.overflow = "scroll"
            } else{
                if (popupImg.getBoundingClientRect().width> popupImg.getBoundingClientRect().height){
                    popupImg.style.height = "100vh"
                    popupImg.style.width = "auto"                    
                } else {
                    popupImg.style.width = "100vw"
                    popupImg.style.height = "auto"
                }

                imgContainer.style.width = "100vw"
                imgContainer.style.height = "100vh"
                popup.style.overflow = "hidden"
                imgContainer.style.overflow = "scroll"
                
            } 
            
            popup.style.width = "max-content"
            popup.style.height = "max-content"
            

        }
        
    }
}

let politicBtn = document.querySelector("#politic")
politicBtn.onclick = function(e){
    e.preventDefault()
    if (window.innerWidth > 860){
        popup.style.width = "840px"

    } else {
        popup.style.width = "auto"

    }
    
    popupBackground.style.display = "flex"
    popupPolitic.style.display="block"
    popupNav.style.display = "none"
    popupClose.nextElementSibling.style.display="none"
}

let popupImgSlider = document.querySelector(".main__photo_img_container.slider")
if(popupImgSlider){

    popupImgSlider.onclick = (e) => {
        if (e.target){
            if(e.target.src){
                
                popupBackground.style.display = "flex"
                popupNav.style.display = "none"
                popupClose.nextElementSibling.style.display= "none"
                // popup.classList.add("milk-background")
                
                let popupImg = document.createElement("img")
                popup.appendChild(popupImg)
                let currentImg = 1
        
                popupImg.style.display = "block"
                popup.style.width = "max-content"
                popup.style.height = "max-content"
    
                
                
                if(window.innerWidth < window.innerHeight){
                    popupImg.style.width = "90vw"
                } else {
                    popupImg.style.height = "90vh"
                }
    
                popupImg.src = e.target.src
            }
        }
    }
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

            popupBackground.style.display = "flex"
            popupNav.style.display = "none"
            popupClose.nextElementSibling.style.display= "none"

            let popupReport = report.parentElement.cloneNode(true)
            if (innerWidth > 500) {
                popup.style.width = "480px"
            } else{
                popup.style.width = "90vw"
            }
            
            popup.appendChild(popupReport)
            popupReport.style.position = "static"  
            popupReport.style.textAlign = "justify"  
            popupReport.style.width = "auto"  
            popupReport.querySelector("span").style.display = "inline"  
            popupReport.querySelector("strong").style.display = "none"

        } 


    }
})