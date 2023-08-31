var aboutMe = document.getElementById("abt-me-link");
var portfolio = document.getElementById("portfolio-link");
var contact = document.getElementById("contact-link");
var resume = document.getElementById("resume-link");
var home = document.getElementById("home-link");

var theme = document.getElementById("theme-btn");

function handleClickNav() {
    this.style.fontStyle = "normal";
}

aboutMe.addEventListener('click', handleClickNav, aboutMe);
portfolio.addEventListener('click', handleClickNav, portfolio);
contact.addEventListener('click', handleClickNav, contact);
resume.addEventListener('click', handleClickNav, resume);

var sec1 = document.getElementById('sectionOne');
var sec2 = document.getElementById('sectionTwo');
var sec3 = document.getElementById('sectionThree');
var sec4 = document.getElementById('sectionFour');

function cardClick() {
    this.remove();
}

sec1.addEventListener('click', cardClick, sec1);
sec2.addEventListener('click', cardClick, sec2);
sec3.addEventListener('click', cardClick, sec3);
sec4.addEventListener('click', cardClick, sec4);


function themeSwitch(){
    theme.href = ""
}
theme.addEventListener('click', themeSwitch);