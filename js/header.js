let homeMenu = document.querySelector("#menu-bar-icon");

homeMenu.addEventListener("click", () => {
    smallDeviceMenueBar.style.transition = `all 0.5s ease`; // Set transition property first
    header.insertAdjacentElement("beforebegin", smallDeviceMenueBar);

    // Delay setting the transform property until after the element is added to the DOM
    setTimeout(() => {
        smallDeviceMenueBar.style.transform = `translate(${0}px)`;
    }, 0);

    smallDeviceMenueBar.insertAdjacentElement("afterbegin", navBar);
    smallDeviceMenueBar.insertAdjacentElement("beforeend", backBtnOfHomeMenue);

    backBtnOfHomeMenue.addEventListener("click", () => {
        smallDeviceMenueBar.style.transform = `translate(${ -1000}px)`;
    });
});

let backBtnOfHomeMenue = document.createElement("i");
backBtnOfHomeMenue.classList.add("back-btn-of-home-menue", "fa-solid", "fa-angle-down");

let navBar = document.createElement("div");
navBar.innerHTML = `
<a her=""><p class="home-menue-bar-item">Home</a></p>
<a her=""><p class="home-menue-bar-item"></a></p>
<a her=""><p class="home-menue-bar-item"></a></p>
`;
navBar.classList.add("small-device-menue-box");

let smallDeviceMenueBar = document.createElement("div");
smallDeviceMenueBar.classList.add("small-device-menue");
  