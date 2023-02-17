const images = [
    "0.jpg", "1.jpg", "2.jpg"
];

const chosenImae = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img")
bgImage.src = `img/${chosenImae}`;
let bgImage_src = bgImage.src;

document.body.style.backgroundImage = `url(${bgImage_src})`;
document.body.style.backgroundSize = "100% 100%";