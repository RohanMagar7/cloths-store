
let sign = document.querySelector("#sign");
let signform = document.querySelector("sgin-form");
let signBox = document.querySelector("sign-contenir");
let cancleIcons = document.querySelector("#cancleicon");



// event listener for close 
// cancleIcons.addEventListener("click", () => {
//     signform.style.display = `none`

// });
// event listener for oper 
sign.addEventListener("click", () => {
    console.log("cliked")
    location.assign('/page/login.html');


});