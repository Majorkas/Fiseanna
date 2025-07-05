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

// const IMG_ID_SRC_STORE_ITEM_1 = {
//   'Main-img':
//   'smaller-img1':
//   'smaller-img2':
//   'smaller-img3':
//   'smaller-img4':

// }
// const IMG_ID_SRC_STORE_ITEM_2 = {
//    'Main-img':
//   'smaller-img1':
//   'smaller-img2':
//   'smaller-img3':
//   'smaller-img4':
// }
// const IMG_ID_SRC_STORE_ITEM_3 = {
//    'Main-img':
//   'smaller-img1':
//   'smaller-img2':
//   'smaller-img3':
//   'smaller-img4':
// }
// const IMG_ID_SRC_STORE_ITEM_4 = {
//   'Main-img':
//   'smaller-img1':
//   'smaller-img2':
//   'smaller-img3':
//   'smaller-img4':
// }
// const IMG_ID_SRC_STORE_ITEM_5 = {
//    'Main-img':
//   'smaller-img1':
//   'smaller-img2':
//   'smaller-img3':
//   'smaller-img4':
// }
// const IMG_ID_SRC_STORE_ITEM_6 = {
//    'Main-img':
//   'smaller-img1':
//   'smaller-img2':
//   'smaller-img3':
//   'smaller-img4':
// }
// const IMG_ID_SRC_STORE_ITEM_7 = {
//    'Main-img':
//   'smaller-img1':
//   'smaller-img2':
//   'smaller-img3':
//   'smaller-img4':
// }
// const IMG_ID_SRC_STORE_ITEM_8 = {
//    'Main-img':
//   'smaller-img1':
//   'smaller-img2':
//   'smaller-img3':
//   'smaller-img4':
// }
// const IMG_ID_SRC_STORE_ITEM_9 = {
//    'Main-img':
//   'smaller-img1':
//   'smaller-img2':
//   'smaller-img3':
//   'smaller-img4':
// }
// const IMG_ID_SRC_STORE_ITEM_10 = {
//    'Main-img':
//   'smaller-img1':
//   'smaller-img2':
//   'smaller-img3':
//   'smaller-img4':
// }





let mainImg = document.getElementById('Main-img');
function imgSwap(imgSrc) {
  mainImg.src = imgSrc;


}
function imgSwapBack() {
  mainImg.src = "images/lake.jpg"

}
let count = 6;
function redirectPage() {
  count--;
  document.getElementById('countDown').innerHTML = count;
  if (count == 0) {
    window.location = 'index.html';
  }
}




function initIndex() {
  menuButton[0].addEventListener('click', () => {
    mainNav.classList.toggle('hidden');
    mottoTxt.classList.toggle('hidden');

  });
  Object.entries(IMG_ID_SRC).forEach(([imgId, imgSrc]) => {
    const imgElem = document.getElementById(imgId);
    imgElem.addEventListener("mouseover", () => imgSwap(imgSrc) );
    imgElem.addEventListener("mouseout", imgSwapBack);
    imgElem.addEventListener("touchstart", () => imgSwap(imgSrc) );
    imgElem.addEventListener("touchcancel", imgSwapBack);
  });

}

function initStore() {
 menuButton[0].addEventListener('click', () => {
    mainNav.classList.toggle('hidden');
    mottoTxt.classList.toggle('hidden');

  });


}

function initRedirect() {

setInterval(redirectPage,1000)

}
