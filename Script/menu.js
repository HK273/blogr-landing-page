//onclick vs addEventListener https://medium.com/@annapeterson89/addeventlistener-vs-onclick-which-one-should-you-draft-into-your-fantasy-football-team-16ea9ae71ee0


// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

}

// Change arrow on click --> there is a bug with this in that clicking the dropdown menu items also affects the arrow - not good!

function arrow() {
    var element = document.getElementById("change");
    element.classList.toggle("arrow");
}