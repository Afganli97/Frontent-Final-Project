let locationClose = document.querySelector(".x-custom");
let loc = document.querySelector(".location");
let locationBackground = document.querySelector(".location-background");
let locationBox = document.querySelector(".location-box");
loc.onclick = function () {
    locationBackground.classList.remove("close");
};
locationClose.onclick = function(){
    locationBackground.classList.add("close");
};

