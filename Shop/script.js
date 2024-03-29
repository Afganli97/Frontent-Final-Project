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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
        id: 14,
        name:"Frozen Beef & Cheese Mini Tacos",
        category: "Frozen Foods",
        stars: 4,
        price1: "7.99",
        price2: "4.99",
        discount: "38",
        type: 3,
        img: "../images/Products/product-image-43-600x540.jpg",
        count: 0
    },
    {
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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
        id: 20,
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
        id: 21,
        name:"Organic Cage-Free Grade A Large Brown Eggs",
        category: "Breakfast & Dairy",
        stars: 5,
        price1: "4.69",
        price2: "3.69",
        discount: "22",
        type: 3,
        img: "../images/Products/product-image-30-600x540.jpg",
        count: 0
    },
    {
        id: 22,
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
        id: 23,
        name:"Organic White Corn Tortilla Chips",
        category: "Biscuits & Snacks",
        stars: 4,
        price1: "5.99",
        price2: "2.99",
        discount: "51",
        type: 3,
        img: "../images/Products/product-image-27-600x540.jpg",
        count: 0
    },
    {
        id: 24,
        name:"Original Buttery Spread",
        category: "Grocery & Staples",
        stars: 5,
        price1: "3.29",
        price2: "2.29",
        discount: "31",
        type: 3,
        img: "../images/Products/product-image-26-600x540.jpg",
        count: 0
    }

];
localStorage.setItem("products",JSON.stringify(products));

let productItems = JSON.parse(localStorage.getItem("products"));
let shopShowCarts = document.querySelector(".shop-show-carts");
let blogNav = document.querySelector(".blog-nav");
let showValue = document.querySelector(".show-value");
let pages = document.querySelectorAll(".nav-page");
let next = document.querySelector(".nav-next");
let prev = document.querySelector(".nav-prev");
let cellValues = document.querySelectorAll(".cell-value");
let showValues = document.querySelectorAll(".show-value-click");
let cellArr = [...cellValues];
let count = 8;

let shopCartsPage1 = document.createElement("div");
let shopCartsPage2 = document.createElement("div");
let shopCartsPage3 = document.createElement("div");
shopCartsPage1.classList.add("shop-carts", "shop-grid-4");
shopCartsPage2.classList.add("shop-carts", "shop-grid-4");
shopCartsPage3.classList.add("shop-carts", "shop-grid-4");

function shows(num){
    shopShowCarts.innerHTML = "";
    shopCartsPage1.innerHTML = "";
    shopCartsPage2.innerHTML = "";
    shopCartsPage3.innerHTML = "";
    productItems.forEach(element => {
        let product = document.createElement("div");
        product.classList.add("product-card", "border", "p-3", "position-relative");
        product.id = element.id;
        let img = document.createElement("img");
        img.setAttribute("src", element.img);
        img.classList.add("img-click");
        img.id = element.id;
        let p = document.createElement("p");
        p.classList.add("card-description", "blue");
        p.innerHTML = element.name;
        let inStock = document.createElement("span");
        inStock.classList.add("in-stock");
        inStock.innerHTML = "IN STOCK";
        let stars = document.createElement("div");
        stars.classList.add("stars", "d-flex", "align-items-center");
        for (let i = 1; i < 6; i++) {
            let star = document.createElement("i");
            if (element.stars < i ){
                star.classList.add("fa-solid", "fa-star", "gray");
            }
            else{
                star.classList.add("fa-solid", "fa-star", "yellow");
            }
            star.classList.add("me-1");
            stars.append(star);
        }
        let secondary = document.createElement("span");
        secondary.classList.add("text-secondary");
        secondary.innerHTML = 1;
        let buttons = document.createElement("div");
        buttons.classList.add("buttons");
        let circle1 = document.createElement("div");
        circle1.classList.add("circle", "d-flex", "justify-content-center", "align-items-center", "border", "rounded-circle");
        let maximize = document.createElement("i");
        maximize.classList.add("fa-solid", "fa-maximize");
        let circle2 = document.createElement("div");
        circle2.classList.add("circle", "d-flex", "justify-content-center", "align-items-center", "border", "rounded-circle", "mt-2");
        let regular = document.createElement("i");
        regular.classList.add("fa-regular", "fa-heart");
        let addToCards = document.createElement("div");
        addToCards.classList.add("add-tocards", "d-flex", "justify-content-center", "align-items-center", "rounded-pill");
        let addToCart = document.createElement("span");
        addToCart.classList.add("fw-semibold");
        addToCart.innerHTML = "Add to cart";
        let prices = document.createElement("div");
        prices.classList.add("prices");
        let price1 = document.createElement("span");
        price1.classList.add("text-muted", "text-decoration-line-through", "fs-6", "fw-semibold");
        price1.innerHTML = element.price1;
        let price2 = document.createElement("span");
        price2.classList.add("text-danger", "fs-5", "fw-semibold");
        price2.innerHTML = element.price2;
        let discount = document.createElement("div");
        discount.classList.add("discount-card");
        discount.innerHTML = element.discount + "%";
        circle1.append(maximize);
        circle2.append(regular);
        buttons.append(circle1,circle2);
        addToCards.append(addToCart);
        stars.append(secondary, buttons, addToCards);
        prices.append(price1, price2);
        product.append(img, p, inStock, stars, prices, discount);
        if (num >= element.id){
            shopCartsPage1.append(product);
        }
        else if ((num * 2) >= element.id) {
            shopCartsPage2.append(product);
        }
        else{
            shopCartsPage3.append(product);
        }
    });
    let page = document.querySelector(".clicked");
    switch (page.innerHTML) {
        case "1":
            shopShowCarts.append(shopCartsPage1);
        break;
        case "2":
            shopShowCarts.append(shopCartsPage2);
        break;
        case "3":
            shopShowCarts.append(shopCartsPage3);
        break;
    }
};

shows(count);

let addToCard = document.querySelectorAll(".add-tocards");

cellValues.forEach(element => {
    element.onclick = function(){
        for (let i = 0; i < cellArr.length; i++) {
            cellValues[i].classList.remove("text-secondary");
            if (cellArr[i] == element) {
                shopCartsPage1.setAttribute("class", `shop-carts shop-grid-${i+1}`);
                shopCartsPage2.setAttribute("class", `shop-carts shop-grid-${i+1}`);
                shopCartsPage3.setAttribute("class", `shop-carts shop-grid-${i+1}`);
            }
            else{
                cellValues[i].classList.add("text-secondary");
            }
        }
    }
});


showValue.onclick = function(){
    showValue.lastElementChild.classList.toggle("d-none");
}

showValues.forEach(element => {
    element.onclick = function(){
        showValue.firstElementChild.innerHTML = element.innerHTML;
        count = element.innerHTML;
        switch (element.innerHTML){
            case "8":
                pages.forEach(element => {element.classList.remove("d-none");});
                blogNav.classList.remove("d-none");
                break;
            case "16":
                pages.forEach(element => {element.classList.remove("d-none");});
                blogNav.classList.remove("d-none");
                pages[2].classList.add("d-none");
                break;
            case "24":
                pages.forEach(element => {element.classList.remove("d-none");});
                blogNav.classList.add("d-none");
                break;
        }
        shows(count);
        addToCard = document.querySelectorAll(".add-tocards");
        addFunc();
    }
});
pages.forEach(element => {
    element.onclick = function(){
        pages.forEach(el => {
            el.classList.remove("clicked");
        });
        element.classList.add("clicked");
        switch (element.innerHTML) {
            case "1":
                prev.classList.remove("d-none");
                prev.classList.add("d-none");
                next.classList.remove("d-none");
            break;
            case "2":
                if (count > 8) {
                    next.classList.remove("d-none");
                    next.classList.add("d-none");
                    prev.classList.remove("d-none");
                }
                else{
                    next.classList.remove("d-none");
                    prev.classList.remove("d-none");
                }
            break;
            case "3":
                next.classList.remove("d-none");
                next.classList.add("d-none");
                prev.classList.remove("d-none");
            break;
        }
        shows(count);
        addToCard = document.querySelectorAll(".add-tocards");
        addFunc();
    }
})


//---------add to basket logic-------
let basket = JSON.parse(localStorage.getItem("basket"));
if (!basket) {
    localStorage.setItem("basket", JSON.stringify([]))
    basket = JSON.parse(localStorage.getItem("basket"));
}
addFunc();
let totalPriceNav = document.querySelector(".total-price-nav");
let sum = 0;
function addFunc() {
    addToCard.forEach(element => {
        element.onclick = function(){
            
            if (basket.find(el => el.id == this.parentElement.parentElement.id)) {
                basket.find(el => el.id == this.parentElement.parentElement.id).count++;
            }
            else{
                let product = products.find(el => el.id == this.parentElement.parentElement.id);
                product.count++;
                basket.push(product);
            }
            localStorage.setItem("basket", JSON.stringify(basket));
           
        }
    });
}
let productsHover = document.querySelector(".products-hover");


basket.forEach(el => {
    let product = document.createElement("div");
    product.classList.add("small-product", "p-2", "border-bottom", "d-flex");
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("small-img", "position-relative");
    let img = document.createElement("img");
    img.setAttribute("src", el.img);
    let xRemove = document.createElement("div")
    xRemove.classList.add("x-remove");
    xRemove.id = el.id;
    xRemove.innerHTML = "x";
    let detailsDiv = document.createElement("div");
    detailsDiv.classList.add("small-details");
    let p = document.createElement("p");
    p.innerHTML = el.name;
    let spanCount = document.createElement("span");
    spanCount.classList.add("small-details");
    spanCount.innerHTML = `${el.count} x `;
    let spanPrice = document.createElement("span");
    spanPrice.classList.add("small-price");
    spanPrice.innerHTML = `$${el.price2}`;

    imgDiv.append(img, xRemove);
    detailsDiv.append(p, spanCount, spanPrice);
    product.append(imgDiv, detailsDiv);
    productsHover.append(product);

    sum += el.count * el.price2;
    sum = parseInt(sum);
    productsHover.nextElementSibling.lastElementChild.innerHTML = `$${sum}`;

});
totalPriceNav.innerHTML = `$${sum}`;
let removeButtons = document.querySelectorAll(".x-remove");
removeButtons.forEach(el => {
    el.onclick = function(){
        basket = basket.filter(x => x.id != el.id)
        localStorage.setItem("basket", JSON.stringify(basket));
        window.location.reload();
    }
});