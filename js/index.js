function changeBg() {
    var scrollValue = window.scrollY;
    var navbar = document.getElementById('navbar');
    var pointActive = document.querySelector('.active');
    var point = document.querySelectorAll('.col-menu ul li a');
    var logo = document.getElementById('logoMainNav');
    var btn = document.querySelector('.col-contact .btn');
    
    if (scrollValue > 100) {
        navbar.style.position = "fixed";
        navbar.style.backgroundColor = "white";
        navbar.style.zIndex = "10";
        navbar.style.height = "48px";
        navbar.classList.add("animate__animated", "animate__fadeInDown")
        pointActive.style.setProperty('--afterPointActive', '-20px')
        for (var i = 0; i < point.length; i++) {
            point[i].style.setProperty('--afterPoint', '-20px')
        }
        logo.style.display="none";
        btn.style.height ="35px";
        btn.style.padding ="0 1.5em";
    } else {
        navbar.style.position = "absolute";
   
        btn.style.height ="initial";
        btn.style.padding ="1.1em 1.5em";
        logo.style.display="block";
        pointActive.style.setProperty('--afterPointActive', '-35px')
        navbar.style.backgroundColor = "initial";
        navbar.style.zIndex = "initial";
        navbar.style.height = "initial";
        navbar.classList.remove("animate__animated", "animate__fadeInDown")
    }
}
const horizontalBar = document.querySelector('.horizontal-navbar');
function changeHorizontalBg() {
  var scrollValue_ = window.scrollY;
  
  if (scrollValue_ > 100) {
    horizontalBar.style.position = "fixed";
    horizontalBar.style.width = "100%";
    horizontalBar.style.zIndex= "10";
    horizontalBar.style.boxShadow="0 30px 30px -10px rgb(0 0 0 / 20%)";
    horizontalBar.classList.add("animate__animated", "animate__fadeInDown")
  } else {
    horizontalBar.style.position = "static";
    horizontalBar.style.boxShadow="none";
    horizontalBar.classList.remove("animate__animated", "animate__fadeInDown")
  }
}


const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.navigation .container .grid-row');
const mainPage =document.getElementById('TabulaMain');
const footerPage =document.getElementById('TabulaFooter');
const logoHorizontalBar = document.getElementById('logo');
let menuOpen = false;



var screen=window.matchMedia("(max-width: 1200px)")
console.log(screen);
function checkScreen(x){
    if (!x.matches) { // If media query matches
       window.addEventListener('scroll', changeBg);
       sideMenu.style.transform="translateX(0)";
      }else{
        sideMenu.style.transform="translateX(-500px)";
        window.addEventListener('scroll', changeHorizontalBg);
      }
}

checkScreen(screen)
screen.addListener(checkScreen);


menuBtn.addEventListener('click', () => {
    
  if(!menuOpen) {
    horizontalBar.style.width = "100%";
    horizontalBar.style.zIndex= "10";
    horizontalBar.style.marginLeft="20rem";
   sideMenu.style.transform="translateX(0)";
   
    menuBtn.classList.add('open');
    mainPage.style.transform="translateX(320px)";
    footerPage.style.transform="translateX(320px)";
    logoHorizontalBar.style.display="none";
    menuOpen = true;
  } else {
    horizontalBar.style.width = "100%";
    horizontalBar.style.zIndex= "10";
    horizontalBar.style.marginLeft="0";
    sideMenu.style.transform="translateX(-500px)";
    menuBtn.classList.remove('open');
    logoHorizontalBar.style.display="block";
    mainPage.style.transform="translateX(0)";
    footerPage.style.transform="translateX(0)";
   
    menuOpen = false;
  }
});