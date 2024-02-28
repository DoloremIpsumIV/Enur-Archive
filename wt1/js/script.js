/* Developed by Rune Körnefors. The code is free to use and modify. */
/* This script file is included in every page */

// Global initialization
function init() {
    //window.addEventListener("resize",uncheckLocnav);
    lastUpdated();
    addInfoBox();
} // End init
window.addEventListener("load",init);

/*
// Uncheck the checkbox for local navigation, when the size of the window is changed
function uncheckLocnav() {
    let elem = document.getElementById("locnav-checkbox");
    if (elem) elem.checked = false;
} // End uncheckLocnav
*/

// Write date for when the HTML document was last updated
function lastUpdated() {
    let d = new Date(document.lastModified);
    document.getElementById("lastUpdated").innerHTML =
        d.getFullYear() + "-" + addZero(d.getMonth()+1) + "-" + addZero(d.getDate());
} // End lastUpdated

// Add zero, if the number is only one digit
function addZero(n) {
    if (n < 10) n = "0" + n;
    return n;
} // End addZero

function addInfoBox() {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "Obs! Detta är inte längre den officiella webbplatsen för kursen Webbteknik 1. Webbplatsen finns dock kvar, för er som vill gå tillbaks och t.ex. repetera de föreläsningar och labbar som varit. Den nya webbplatsen finns på <a href='https://medieteknik.lnu.se/wt1'>https://medieteknik.lnu.se/wt1</a>";
    let headerElem = document.querySelector("header");
    headerElem.insertBefore(newDiv, headerElem.firstElementChild);
} // End addInfoBox
