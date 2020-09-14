function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

/*-----------------ibg-------------------*/
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();
/*-----------------ibg-------------------*/

/*---------------GUMBURGER-MENU-----------------*/
// const menuIcon = document.querySelector
// (".hamburger-menu");
// const navbar = document.querySelector(".navbar");
// const navList = document.querySelector(".nav-list");
// const bodyLock = document.querySelector("body");

// menuIcon.addEventListener("click", () => {
//     navbar.classList.toggle("change");
// });
// menuIcon.addEventListener("click", () => {
//     navList.classList.toggle("change");
// });
// menuIcon.addEventListener("click", () => {
//     bodyLock.classList.toggle("lock");
// });
/*---------------GUMBURGER-MENU-----------------*/
let MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";
 function menutoggle(){
     if(MenuItems.style.maxHeight == "0px")
     {
        MenuItems.style.maxHeight = "500px";
     }else{
        MenuItems.style.maxHeight = "0px";
     }
 }
 /*-----singl product details-----*/
 let ProductImg = document.getElementById("ProductImg");
 let SmallImg = document.getElementsByClassName("small-img");

 SmallImg[0].onclick = function(){
     ProductImg.src = SmallImg[0].src;
 }
 SmallImg[1].onclick = function(){
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function(){
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function(){
    ProductImg.src = SmallImg[3].src;
}
//*-----------form------------*//
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");
  
   function register(){

       RegForm.style.transform = "translateX(0px)";
       LoginForm.style.transform = "translateX(0px)";
   }

   function login(){

    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
}