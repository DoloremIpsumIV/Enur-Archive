/* Developed by Rune Körnefors. The code is free to use and modify. */
/* This script file is included in every page */

// Global initialization
function init() {
    lastUpdated();
} // End init
window.addEventListener("load",init);

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
