let locationClose = document.querySelector(".x-custom");
let loc = document.querySelector(".location");
let locationBackground = document.querySelector(".location-background");
let locationBox = document.querySelector(".location-box");
let cat = document.querySelector(".categories");
let catDrop = document.querySelector(".categories-drop");
let left = `<div><i class="fa-solid fa-chevron-left"></i></div>`;
let right = `<div><i class="fa-solid fa-chevron-right"></i></div>`
loc.onclick = function () {
    locationBackground.classList.remove("close");
};
locationClose.onclick = function(){
    locationBackground.classList.add("close");
};
cat.onclick = function(){
        catDrop.classList.toggle("close");
}
$(document).ready(function(){
    $('.slick-container').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear'
    });
  });
  $(left).css({
    "position": "absolute",
    "top": "50%",
    "left": "0",
    "width": "40px",
    "height": "40px0",
    "border": "1px solid gray",
    "border-radius": "50%" 
});
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [left,right],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1199:{
            items:5
        }
    }
})