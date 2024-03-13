let homeMenu = document.querySelector("#menu-bar-icon");

homeMenu.addEventListener("click", () => {
    smallDeviceMenueBar.style.transition = `all 0.5s ease`; // Set transition property first
    header.insertAdjacentElement("beforebegin", smallDeviceMenueBar);

    // Delay setting the transform property until after the element is added to the DOM
    setTimeout(() => {
        smallDeviceMenueBar.style.transform = `translate(${0}px)`;
    }, 0);

    smallDeviceMenueBar.insertAdjacentElement("afterbegin", navBar);
navBar.insertAdjacentElement("beforeend", backBtnOfHomeMenue);

    backBtnOfHomeMenue.addEventListener("click", () => {
        smallDeviceMenueBar.style.transform = `translate(${ -1000}px)`;
    });
});

let backBtnOfHomeMenue = document.createElement("i");
backBtnOfHomeMenue.classList.add("back-btn-of-home-menue", "fa-solid", "fa-xmark");

let navBar = document.createElement("div");
navBar.classList.add("small-device-menue-box");
navBar.innerHTML = `<a class="home-nav-bar-item" id="menu-bar-home-nav" href="#">
<p>home</p>
</a>
<a class="home-nav-bar-item" id="menu-bar-shop-nav" href="#">
<p>Shop</p>
</a>
<a class="home-nav-bar-item" id="menu-new-in-home-nav" href="#">
<p>new in</p>
</a>`

let smallDeviceMenueBar = document.createElement("div");
smallDeviceMenueBar.classList.add("small-device-menue");
  