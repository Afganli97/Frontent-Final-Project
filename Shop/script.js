let locationClose = document.querySelector(".x-custom");
let loc = document.querySelector(".location");
let locationBackground = document.querySelector(".location-background");
let locationBox = document.querySelector(".location-box");
let cat = document.querySelector(".categories");
let catDrop = document.querySelector(".categories-drop");
loc.onclick = function () {
    locationBackground.classList.remove("close");
};
locationClose.onclick = function(){
    locationBackground.classList.add("close");
};
cat.onclick = function(){
        catDrop.classList.toggle("close");
}