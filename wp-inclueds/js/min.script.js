const nav = document.querySelector('.navbar')
fetch('../../../Pages/Nav/nav.html')
.then(res => res.text())
.then(data=>{
    nav.innerHTML=data;
})