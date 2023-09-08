var aboutMe = document.getElementById("abt-me-link");
var portfolio = document.getElementById("portfolio-link");
var contact = document.getElementById("contact-link");
var resume = document.getElementById("resume-link");
var home = document.getElementById("home-link");
var card1 = document.querySelector('#card1');

// Theme Button
// var theme = document.getElementById("theme-btn");
// function themeSwitch(){
//   theme.href = ""
// }
// theme.addEventListener('click', themeSwitch);

function handleClickNav() {
    this.style.fontStyle = "normal";
}

aboutMe.addEventListener('click', handleClickNav, aboutMe);
portfolio.addEventListener('click', handleClickNav, portfolio);
contact.addEventListener('click', handleClickNav, contact);
resume.addEventListener('click', handleClickNav, resume);

var sec1 = document.getElementById('card1');
var sec2 = document.getElementById('card2');
var sec3 = document.getElementById('card3');
var sec4 = document.getElementById('card4');

var cardContainer = document.querySelector("cardContainer");

function cardClick() {
  var num = this.dataset.number;
  // Store html in variable with changes based on which section we are targeting
  const html = "<div id='H" + num + "'><h1 class='cardHeader__text-" + num + "'></h1></div><div class='cardImage' id='image" + num + "'></div>"

  // when card is clicked, change html
  if (this.innerHTML.length < 98 ){
    this.innerHTML = "<div class=cardInfo__1 card1Alt><span>Info Card</span><div class='cardInfo__text-" + num + "'></div></div>"
  }
  else {
    this.innerHTML = html; // Set html equal to html variable we made earlier
  }
}
// create togglable variable
var cardFlip = false;

sec1.addEventListener('click', cardClick);
sec2.addEventListener('click', cardClick);
sec3.addEventListener('click', cardClick);
sec4.addEventListener('click', cardClick);

// Change class to mobile version
function myFunction(x) {
    if (x.matches) { // If media query matches
        card1.classList.remove('card1Alt')
        card1.classList.add('card1')
    } else {
        card1.classList.remove('card1')
        card1.classList.add('card1Alt')
    }
  }
  
  var x = window.matchMedia("(max-width: 1000px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes 




// Scroll to Top Button
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 400px from the top of the document, show the button
mybutton.style.display = "none";
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

mybutton.addEventListener('click', topFunction)



// When hamburger menu is clicked open menu 'list'
const mobileNav__menu = document.getElementById('lineContainer')
const mobileNav__dropDown = document.getElementById('navAlt__dropDown')
const items = document.querySelectorAll(".navAlt__listItem")


function mobileNav__click() {
  if (mobileNav__dropDown.style.display == "none") {
    mobileNav__dropDown.style.display = "flex";
  } else {
    mobileNav__dropDown.style.display = "none";
  }
}

function mobileNav__dropDown__click() {
  mobileNav__dropDown.style.display = "none";
}


mobileNav__menu.addEventListener('click', mobileNav__click)
mobileNav__dropDown.addEventListener('click', mobileNav__dropDown__click)