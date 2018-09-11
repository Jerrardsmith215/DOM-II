// Your code goes here
({
    plugins: 'jsdom-quokka-plugin',
    jsdom: {html: `<div id="test">Hello</div>`}
})
//1. Fun Text, mouseover
const funText = document.querySelectorAll("h2");

funText.forEach(function (el) { 
    el.addEventListener('mouseover', function (event) {this.style.color="yellow";});
});

//2. Images get smaller, click
const images = document.querySelectorAll("img");

images.forEach(function (el) {
    el.addEventListener('click', function(event)  {
        this.style.width = "50%";});
});

//3. Alert popup, drag
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function (el) {
    el.addEventListener('dragstart', function (event) {
        alert("Can't touch this!");});
});

//4. Alert popup, rightclick
paragraphs.forEach(function (el) {
    el.addEventListener('contextmenu', function (event) {
        this.innerHTML = "Copycat!";});
});

//5. Turn nav red, mousedown
const navItems = document.querySelectorAll("a");
console.log(navItems);

navItems.forEach (function (el) {
    el.addEventListener('mousedown', function (event) {
    this.style.color = "red";})});

//6. Turn nav black, up
navItems.forEach (function (el) {
    el.addEventListener('mouseup', function (event) {
    this.style.color = "black";})});

//7. Wide logo "a" key down
const logo = document.querySelector(".logo-heading");

document.addEventListener("keydown", function (event) {
    logo.innerHTML = "SUPER FUN BUS!";
});

//8.  Loaded page, load
window.addEventListener("load", function(event) {
    alert("Welcome, page loaded successfully!");
});

//9. Footer color, mousenter
const footer = document.querySelector(".footer");

function random(number) {
    return Math.floor(Math.random()*(number+1));
}
var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';

footer.addEventListener("mouseover", function (event) {
    footer.style.background = rndCol;
});

//10. Footer color, mouseout

footer.addEventListener("mouseout", function (event) {
    footer.style.background = "#FFEBCD";
})