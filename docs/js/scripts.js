let burger=document.querySelector(".burger");burger.onclick=()=>{let e=document.querySelector(".header__menu__container"),t=document.querySelector(".header__menu__btn");e.classList.toggle("show"),t.classList.toggle("show"),burger.classList.toggle("burger-close")};let select=document.querySelector(".select");if(select){select.onclick=t=>{t.preventDefault(),t.cancelBubble=!0,e.style.display="block",select.style.display="none"},document.body.onclick=()=>{select.style.display="block",e.style.display="none"};let e=document.querySelector(".custom-select");for(let t=0;t<select.options.length;t++){let s=document.createElement("div");s.classList.add("custom-select-item"),s.innerText=select.options[t].value,e.appendChild(s),s.onclick=function(l){l.cancelBubble=!0,select.selectedIndex=t;let c=document.querySelector(".custom-select-item__selected");c&&c.classList.remove("custom-select-item__selected"),s.classList.add("custom-select-item__selected"),setTimeout((()=>{select.style.display="block",e.style.display="none"}),200)}}}let choise=new URLSearchParams(document.location.search).get("choise");if(choise&&select){let e=-1;switch(choise){case"kindergarten":e=0;break;case"prepare":e=1;break;case"course":e=2;break;case"english":e=3;break;case"logoped":e=4;break;case"art":e=5;break;case"saturday":e=6;break;case"genius":e=7}if(e>=0){let t=document.querySelectorAll(".custom-select-item");select.selectedIndex=e,t[e].classList.add("custom-select-item__selected")}}let kindergartenQuestionsBtn=document.querySelectorAll(".main__kindergarten-questions-item_button");kindergartenQuestionsBtn&&kindergartenQuestionsBtn.forEach((e=>{e.onclick=()=>{e.classList.toggle("main__kindergarten-questions-item_button-show"),e.nextElementSibling.classList.toggle("main__kindergarten-questions-item_answer-show")}})),window.onwheel=e=>{let t=document.querySelector(".header__menu__moving-part");e.deltaY>0?t.style.top="-130px":t.style.top="0px",console.log("scroling window")};const photoSlider=new InfinitySlider(".slider",{isArrows:!0,isSlidesToScrollAll:!0,baseCardWidth:"263rem",gap:20,isAutoplay:!0,autoplaySpeed:5e3,transitionCard:"all 1.5s ease-in-out"});photoSlider.init(),window.onresize=function(){photoSlider.init()};
class InfinitySlider{constructor(t,s={}){this.settings={...InfinitySlider.defaultSettings,...s},this.slider=document.querySelector(t),this.positionCards=0,this.sliderContainer=this.slider.querySelector(".slider-container"),this.sliderCards=this.sliderContainer.children,this.realCardsLength=this.sliderCards.length,this.heightCards=0,this.widthSliderContainer,this.cardsCount,this.widthCards,this.distanceCards,this.cloneCard,this.prevBtnSlider,this.nextBtnSlider,this.sliderInterval,this.maxHeight,this.sliderDots,this.touchPoint}static defaultSettings={gap:0,isArrows:!1,isDots:!1,distanceToDots:0,isAutoplay:!1,autoplaySpeed:3e3,baseCardWidth:null,transitionCard:"all 1s ease-in-out",isEffectFadeOut:!1};init(){if(this.widthSliderContainer=this.sliderContainer.getBoundingClientRect().width,null==this.settings.baseCardWidth&&(this.settings.baseCardWidth=this.widthSliderContainer),this.slider.querySelectorAll(".clone").forEach((t=>{t.remove()})),localStorage[this.slider.id+"Interval"]&&clearInterval(localStorage[this.slider.id+"Interval"]),this.slider.style.position="relative",this.sliderContainer.style.overflow="hidden",this.sliderContainer.style.position="relative",this.sliderContainer.style.width="100%",this.cardsCount=Math.floor(this.widthSliderContainer/(parseInt(this.settings.baseCardWidth)+this.settings.gap)),0==this.cardsCount&&(this.cardsCount=1),this.distanceCards=this.settings.gap,this.widthCards=(this.widthSliderContainer-(this.cardsCount-1)*this.distanceCards)/this.cardsCount,this.positionCards=0-(this.distanceCards+this.widthCards),this.settings.isArrows&&this.creationArrows(),this.prevBtnSlider=this.slider.querySelector(".left.slider_navigation"),this.nextBtnSlider=this.slider.querySelector(".right.slider_navigation"),this.settings.isArrows&&this.sliderCards.length<=this.cardsCount?(this.prevBtnSlider.style.display="none",this.nextBtnSlider.style.display="none"):this.settings.isArrows&&(this.prevBtnSlider.style.display="block",this.nextBtnSlider.style.display="block"),this.settings.isDots&&this.realCardsLength>1){this.creationDots(),this.sliderDots=document.querySelectorAll(".slider-dot");for(let t=0;t<this.sliderCards.length;t++)this.sliderCards[t].classList.contains("activeFade")&&(this.sliderDots[t].classList.remove("activeFade"),this.sliderCards[t].classList.remove("activeFade"));this.sliderDots[0].classList.add("activeFade"),this.sliderCards[0].classList.add("activeFade")}this.settings.isEffectFadeOut||(this.creationClons(),this.shuffleCard()),this.sliderCards=this.sliderContainer.children,this.heightCards=0;for(let t=0;t<this.sliderCards.length;t++)this.sliderCards[t].style.width=this.widthCards+"px",this.sliderCards[t].style.position="absolute",this.maxHeight=this.sliderCards[t].getBoundingClientRect().height,this.heightCards<this.maxHeight&&(this.heightCards=this.maxHeight),this.sliderCards[t].style.transition="none",setTimeout((()=>{this.sliderCards[t].style.transition=this.settings.transitionCard}),1);this.settings.isDots?this.sliderContainer.style.height=this.heightCards+this.settings.distanceToDots+"px":this.sliderContainer.style.height=this.heightCards+"px",this.sliderDots=document.querySelectorAll(".slider-dot"),this.sliderDots.forEach((t=>{t.onclick=()=>{clearInterval(localStorage[this.slider.id+"Interval"]);for(let t=0;t<this.realCardsLength;t++)this.sliderDots[t].classList.remove("activeFade"),this.sliderCards[t].classList.remove("activeFade");this.sliderCards[t.dataset.order].classList.add("activeFade"),t.classList.add("activeFade")}})),this.settings.isAutoplay&&this.realCardsLength>this.cardsCount&&this.startAutoPlay(),this.slider.addEventListener("touchend",(()=>{this.settings.isAutoplay&&this.realCardsLength>this.cardsCount&&this.startAutoPlay()})),this.touchSlider=this.touchSlider.bind(this),this.slider.addEventListener("touchstart",(t=>{this.touchPoint=t.touches[0].pageX,this.slider.addEventListener("touchmove",this.touchSlider),clearInterval(localStorage[this.slider.id+"Interval"])})),this.slider.onmouseenter=()=>{clearInterval(localStorage[this.slider.id+"Interval"])},this.slider.onmouseleave=()=>{this.settings.isAutoplay&&this.realCardsLength>this.cardsCount&&this.startAutoPlay()}}creationClons(){let t=1;do{this.cloneCard=this.sliderCards[this.sliderCards.length-t].cloneNode(!0),this.cloneCard.classList.add("clone"),this.cloneCard.style.transition="none",this.sliderContainer.insertAdjacentElement("afterbegin",this.cloneCard),this.realCardsLength=this.sliderCards.length-this.slider.querySelectorAll(".clone").length,t++}while(t<=this.realCardsLength&&this.settings.isSlidesToScrollAll);if(this.settings.isSlidesToScrollAll)for(t=0;t<this.realCardsLength;)this.cloneCard=this.sliderCards[t].cloneNode(!0),this.cloneCard.classList.add("clone"),this.cloneCard.style.transition="none",this.sliderContainer.insertAdjacentElement("beforeend",this.cloneCard),t++}creationArrows(){if(this.slider.querySelectorAll(".slider_navigation").length<1){this.prevBtnSlider=document.createElement("span"),this.nextBtnSlider=document.createElement("span"),this.prevBtnSlider.className="left slider_navigation",this.nextBtnSlider.className="right slider_navigation",this.slider.insertAdjacentElement("afterbegin",this.prevBtnSlider),this.slider.insertAdjacentElement("beforeend",this.nextBtnSlider);let t=!0;const s=()=>{t=!1,setTimeout((()=>{t=!0}),1e3*parseFloat(this.sliderCards[0].style.transitionDuration))};this.prevBtnSlider.onclick=()=>{t&&(this.changeSlide("left"),s())},this.nextBtnSlider.onclick=()=>{t&&(this.changeSlide("right"),s())}}}creationDots(){if(!this.slider.querySelector(".dots-container")){let t=document.createElement("div");t.style.position="absolute",t.className="dots-container",t.style.bottom="0",this.slider.insertAdjacentElement("beforeend",t);for(let s=0;s<this.realCardsLength;s++){const i=document.createElement("span");i.className="slider-dot",i.dataset.order=s,t.insertAdjacentElement("beforeend",i)}}}shuffleCard(){this.sliderCards=this.sliderContainer.children,this.positionCards=0-(this.distanceCards+this.widthCards),this.settings.isSlidesToScrollAll&&(this.positionCards=0-(this.distanceCards+this.widthCards)*this.realCardsLength);for(let t=0;t<this.sliderCards.length;t++)this.sliderCards[t].style.left=this.positionCards+"px",this.positionCards+=this.distanceCards+this.widthCards}changeSlide(t){this.widthSliderContainer=this.sliderContainer.getBoundingClientRect().width,this.cardsCount=Math.floor(this.widthSliderContainer/(parseInt(this.settings.baseCardWidth)+this.settings.gap)),0==this.cardsCount&&(this.cardsCount=1),this.widthCards=(this.widthSliderContainer-(this.cardsCount-1)*this.distanceCards)/this.cardsCount,this.sliderCards=this.sliderContainer.children;let s=0;for(let t=0;t<this.sliderCards.length;t++)this.sliderCards[t].classList.contains("activeFade")&&(s=t);if("left"==t)if(this.settings.isSlidesToScrollAll)for(let t=0;t<this.cardsCount;t++)this.sliderContainer.insertAdjacentElement("afterbegin",this.sliderCards[this.sliderCards.length-1]);else if(this.settings.isEffectFadeOut)setTimeout((()=>this.sliderCards[s].classList.add("activeFade")),800),setTimeout((()=>this.sliderDots[s].classList.add("activeFade")),800),this.sliderCards[s].classList.remove("activeFade"),this.sliderDots[s].classList.remove("activeFade"),this.sliderCards[s-1]?s--:s=this.sliderCards.length-1;else{this.sliderCards[this.sliderCards.length-1].remove();let t=this.sliderCards[this.sliderCards.length-1].cloneNode(!0);t.classList.add("clone"),this.sliderContainer.insertAdjacentElement("afterbegin",t),this.sliderCards[1].classList.remove("clone")}else if("right"==t)if(this.settings.isSlidesToScrollAll)for(let t=0;t<this.cardsCount;t++)this.sliderContainer.insertAdjacentElement("beforeend",this.sliderCards[0]);else if(this.settings.isEffectFadeOut)setTimeout((()=>this.sliderCards[s].classList.add("activeFade")),800),setTimeout((()=>this.sliderDots[s].classList.add("activeFade")),800),this.sliderCards[s].classList.remove("activeFade"),this.sliderDots[s].classList.remove("activeFade"),this.sliderCards[s+1]?s++:s=0;else{this.sliderCards[0].remove();let t=this.sliderCards[0].cloneNode(!0);t.classList.add("clone"),this.sliderContainer.insertAdjacentElement("beforeend",t),this.sliderCards[this.sliderCards.length-2].classList.remove("clone")}this.settings.isEffectFadeOut||this.shuffleCard()}startAutoPlay(){if(clearInterval(localStorage[this.slider.id+"Interval"]),this.settings.isEffectFadeOut){let t=0;for(let s=0;s<this.sliderCards.length;s++)this.sliderCards[s].classList.contains("activeFade")&&(t=s);const s=t=>{setTimeout((()=>this.sliderCards[t].classList.add("activeFade")),1e3),setTimeout((()=>this.sliderDots[t].classList.add("activeFade")),1e3)};this.sliderInterval=setInterval((()=>{this.sliderCards[t].classList.remove("activeFade"),this.sliderDots[t].classList.remove("activeFade"),this.sliderCards[t+1]?t++:t=0,s(t)}),this.settings.autoplaySpeed)}else this.sliderInterval=setInterval((()=>{this.changeSlide("right")}),this.settings.autoplaySpeed);localStorage[this.slider.id+"Interval"]=this.sliderInterval}touchSlider(t){this.touchPoint+20<t.touches[0].pageX?(this.changeSlide("left"),this.slider.removeEventListener("touchmove",this.touchSlider)):this.touchPoint-20>t.touches[0].pageX&&(this.changeSlide("right"),this.slider.removeEventListener("touchmove",this.touchSlider))}}