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
        img: "../images/Products/product-image-62-346x310.jpg"
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
        img: "../images/Products/product-image-60-346x310.jpg"
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
        img: "../images/Products/product-image-46-346x310.jpg"
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
        img: "../images/Products/product-image-59-346x310.jpg"
    },
    {
        id: 5,
        name:"Blueberries – 1 Pint Package",
        category: "Breakfast & Dairy",
        stars: 3,
        price1: "4.49",
        price2: "3.99",
        discount: "12",
        type: 2,
        img: "../images/Products/product-image-59-346x310.jpg"
    },
    
];
