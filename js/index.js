const menuBtn = document.querySelector('#menu');
const nav = document.querySelector('nav');
const stripe = document.querySelector('#stripe');
const Img = document.querySelector('#bigimg');
let activeImg = 0;



const galleryContent = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
]

const selectImg = i => {
    activeImg = i;
    Img.src = `./gallery/${galleryContent[i]}`;
    console.log(i);
}

const createPreviews = () => {
    galleryContent.forEach((img, i) => {
        var newPreview = document.createElement('div');
        newPreview.classList.add("preview");
        if(i == activeImg) newPreview.classList.add("active");
        newPreview.style.backgroundImage = `url(./gallery/${img})`;
        newPreview.onclick = () => selectImg(i);
        stripe.appendChild(newPreview);
    })
}
document.body.onload = () => {
    menuBtn.onclick = () => {
        nav.classList.toggle('hide');
    };
    createPreviews();
}