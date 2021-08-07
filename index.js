/* Sticky Navbar */

window.onscroll = function() {myFunction()};
  
  var header = document.getElementById("nav__secondary");
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

/* For Modal Opening and Closing */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("nav__modal__btn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* For Showing / Hiding Search Bar */

// declaring variables
var elemNavMain = document.getElementById("nav__main");
var elemNavSearch = document.getElementById("nav__search__main");

// Show Search Bar Navigation Menu
function showSearch() {
  elemNavMain.classList.add("nav__hidden");
  elemNavSearch.classList.remove("nav__hidden");
}

// Show Default WhatsApp Home
function showHome() {
  elemNavSearch.classList.add("nav__hidden");
  elemNavMain.classList.remove("nav__hidden");
}

// Secondary Main Navigation variables 
var cam = document.getElementById("show__camera");
var chat = document.getElementById("show__chat");
var stat = document.getElementById("show__status");
var call = document.getElementById("show__calls");

// Adding active class on click to camera
function addActiveClass_01() {
  cam.classList.add("active");
  chat.classList.remove("active");
  stat.classList.remove("active");
  call.classList.remove("active");
}

// Adding active class on click to chat
function addActiveClass_02() {
  cam.classList.remove("active");
  chat.classList.add("active");
  stat.classList.remove("active");
  call.classList.remove("active");
}

// Adding active class on click to status
function addActiveClass_03() {
  cam.classList.remove("active");
  chat.classList.remove("active");
  stat.classList.add("active");
  call.classList.remove("active");
}

// Adding active class on click to calls
function addActiveClass_04() {
  cam.classList.remove("active");
  chat.classList.remove("active");
  stat.classList.remove("active");
  call.classList.add("active");
}