const nav = document.querySelector('.navbar')
fetch('../../../pages/Header/index.html')
.then(res => res.text())
.then(data=>{
    nav.innerHTML=data;
})

const footer = document.querySelector('#Footer')
fetch('../../../pages/Footer/index.html')
.then(res => res.text())
.then(data=>{
    footer.innerHTML=data;
})