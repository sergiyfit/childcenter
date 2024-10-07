let popup = document.querySelector(".popup")
let popupBtn = document.querySelectorAll(".popupRegister")
let popupBackground = document.querySelector(".popup_background")
let popupClose= document.querySelector(".popup-dialog-close")


popupBtn.forEach(popBtn => {
    popBtn.onclick = (event) => {
        event.preventDefault()
        popupBackground.style.display = "flex"
        popupClose.nextElementSibling.style.display="block"
        popup.classList.remove(".milk-background")
        if (window.innerWidth > 500){
            popup.style.width = "480px"
            popup.style.height = "480px"
        } else {
            popup.style.width = "320px"
            popup.style.height = "320px"

        }
    }
})

popupClose.onclick = () => {
    popupBackground.style.display = "none"
    popup.querySelector("img").remove()
}


let foodmenu = document.querySelector("#foodmenu")
if (foodmenu){
    foodmenu.onclick = (e) => {
        e.preventDefault()
        popupBackground.style.display = "flex"
        popupClose.nextElementSibling.style.display="none"
        // popup.classList.add("milk-background")
        let popupImg = document.createElement("img")
        popup.appendChild(popupImg)
        let currentImg = 1

        popupImg.style.display = "block"
        popup.style.width = "max-content"
        popup.style.height = "max-content"
        

            popupImg.style.height = "90vh"
        

        popupImg.src = "img/photo/menu/week-" + currentImg + ".png"
        popupImg.onclick = function(){
            console.log('====================================');
            console.log(currentImg);
            console.log('====================================');
            currentImg = currentImg >=4 ? 1 : currentImg + 1 
            popupImg.src = "img/photo/menu/week-" + currentImg + ".png"
        }
    }
}

let popupImgSlider = document.querySelector(".main__photo_img_container.slider")
popupImgSlider.onclick = (e) => {
    if (e.target){
        if(e.target.src){
            popupBackground.style.display = "flex"
            popupClose.nextElementSibling.style.display="none"
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