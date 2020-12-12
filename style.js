'use strict'
window.onload = function () {
  
    document.querySelector('#hide').onclick = menuHide;
    document.querySelector('#hide').onclick = menuShow;

    function menuHide () {
        document.querySelector('.menu').hidden = true;
    }

    function menuShow () {
        document.querySelector('.menu').show;
    }
 




/*
function bagbag() {
    let hide = document.querySelector('.menu');
if (hide.style.display==="none") {
hide.style.display= "block";
} else {
    hide.style.display = "none";
}
}
*/