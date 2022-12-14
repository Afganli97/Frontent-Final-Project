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
};
let click = document.querySelectorAll(".click");
let col3 = document.querySelectorAll(".col-3");

click.forEach(element => {
    element.onclick = function(){
        col3.forEach(col => {
            if (col.classList.contains("d-none")) {
                col.classList.remove("d-none");
            }
            else{
                col.classList.add("d-none");
            }
        });
        window.scrollTo(0, 0);
    }
});