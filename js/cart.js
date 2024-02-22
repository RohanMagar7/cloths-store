// code for cart slider
let cart = document.querySelector("#cart");
let cartBar = document.createElement("div");
let cartBox = document.createElement("div");
let header = document.querySelector("header");

cartBar.classList.add("cart-bar");
header.insertAdjacentElement("beforebegin", cartBar);
cartBar.insertAdjacentElement("afterbegin", cartBox);
cartBox.classList.add("cart-box");

let p1 = document.createElement("p");
p1.innerText = "YOUR CART (0)";
p1.classList.add("cart-text");
cartBox.insertAdjacentElement("afterbegin", p1);

let cancleIcon = document.createElement("i");
cancleIcon.classList.add("fa-solid");
cancleIcon.classList.add("fa-x");
cancleIcon.classList.add("cart-text");
cartBox.insertAdjacentElement("beforeend", cancleIcon);
cancleIcon.style.cursor = "pointer";

let cartIcon = document.createElement("i");
cartIcon.classList.add("fa-solid");
cartIcon.classList.add("fa-bag-shopping");
cartIcon.classList.add("cart-text");
cartBar.insertAdjacentElement("beforeend", cartIcon);
cartIcon.classList.add("cart-icon");

let emptyCartMsg = document.createElement("p");
emptyCartMsg.innerText = "You don't have any item's in cart yet.";
cartIcon.insertAdjacentElement("afterend", emptyCartMsg);
emptyCartMsg.style.textAlign = "center";
emptyCartMsg.style.paddingTop = "10px";

let shoppingBtn = document.createElement("button");
shoppingBtn.innerText = "continue shopping";
shoppingBtn.style.textTransform = "uppercase"
shoppingBtn.classList.add("cart-shopping-btn");
emptyCartMsg.insertAdjacentElement("afterend", shoppingBtn);

shoppingBtn.onclick = function () {
    location.assign('/page/product.html');
};

// event listener for close cartbar
cancleIcon.addEventListener("click", () => {
    cartBar.style.transform = `translateX(400px)`

});
// event listener for oper cartbar
cart.addEventListener("click", () => {
    cartBar.style.display = "block"
    cartBar.style.transform = `translateX(0px)`

});

let addedProduct = document.createElement("div");
addedProduct.innerHTML = `<div class="cart-delevery-msg">
        <i></i> <span>You have got <strong>FREE SHIPPING</strong></span>
    </div>
    <div class="cart-added-box">
        <!-- flex -column -->
        <div class="added-product">
            <div class="add-p-img">
                <img src="asset/blog-images/blocg-img-1.jpg" alt="Err">
            </div>
            <div class="added-p-info">
                <div class="added-p-name-remove">
                    <p>inerbloom puffer jacket</p>
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="added-p-qontity-price">
                    <p class="quentity-box">
                        <span>-</span>
                        <span>2</span>
                        <span>+</span>
                    </p>
                    <p class="price"> $500</p>
                </div>
            </div>
        </div>
    </div>
`;

shoppingBtn.insertAdjacentElement("afterend", addedProduct);




