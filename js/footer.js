let firstArrow = document.querySelector("#first-arrow");
let firstContainorOfFooterInfo = document.querySelector(
  "#first-footer-info-box"
);
for (let i = 1; i < firstContainorOfFooterInfo.children.length; i++) {
  firstContainorOfFooterInfo.children[i].style.display = "none";
  firstArrow.style.transform = `rotate(${90}deg)`;
}

let secondArrow = document.querySelector("#second-arrow");
let secondContainorOfFooterInfo = document.querySelector(
  "#second-footer-info-box"
);
for (let i = 1; i < secondContainorOfFooterInfo.children.length; i++) {
  secondContainorOfFooterInfo.children[i].style.display = "none";
  secondArrow.style.transform = `rotate(${90}deg)`;
}

let thirdArrow = document.querySelector("#icon-con");
let thirdContainorOfFooterInfo = document.querySelector(
  "#third-footer-info-box"
);

for (let i = 1; i < thirdContainorOfFooterInfo.children.length; i++) {
  thirdContainorOfFooterInfo.children[i].style.display = "none";
  thirdArrow.style.transform = `rotate(${90}deg)`;
}

firstArrow.addEventListener("click", () => {
  for (let i = 1; i < firstContainorOfFooterInfo.children.length; i++) {
    if (firstContainorOfFooterInfo.children[i].style.display === "block") {
      firstContainorOfFooterInfo.children[i].style.display = "none";
      firstArrow.style.transform = `rotate(${90}deg)`;
    } else {
      firstContainorOfFooterInfo.children[i].style.display = "block";
      firstArrow.style.transform = `rotate(${0}deg)`;
    }
  }
});
secondArrow.addEventListener("click", () => {
  for (let i = 1; i < secondContainorOfFooterInfo.children.length; i++) {
    if (secondContainorOfFooterInfo.children[i].style.display === "block") {
      secondContainorOfFooterInfo.children[i].style.display = "none";
      secondArrow.style.transform = `rotate(${90}deg)`;
    } else {
      secondContainorOfFooterInfo.children[i].style.display = "block";
      secondArrow.style.transform = `rotate(${0}deg)`;
    }
  }
});

thirdArrow.addEventListener("click", () => {
  for (let i = 1; i < thirdContainorOfFooterInfo.children.length; i++) {
    if (thirdContainorOfFooterInfo.children[i].style.display === "block") {
      thirdContainorOfFooterInfo.children[i].style.display = "none";
      thirdArrow.style.transform = `rotate(${90}deg)`;
    } else {
      thirdContainorOfFooterInfo.children[i].style.display = "block";
      thirdArrow.style.transform = `rotate(${0}deg)`;
    }
  }
});
