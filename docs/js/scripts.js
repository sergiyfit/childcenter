let popup=document.querySelector(".popup"),popupNav=document.querySelector(".popup_nav"),popupPolitic=document.querySelector(".politic"),popupBtn=document.querySelectorAll(".popupRegister"),popupBackground=document.querySelector(".popup_background"),popupClose=document.querySelector(".popup-dialog-close"),imgContainer=document.querySelector(".popup-img-box");popupBtn.forEach((e=>{e.onclick=e=>{if(e.preventDefault(),document.querySelectorAll("form").length>=2){let e=document.querySelector("form input");e.focus(),e.scrollIntoView()}else popupBackground.style.display="flex",popupClose.nextElementSibling.style.display="block",popup.classList.remove(".milk-background"),popupPolitic.style.display="none",popupNav.style.display="none",window.innerWidth>500?popup.style.width="480px":popup.style.width="320px"}})),popupClose.onclick=()=>{popupBackground.style.display="none",popupNav.style.display="none",popup.querySelectorAll("img").forEach((e=>e.remove())),imgContainer.style.width="auto",imgContainer.style.height="auto"};let foodmenu=document.querySelector("#foodmenu");foodmenu&&(foodmenu.onclick=e=>{e.preventDefault(),popupPolitic.style.display="none",popupBackground.style.display="flex",popupClose.nextElementSibling.style.display="none";let t=document.createElement("img");imgContainer.insertAdjacentElement("afterbegin",t);let o=1;t.style.display="block",popup.style.width="max-content",popup.style.height="max-content",window.innerWidth<window.innerHeight?t.style.width="90vw":t.style.height="90vh",popupNav.style.display="flex";let p=popupNav.querySelectorAll(".global-dot"),l=document.querySelector(".arr-left"),i=document.querySelector(".arr-right");p.forEach(((e,l)=>{e.onclick=function(){p[l].classList.add("global-dot--active"),p[o-1].classList.remove("global-dot--active"),o=l+1,t.src="img/photo/menu/week-"+o+".png"}})),i.onclick=function(){p[o-1].classList.remove("global-dot--active"),o=o>=4?1:o+1,t.src="img/photo/menu/week-"+o+".png",p[o-1].classList.add("global-dot--active")},l.onclick=function(){p[o-1].classList.remove("global-dot--active"),o=o<=1?4:o+-1,t.src="img/photo/menu/week-"+o+".png",p[o-1].classList.add("global-dot--active")},t.src="img/photo/menu/week-"+o+".png",t.onclick=function(){t.style.height="auto",window.innerWidth<720?(t.style.width="300%",imgContainer.style.width="100vw",imgContainer.style.height="100vh",popup.style.overflow="hidden",imgContainer.style.overflow="scroll"):(t.getBoundingClientRect().width>t.getBoundingClientRect().height?t.style.width="100vw":t.style.height="100vh",imgContainer.style.width="100vw",imgContainer.style.height="100vh",popup.style.overflow="hidden",imgContainer.style.overflow="scroll"),popup.style.width="max-content",popup.style.height="max-content"}});let politicBtn=document.querySelector("#politic");politicBtn.onclick=function(e){e.preventDefault(),window.innerWidth>860?popup.style.width="840px":popup.style.width="auto",popupBackground.style.display="flex",popupPolitic.style.display="block",popupNav.style.display="none",popupClose.nextElementSibling.style.display="none"};let popupImgSlider=document.querySelector(".main__photo_img_container.slider");popupImgSlider&&(popupImgSlider.onclick=e=>{if(e.target&&e.target.src){popupBackground.style.display="flex",popupNav.style.display="none",popupClose.nextElementSibling.style.display="none";let t=document.createElement("img");popup.appendChild(t);t.style.display="block",popup.style.width="max-content",popup.style.height="max-content",window.innerWidth<window.innerHeight?t.style.width="90vw":t.style.height="90vh",t.src=e.target.src}});
let burger=document.querySelector(".burger"),menu=document.querySelector(".header__menu__container"),btn=document.querySelector(".header__menu__btn");burger.onclick=()=>{menu.classList.toggle("show"),burger.classList.toggle("burger-close")},menu.onclick=e=>{"header__menu__subitem__elements"!=e.target.firstElementChild.className&&(menu.classList.remove("show"),burger.classList.remove("burger-close"))};let select=document.querySelector(".select");if(select){select.onclick=t=>{t.preventDefault(),t.cancelBubble=!0,e.style.display="block",select.style.display="none"},document.body.onclick=()=>{select.style.display="block",e.style.display="none"};let e=document.querySelector(".custom-select");for(let t=0;t<select.options.length;t++){let l=document.createElement("div");l.classList.add("custom-select-item"),l.innerText=select.options[t].value,e.appendChild(l),l.onclick=function(s){s.cancelBubble=!0,select.selectedIndex=t;let c=document.querySelector(".custom-select-item__selected");c&&c.classList.remove("custom-select-item__selected"),l.classList.add("custom-select-item__selected"),setTimeout((()=>{select.style.display="block",e.style.display="none"}),200)}}}const formname=document.querySelectorAll("#username");formname.forEach((e=>{e.onkeyup=function(){this.value=this.value.replace(/[\d]/g,"")}}));const formphone=document.querySelectorAll("#usernum");formphone.forEach((e=>{e.onkeyup=function(){this.value=this.value.slice(0,1)+this.value.slice(1).replace(/[\D]/g,"")}}));let choise=new URLSearchParams(document.location.search).get("choise");if(choise&&select){let e=-1;switch(choise){case"kindergarten":e=1;break;case"prepare":e=2;break;case"course":e=3;break;case"english":e=4;break;case"logoped":e=5;break;case"art":e=6;break;case"saturday":e=7;break;case"genius":e=8}if(e>=0){let t=document.querySelectorAll(".custom-select-item");select.selectedIndex=e,t[e].classList.add("custom-select-item__selected")}}let kindergartenQuestionsBtn=document.querySelectorAll(".main__kindergarten-questions-item_button");kindergartenQuestionsBtn&&kindergartenQuestionsBtn.forEach((e=>{e.onclick=()=>{e.classList.toggle("main__kindergarten-questions-item_button-show"),e.nextElementSibling.classList.toggle("main__kindergarten-questions-item_answer-show")}}));let lastScroll=0;window.onscroll=e=>{let t=document.querySelector(".header__menu__moving-part");window.scrollY>130&&lastScroll<window.scrollY?(t.style.top="-780px",setTimeout((function(){t.style.top="-130px",menu.classList.remove("show"),burger.classList.remove("burger-close")}),500)):t.style.top="0px",lastScroll=window.scrollY};let reports=document.querySelectorAll(".main__report_card_text");reports.forEach((e=>{const t=e.innerText;if(t.length>388){const l=t.slice(0,388).lastIndexOf(" "),s=t.slice(0,l+1),c=t.slice(l+1);e.innerText=s;let n=document.createElement("strong");n.innerText=" більше..",e.appendChild(n);let o=document.createElement("span");o.innerText=c,o.style.display="none",e.appendChild(o),n.onclick=function(){n.style.display="none",o.style.display="inline"}}}));
class InfinitySlider{constructor(t,i={}){this.settings={...InfinitySlider.defaultSettings,...i},this.slider=document.querySelector(t),this.positionCards=0,this.sliderContainer=this.slider.querySelector(".slider-container"),this.sliderCards=this.sliderContainer.children,this.realCardsLength=this.sliderCards.length,this.heightCards=0,this.widthSliderContainer,this.cardsCount,this.widthCards,this.distanceCards,this.cloneCard,this.prevBtnSlider,this.nextBtnSlider,this.sliderInterval,this.maxHeight,this.sliderDots,this.touchPoint,this.activeDot=0}static defaultSettings={gap:0,isArrows:!1,isDots:!1,left:0,isAutoplay:!1,autoplaySpeed:3e3,baseCardWidth:null,transitionCard:"all 1s ease-in-out",isEffectFadeOut:!1};init(){if(this.widthSliderContainer=this.sliderContainer.getBoundingClientRect().width,null==this.settings.baseCardWidth&&(this.settings.baseCardWidth=this.widthSliderContainer),this.slider.querySelectorAll(".clone").forEach((t=>{t.remove()})),localStorage[this.slider.id+"Interval"]&&clearInterval(localStorage[this.slider.id+"Interval"]),this.slider.style.position="relative",this.sliderContainer.style.overflow="hidden",this.sliderContainer.style.position="relative",this.sliderContainer.style.width="100%",this.cardsCount=Math.floor(this.widthSliderContainer/(parseInt(this.settings.baseCardWidth)+this.settings.gap)),0==this.cardsCount&&(this.cardsCount=1),this.distanceCards=this.settings.gap,this.widthCards=(this.widthSliderContainer-(this.cardsCount-1)*this.distanceCards)/this.cardsCount,this.positionCards=0-(this.distanceCards+this.widthCards),this.settings.isDots&&this.realCardsLength>1){this.creationDots(),this.activeDot=0,this.sliderDots=this.slider.querySelectorAll(".slider-dot");for(let t=0;t<this.sliderCards.length;t++)this.sliderCards[t].classList.contains("activeFade")&&(this.sliderDots[t].classList.remove("activeFade"),this.sliderCards[t].classList.remove("activeFade"));this.sliderDots[0].classList.add("activeFade"),this.sliderCards[0].classList.add("activeFade")}this.settings.isArrows&&this.creationArrows(),this.prevBtnSlider=this.slider.querySelector(".left.slider_navigation"),this.nextBtnSlider=this.slider.querySelector(".right.slider_navigation"),this.settings.isArrows&&this.sliderCards.length<=this.cardsCount?(this.prevBtnSlider.style.display="none",this.nextBtnSlider.style.display="none"):this.settings.isArrows&&(this.prevBtnSlider.style.display="block",this.nextBtnSlider.style.display="block"),this.settings.isEffectFadeOut||(this.creationClons(),this.shuffleCard()),this.sliderCards=this.sliderContainer.children,this.heightCards=0;for(let t=0;t<this.sliderCards.length;t++)this.sliderCards[t].style.width=this.widthCards+"px",this.sliderCards[t].style.position="absolute",this.maxHeight=this.sliderCards[t].getBoundingClientRect().height,this.heightCards<this.maxHeight&&(this.heightCards=this.maxHeight),this.sliderCards[t].style.transition="none",setTimeout((()=>{this.sliderCards[t].style.transition=this.settings.transitionCard}),1);this.settings.isDots?this.sliderContainer.style.height=this.heightCards+this.settings.distanceToDots+"px":this.sliderContainer.style.height=this.heightCards+"px",this.sliderDots=this.slider.querySelectorAll(".slider-dot"),this.sliderDots.forEach((t=>{t.onclick=()=>{clearInterval(localStorage[this.slider.id+"Interval"]);for(let t=0;t<this.realCardsLength;t++)this.sliderDots[t].classList.remove("activeFade"),this.sliderCards[t].classList.remove("activeFade");this.sliderCards[t.dataset.order].classList.add("activeFade"),t.classList.add("activeFade")}})),this.settings.isAutoplay&&this.realCardsLength>this.cardsCount&&this.startAutoPlay(),this.slider.addEventListener("touchend",(()=>{this.settings.isAutoplay&&this.realCardsLength>this.cardsCount&&this.startAutoPlay()})),this.touchSlider=this.touchSlider.bind(this),this.slider.addEventListener("touchstart",(t=>{this.touchPoint=t.touches[0].pageX,this.slider.addEventListener("touchmove",this.touchSlider),clearInterval(localStorage[this.slider.id+"Interval"])})),this.slider.onmouseenter=()=>{clearInterval(localStorage[this.slider.id+"Interval"])},this.slider.onmouseleave=()=>{this.settings.isAutoplay&&this.realCardsLength>this.cardsCount&&this.startAutoPlay()},this.switchCardWidth=function(t){this.settings.baseCardWidth=t}}creationClons(){let t=1;do{this.cloneCard=this.sliderCards[this.sliderCards.length-t].cloneNode(!0),this.cloneCard.classList.add("clone"),this.cloneCard.style.transition="none",this.sliderContainer.insertAdjacentElement("afterbegin",this.cloneCard),this.realCardsLength=this.sliderCards.length-this.slider.querySelectorAll(".clone").length,t++}while(t<=this.realCardsLength&&this.settings.isSlidesToScrollAll);if(this.settings.isSlidesToScrollAll)for(t=0;t<this.realCardsLength;)this.cloneCard=this.sliderCards[t].cloneNode(!0),this.cloneCard.classList.add("clone"),this.cloneCard.style.transition="none",this.sliderContainer.insertAdjacentElement("beforeend",this.cloneCard),t++}creationArrows(){if(this.slider.querySelectorAll(".slider_navigation").length<1){this.prevBtnSlider=document.createElement("span"),this.prevBtnSlider.className="left slider_navigation",this.nextBtnSlider=document.createElement("span"),this.nextBtnSlider.className="right slider_navigation";let t=this.slider.querySelector(".dots-container");t.insertAdjacentElement("afterbegin",this.prevBtnSlider),t.insertAdjacentElement("beforeend",this.nextBtnSlider);let i=!0;const e=()=>{i=!1,setTimeout((()=>{i=!0}),1e3*parseFloat(this.sliderCards[0].style.transitionDuration))};this.prevBtnSlider.onclick=()=>{i&&(this.changeSlide("left"),e())},this.nextBtnSlider.onclick=()=>{i&&(this.changeSlide("right"),e())}}}creationDots(){if(!this.slider.querySelector(".dots-container")){let t=document.createElement("div");t.style.position="absolute",t.className="dots-container",t.style.bottom="0",this.slider.insertAdjacentElement("beforeend",t);for(let i=0;i<this.realCardsLength;i++){const e=document.createElement("span");e.className="slider-dot",e.dataset.order=i,t.insertAdjacentElement("beforeend",e)}}}shuffleCard(){this.sliderCards=this.sliderContainer.children,this.positionCards=0-(this.distanceCards+this.widthCards),this.settings.isSlidesToScrollAll&&(this.positionCards=0-(this.distanceCards+this.widthCards)*this.realCardsLength);for(let t=0;t<this.sliderCards.length;t++)this.sliderCards[t].style.left=this.positionCards+"px",this.positionCards+=this.distanceCards+this.widthCards}changeSlide(t){this.widthSliderContainer=this.sliderContainer.getBoundingClientRect().width,this.cardsCount=Math.floor(this.widthSliderContainer/(parseInt(this.settings.baseCardWidth)+this.settings.gap)),0==this.cardsCount&&(this.cardsCount=1),this.widthCards=(this.widthSliderContainer-(this.cardsCount-1)*this.distanceCards)/this.cardsCount,this.sliderCards=this.sliderContainer.children;let i=0;for(let t=0;t<this.sliderCards.length;t++)this.sliderCards[t].classList.contains("activeFade")&&(i=t);if("left"==t)if(this.settings.isSlidesToScrollAll){for(let t=0;t<this.cardsCount;t++)this.sliderContainer.insertAdjacentElement("afterbegin",this.sliderCards[this.sliderCards.length-1]);this.sliderDots[this.activeDot].classList.remove("activeFade"),this.activeDot=this.activeDot<1?this.sliderDots.length-1:--this.activeDot,this.sliderDots[this.activeDot].classList.add("activeFade")}else if(this.settings.isEffectFadeOut)setTimeout((()=>this.sliderCards[i].classList.add("activeFade")),800),setTimeout((()=>this.sliderDots[i].classList.add("activeFade")),800),this.sliderCards[i].classList.remove("activeFade"),this.sliderDots[i].classList.remove("activeFade"),this.sliderCards[i-1]?i--:i=this.sliderCards.length-1;else{this.sliderCards[this.sliderCards.length-1].remove();let t=this.sliderCards[this.sliderCards.length-1].cloneNode(!0);t.classList.add("clone"),this.sliderContainer.insertAdjacentElement("afterbegin",t),this.sliderCards[1].classList.remove("clone")}else if("right"==t)if(this.settings.isSlidesToScrollAll){for(let t=0;t<this.cardsCount;t++)this.sliderContainer.insertAdjacentElement("beforeend",this.sliderCards[0]);this.sliderDots[this.activeDot].classList.remove("activeFade"),this.activeDot=this.activeDot>this.sliderDots.length-2?0:++this.activeDot,this.sliderDots[this.activeDot].classList.add("activeFade")}else if(this.settings.isEffectFadeOut)setTimeout((()=>this.sliderCards[i].classList.add("activeFade")),800),setTimeout((()=>this.sliderDots[i].classList.add("activeFade")),800),this.sliderCards[i].classList.remove("activeFade"),this.sliderDots[i].classList.remove("activeFade"),this.sliderCards[i+1]?i++:i=0;else{this.sliderCards[0].remove();let t=this.sliderCards[0].cloneNode(!0);t.classList.add("clone"),this.sliderContainer.insertAdjacentElement("beforeend",t),this.sliderCards[this.sliderCards.length-2].classList.remove("clone")}this.settings.isEffectFadeOut||this.shuffleCard()}startAutoPlay(){if(clearInterval(localStorage[this.slider.id+"Interval"]),this.settings.isEffectFadeOut){let t=0;for(let i=0;i<this.sliderCards.length;i++)this.sliderCards[i].classList.contains("activeFade")&&(t=i);const i=t=>{setTimeout((()=>this.sliderCards[t].classList.add("activeFade")),1e3),setTimeout((()=>this.sliderDots[t].classList.add("activeFade")),1e3)};this.sliderInterval=setInterval((()=>{this.sliderCards[t].classList.remove("activeFade"),this.sliderDots[t].classList.remove("activeFade"),this.sliderCards[t+1]?t++:t=0,i(t)}),this.settings.autoplaySpeed)}else this.sliderInterval=setInterval((()=>{this.changeSlide("right")}),this.settings.autoplaySpeed);localStorage[this.slider.id+"Interval"]=this.sliderInterval}touchSlider(t){this.touchPoint+100<t.touches[0].pageX?(this.changeSlide("left"),this.slider.removeEventListener("touchmove",this.touchSlider)):this.touchPoint-100>t.touches[0].pageX&&(this.changeSlide("right"),this.slider.removeEventListener("touchmove",this.touchSlider))}}let photoSlider,getPhotosliderWidth=()=>{let t="500rem";return window.innerWidth>=520&&window.innerWidth<=800?t="200rem":window.innerWidth>800&&window.innerWidth<=959?t="250rem":window.innerWidth>=960&&window.innerWidth<=1160?t="300rem":window.innerWidth>1160&&window.innerWidth<=1350?t="350rem":window.innerWidth>1350&&window.innerWidth<=1640&&(t="400rem"),t};document.querySelector(".slider")&&(photoSlider=new InfinitySlider(".slider",{isArrows:!0,isSlidesToScrollAll:!0,baseCardWidth:"500rem",gap:10,isAutoplay:!0,isDots:!0,distanceToDots:80,autoplaySpeed:5e3,transitionCard:"all 1.5s ease-in-out"}));let album=document.querySelectorAll(".album"),photoBtn=document.querySelectorAll(".main__photo_btn");photoBtn.forEach(((t,i)=>{t.onmouseenter=function(){const i=getComputedStyle(t).borderColor;t.style.backgroundColor=i,t.style.color="#fff"},t.onmouseleave=function(){if(!t.hasAttribute("active")){const i=getComputedStyle(t).borderColor;t.style.backgroundColor="#fff",t.style.color=i}},t.onclick=function(){photoBtn.forEach((i=>{const e=getComputedStyle(i).borderColor;i.style.backgroundColor="#fff",i.style.color=e,t.removeAttribute("active")}));const e=getComputedStyle(t).borderColor;t.style.backgroundColor=e,t.style.color="#fff",t.setAttribute("active","true");let s=document.querySelector(".slider .slider-container");s.querySelectorAll("img").forEach((t=>t.remove()));let r=album[i+1].querySelectorAll("img");s.style.opacity="0",r.forEach((t=>{let i=t.cloneNode(!0);i.classList.add("main__photo_img"),s.appendChild(i)})),s.style.opacity="0",setTimeout((function(){photoSlider.init(),s.style.opacity="1"}),500)}})),photoBtn&&setTimeout((function(){photoBtn[0].onclick()}),100);let padagogueSlider=document.querySelector(".main__pedagogue");if(padagogueSlider){const t=new InfinitySlider(".slider_pedagogue",{isArrows:!0,baseCardWidth:"370rem",gap:30,isAutoplay:!0,isDots:!0,distanceToDots:100,autoplaySpeed:3e3,transitionCard:"all 1.5s ease-in-out"}),i=new InfinitySlider(".main__report_container",{isArrows:!0,isSlidesToScrollAll:!0,baseCardWidth:"500rem",gap:20,isAutoplay:!0,isDots:!0,distanceToDots:100,autoplaySpeed:5e3,transitionCard:"all 1.5s ease-in-out"});window.onload=function(){photoSlider.init(),t.init(),i.init()},window.onresize=function(){photoSlider.switchCardWidth(getPhotosliderWidth()),photoSlider.init();let e="370rem";window.innerWidth>=520&&window.innerWidth<=717?e="200rem":window.innerWidth>717&&window.innerWidth<=959?e="250rem":window.innerWidth>=960&&window.innerWidth<=1160?e="200rem":window.innerWidth>1160&&window.innerWidth<=1350?e="250rem":window.innerWidth>1350&&window.innerWidth<=1640&&(e="300rem"),t.switchCardWidth(e),t.init();let s="500rem";window.innerWidth>=560&&window.innerWidth<=800?s="250rem":window.innerWidth>800&&window.innerWidth<=1080?s="350rem":window.innerWidth>=1080&&window.innerWidth<=1280?s="300rem":window.innerWidth>1280&&window.innerWidth<=1580?s="380rem":window.innerWidth>1580&&window.innerWidth<=1640&&(s="400rem"),i.switchCardWidth(s),i.init()}}else document.querySelector(".slider")&&(window.onload=function(){photoSlider.init()},window.onresize=function(){photoSlider.switchCardWidth(getPhotosliderWidth()),photoSlider.init()});setTimeout((()=>{document.querySelectorAll(".right").forEach((t=>t.onclick())),document.querySelectorAll(".left").forEach((t=>t.onclick()))}),500);