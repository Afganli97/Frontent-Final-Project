let locationClose = document.querySelector(".x-custom");
let loc = document.querySelector(".location");
let locationBackground = document.querySelector(".location-background");
let locationBox = document.querySelector(".location-box");
let cat = document.querySelector(".categories");
let catDrop = document.querySelector(".categories-drop");
let login = document.querySelector(".login-text");
let register = document.querySelector(".login-register");
let loginBox = document.querySelector(".login-animate");
loc.onclick = function () {
    locationBackground.classList.remove("close");
};
locationClose.onclick = function(){
    locationBackground.classList.add("close");
};
cat.onclick = function(){
        catDrop.classList.toggle("close");
};
register.onclick = function(){
    loginBox.style.left = "-100%";
    register.style.color = "black";
    login.style.color = "gray";
}
login.onclick = function(){
    loginBox.style.left = "0";
    register.style.color = "gray";
    login.style.color = "black";
}