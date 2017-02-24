/**
 * Created by Nuno Silva on 24/02/2017.
 */

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    fade(document.getElementById("loader"));
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}