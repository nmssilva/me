/**
 * Created by Nuno Silva on 24/02/2017.
 */

function runSite() {

    setEventListeners();
}

function setEventListeners() {

    document.getElementById("monogram").onclick = function () {
        document.getElementById("loader").style.display = "none"; //hide loader
        document.getElementById("monogramhead").style.visibility = "visible"; //make header appear
        document.body.style.overflow = "visible"; //enable scrolling
        window.scrollTo(0,0); // on top after click
    };

    document.getElementById("monogramhead").onclick = function () {
        scrollTo(document.body,0,100);
    }

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

}