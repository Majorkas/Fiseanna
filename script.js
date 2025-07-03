const menuButton = document.getElementsByClassName('menu-button')
let mainNav = document.getElementById('main-nav')
let mottoTxt = document.getElementById('motto-text')
const IMG_ID_SRC = {
  'Main-img': "images/lake.jpg",
  'smaller-img1': "images/black-castle.jpg",
  'smaller-img2': "images/faces.jpg",
  'smaller-img3': "images/rock.jpg",
  'smaller-img4': "images/bike.jpeg",
}

let mainImg = document.getElementById('Main-img');
function imgSwap(imgSrc) {
  mainImg.src = imgSrc;


}
function imgSwapBack() {
  mainImg.src = "images/lake.jpg"

}


function init() {
  menuButton[0].addEventListener('click', () => {
    mainNav.classList.toggle('hidden');
    mottoTxt.classList.toggle('hidden');

  });
  Object.entries(IMG_ID_SRC).forEach(([imgId, imgSrc]) => {
    const imgElem = document.getElementById(imgId);
    imgElem.addEventListener("mouseover", () => imgSwap(imgSrc) );
    imgElem.addEventListener("mouseout", imgSwapBack);
  });

}
init()
