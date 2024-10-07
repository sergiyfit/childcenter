let popup = document.querySelector(".popup")
let popupNav = document.querySelector(".popup_nav")
let popupPolitic= document.querySelector(".politic")
let popupBtn = document.querySelectorAll(".popupRegister")
let popupBackground = document.querySelector(".popup_background")
let popupClose= document.querySelector(".popup-dialog-close")
let imgContainer = document.querySelector(".popup-img-box")


popupBtn.forEach(popBtn => {
    popBtn.onclick = (event) => {
        event.preventDefault()
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
})

popupClose.onclick = () => {
    popupBackground.style.display = "none"
    popupNav.style.display = "none"
    popup.querySelector("img").remove()
    imgContainer.style.width = "auto"
    imgContainer.style.height = "auto"
}


let foodmenu = document.querySelector("#foodmenu")
if (foodmenu){
    foodmenu.onclick = (e) => {
        e.preventDefault()
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
            popupImg.style.width = "90vw"
        } else {
            popupImg.style.height = "90vh"
        }

        
        popupNav.style.display = "flex"
        
        let popDots = popupNav.querySelectorAll(".global-dot")
        let arrLeft = document.querySelector(".arr-left")
        let arrRight = document.querySelector(".arr-right")
        
        popDots.forEach( (popDot,index) => {
            popDot.onclick = function() {
                popDots[index].classList.add("global-dot--active")
                popDots[currentImg-1].classList.remove("global-dot--active")
                currentImg = index + 1
                popupImg.src = "img/photo/menu/week-" + currentImg + ".png"
            }
        });
        
        arrRight.onclick = function() {
            popDots[currentImg-1].classList.remove("global-dot--active")
            currentImg = currentImg >=4 ? 1 : currentImg + 1 
            popupImg.src = "img/photo/menu/week-" + currentImg + ".png"
            popDots[currentImg-1].classList.add("global-dot--active")
        }

        arrLeft.onclick = function() {
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
                    popupImg.style.width = "100vw"
                } else {
                    popupImg.style.height = "100vh"                    
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