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

let basket = JSON.parse(localStorage.getItem("basket"));
let cartBody = document.querySelector(".cart-body");
let notEmptyBasket = document.querySelector(".not-empty-basket");
let emptyBasket = document.querySelector(".empty-basket");
let toDiscount = document.querySelector(".span-price");
let total = 0;
let freeShiping = document.querySelector(".free-shiping-red");
let subtotalPrice = document.querySelector(".subtotal-price");
let totalPrice = document.querySelector(".total-price1");
let free = document.querySelector(".free-shiping");

if (basket.length == 0) {
    emptyBasket.classList.remove("d-none");
    notEmptyBasket.classList.add("d-none");
}
function ShowBasket() {
    cartBody.innerHTML = "";
    basket.forEach(element => {
        let tr = document.createElement("tr");
        let tdImg = document.createElement("td");
        let img = document.createElement("img");
        img.setAttribute("src", element.img);
        let span = document.createElement("span");
        span.innerHTML = element.name;
        let tdPrice = document.createElement("td");
        tdPrice.innerHTML = `$${element.price2}`;
        let tdCounts = document.createElement("td");
        tdCounts.classList.add("d-flex", "counts");
        let minusDiv = document.createElement("div");
        minusDiv.classList.add("circle", "rounded-circle", "mt-4", "me-2");
        let iconMinus = document.createElement("i");
        iconMinus.id = element.id;
        iconMinus.classList.add("fa-solid", "fa-minus");
        let countDiv = document.createElement("div");
        countDiv.classList.add("mt-4", "me-2");
        countDiv.innerHTML = element.count;
        let plusDiv = document.createElement("div");
        plusDiv.classList.add("circle", "rounded-circle", "mt-4");
        let iconPlus = document.createElement("i");
        iconPlus.id = element.id;
        iconPlus.classList.add("fa-solid", "fa-plus");
        let tdSubtotal = document.createElement("td");
        let sum = element.count * element.price2;
        sum = parseInt(sum);
        total += sum;
        tdSubtotal.innerHTML = `$${sum}`;
        let tdX = document.createElement("td");
        let iconX = document.createElement("i");
        iconX.id = element.id;
        iconX.classList.add("fa-solid", "fa-xmark");
    
        tdImg.append(img, span);
        minusDiv.append(iconMinus);
        plusDiv.append(iconPlus);
        tdCounts.append(minusDiv, countDiv, plusDiv);
        tdX.append(iconX);
        tr.append(tdImg, tdPrice, tdCounts, tdSubtotal, tdX);
        cartBody.append(tr);
    });
}
ShowBasket();
subtotalPrice.innerHTML = `$${total}`;
if (total < 50) {
    toDiscount.innerHTML = `$${50 - total}`;
    totalPrice.innerHTML = `$${total + 5}`;
    freeShiping.style.width = `${total *2 }%`;
    
}else{
    toDiscount.parentElement.innerHTML = "Your order qualifies for free shipping!";
    freeShiping.style.width = "100%";
    totalPrice.innerHTML = `$${total}`;
    freeShiping.style.backgroundColor = "green";
    free.innerHTML = "Free shipping"
    
}


 let plus = document.querySelectorAll(".fa-plus");
 let minus = document.querySelectorAll(".fa-minus");
 let remove = document.querySelectorAll(".fa-xmark");

 plus.forEach(el =>{
    el.onclick = function(){
        basket.find(x => x.id == el.id).count++;
        localStorage.setItem("basket", JSON.stringify(basket));
        window.location.reload();
    }
 });
 minus.forEach(el =>{
    el.onclick = function(){
        if (basket.find(x => x.id == el.id).count > 1) {
            basket.find(x => x.id == el.id).count--;
        }
        else{
            basket = basket.filter(x => x.id != el.id)
        }
        localStorage.setItem("basket", JSON.stringify(basket));
        window.location.reload();
    }
 });

 remove.forEach(el =>{
    el.onclick = function(){
        basket = basket.filter(x => x.id != el.id)
        localStorage.setItem("basket", JSON.stringify(basket));
        window.location.reload();
    }
 });



