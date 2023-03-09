// Get the button:
let scrollUpButton = document.getElementById("myBtn");
let bars = document.getElementsByName("bar");
let lastWidth = 0;

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
window.onload = function() {resize()}
window.onresize = function() {resize()}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpButton.style.display = "block";
    } else {
        scrollUpButton.style.display = "none";
    }
}

function resize() {
    if (document.documentElement.clientWidth != lastWidth) {
        barAmount = (document.documentElement.clientWidth * 0.8 - 50) / 12;
        for (let i = 0; i < bars.length; i++) {
                bars[i].innerText = "<" + "-".repeat(barAmount) + ">";   
            }
        lastWidth = document.documentElement.clientWidth;
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}