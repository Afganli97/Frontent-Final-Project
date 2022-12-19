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
});

//----------Shop products---------

let products = [
    {   id: 1,
        name:"All Natural Italian-Style Chicken Meatballs",
        category: "Meats & Seafood",
        stars: 4,
        price1: "9.35",
        price2: "7.25",
        discount: "23",
        type: 1,
        img: "../images/Products/product-image-62-346x310.jpg",
        count: 0
    },
    {
        id: 2,
        name:"Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        category: "Biscuits & Snacks",
        stars: 4,
        price1: "4.29",
        price2: "3.29",
        discount: "24",
        type: 3,
        img: "../images/Products/product-image-60-346x310.jpg",
        count: 0
    },
    {
        id: 3,
        name:"Field Roast Chao Cheese Creamy Original",
        category: "Grocery & Staples",
        stars: 5,
        price1: "24.00",
        price2: "19.50",
        discount: "19",
        type: 2,
        img: "../images/Products/product-image-46-346x310.jpg",
        count: 0
    },
    {
        id: 4,
        name:"Blue Diamond Almonds Lightly Salted",
        category: "Grocery & Staples",
        stars: 5,
        price1: "11.68",
        price2: "10.58",
        discount: "10",
        type: 2,
        img: "../images/Products/product-image-59-346x310.jpg",
        count: 0
    },
    {
        id: 5,
        name:"Blueberries – 1 Pint Package",
        category: "Breakfast & Dairy",
        stars: 3,
        price1: "4.49",
        price2: "3.99",
        discount: "12",
        type: 3,
        img: "../images/Products/product-image-58-346x310.jpg",
        count: 0
    },
    {
        id: 6,
        name:"Fresh Organic Broccoli Crowns",
        category: "Fruits & Vegetables",
        stars: 4,
        price1: "6.77",
        price2: "4.85",
        discount: "29",
        type: 2,
        img: "../images/Products/product-image-57-346x310.jpg",
        count: 0
    },
    {
        id: 7,
        name:"Blue Diamond Almonds Lightly Salted",
        category: "Grocery & Staples",
        stars: 5,
        price1: "11.68",
        price2: "10.58",
        discount: "10",
        type: 2,
        img: "../images/Products/product-image-59-346x310.jpg",
        count: 0
    },
    {
        id: 8,
        name:"Chobani Complete Vanilla Greek Yogurt",
        category: "Breakfast & Dairy",
        stars: 5,
        price1: "5.49",
        price2: "4.49",
        discount: "19",
        type: 1,
        img: "../images/Products/product-image-50.jpg",
        count: 0
    },
    {
        id: 9,
        name:"Fresh Brown Coconut",
        category: "Fruits & Vegetables",
        stars: 5,
        price1: "19.58",
        price2: "15.48",
        discount: "21",
        type: 3,
        img: "../images/Products/product-image-56-600x540.jpg",
        count: 0
    },
    {
        id: 10,
        name:"American Cheese Singles",
        category: "Breakfast & Dairy",
        stars: 3,
        price1: "8.29",
        price2: "3.29",
        discount: "61",
        type: 3,
        img: "../images/Products/product-image-61-600x540.jpg",
        count: 0
    },
    {
        id: 11,
        name:"Canada Dry Ginger Ale – 2 L Bottle",
        category: "Beverages",
        stars: 4,
        price1: "6.45",
        price2: "3.85",
        discount: "41",
        type: 3,
        img: "../images/Products/product-image-54-600x540.jpg",
        count: 0
    },
    {
        id: 12,
        name:"Fresh Cavendish Bananas",
        category: "Fruits & Vegetables",
        stars: 5,
        price1: "8.89",
        price2: "7.58",
        discount: "15",
        type: 3,
        img: "../images/Products/product-image-52-600x540.jpg",
        count: 0
    },
    {
        id: 13,
        name:"Encore Seafoods Stuffed Alaskan Salmon",
        category: "Meats & Seafood",
        stars: 5,
        price1: "32.49",
        price2: "27.49",
        discount: "16",
        type: 3,
        img: "../images/Products/product-image-48-346x310.jpg",
        count: 0
    },
    {
        id: 14,
        name:"Fresh Organic Kiwi",
        category: "Fruits & Vegetables",
        stars: 5,
        price1: "6.28",
        price2: "5.28",
        discount: "16",
        type: 3,
        img: "../images/Products/product-image-44-600x540.jpg",
        count: 0
    },
    {
        id: 15,
        name:"Frozen Beef & Cheese Mini Tacos",
        category: "Frozen Foods",
        stars: 4,
        price1: "7.99",
        price2: "4.99",
        discount: "38",
        type: 3,
        img: "../images/Products/product-image-61-600x540.jpg",
        count: 0
    },
    {
        id: 16,
        name:"Gorton’s Beer Battered Fish Fillets",
        category: "Frozen Foods",
        stars: 4,
        price1: "4.98",
        price2: "2.98",
        discount: "41",
        type: 3,
        img: "../images/Products/product-image-41-600x540.jpg",
        count: 0
    },
    {
        id: 17,
        name:"Organic Green Grapes",
        category: "Fruits & Vegetables",
        stars: 3,
        price1: "6.75",
        price2: "5.75",
        discount: "15",
        type: 3,
        img: "../images/Products/product-image-39-600x540.jpg",
        count: 0
    },
    {
        id: 18,
        name:"Haagen-Dazs Caramel Cone Ice Cream",
        category: "Frozen Foods",
        stars: 5,
        price1: "6.48",
        price2: "3.48",
        discount: "47",
        type: 3,
        img: "../images/Products/product-image-38-600x540.jpg",
        count: 0
    },
    {
        id: 19,
        name:"Hellmann’s Mayonnaise Real",
        category: "Grocery & Staples",
        stars: 5,
        price1: "13.25",
        price2: "8.25",
        discount: "38",
        type: 3,
        img: "../images/Products/product-image-36-600x540.jpg",
        count: 0
    },
    {
        id: 20,
        name:"Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
        category: "Beverages",
        stars: 4,
        price1: "9.50",
        price2: "8.50",
        discount: "11",
        type: 3,
        img: "../images/Products/product-image-34-600x540.jpg",
        count: 0
    },
    {
        id: 21,
        name:"Nestle Original Coffee-Mate Coffee Creamer",
        category: "Breakfast & Dairy",
        stars: 5,
        price1: "13.99",
        price2: "11.99",
        discount: "15",
        type: 3,
        img: "../images/Products/product-image-32-600x540.jpg",
        count: 0
    },
    {
        id: 22,
        name:"Organic Cage-Free Grade A Large Brown Eggs",
        category: "Breakfast & Dairy",
        stars: 5,
        price1: "4.69",
        price2: "3.69",
        discount: "22",
        type: 3,
        img: "../images/Products/product-image-32-600x540.jpg",
        count: 0
    },
    {
        id: 23,
        name:"Organic Maple Syrup",
        category: "Grocery & Staples",
        stars: 5,
        price1: "5.98",
        price2: "5.28",
        discount: "12",
        type: 3,
        img: "../images/Products/product-image-28-600x540.jpg",
        count: 0
    },
    {
        id: 24,
        name:"Organic White Corn Tortilla Chips",
        category: "Biscuits & Snacks",
        stars: 4,
        price1: "5.99",
        price2: "2.99",
        discount: "51",
        type: 3,
        img: "../images/Products/product-image-28-600x540.jpg",
        count: 0
    }
];
localStorage.setItem("products",JSON.stringify(products));
let shop = document.querySelector(".shop-click");
let home = document.querySelector(".home-click");
let blog = document.querySelector(".blog-click");
let contact = document.querySelector(".contact-click");
let basket = document.querySelector(".basket-click");
let account = document.querySelector(".account-click");
basket.onclick = function(){
    window.location.href = "../Cart/index.html";
}
account.onclick = function(){
    window.location.href = "../account/index.html";
}