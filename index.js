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




}