const nav = document.querySelector('.navbar');
fetch('../../../pages/Header/index.html')
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data;
  })

const footer = document.querySelector('#Footer')
fetch('../../../pages/Footer/index.html')
  .then(res => res.text())
  .then(data => {
    footer.innerHTML = data;
  })
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 6 seconds
}


