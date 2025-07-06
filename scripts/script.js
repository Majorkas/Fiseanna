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
let shipToIreland = 4.99
let shipToUK = 8.99
let shipToEurope = 5.50
let shipToWorld = 9.99
let importFees = 0.2
let address = document.getElementById('shipping-location')
let selectedAddress = address.options[address.selectedIndex].text;
function shippingCalcultor(selectedAddress) {
  document.getElementById('drop-selection').innerText = selectedAddress.options[address.selectedIndex].text;
  let selection = selectedAddress.value
  console.log(selection)
    if (selection === "1") {
      document.getElementById('calculator-output').innerText = shipToIreland.toFixed(2);
    } else if (selection === "2") {
      document.getElementById('calculator-output').innerText = shipToUK + ' with Import Fees the total will be ' + '€' +((shipToUK * importFees)+shipToUK).toFixed(2);
    } else if (selection === "3") {
      document.getElementById('calculator-output').innerText = shipToEurope.toFixed(2);
    } else if (selection === "4") {
      document.getElementById('calculator-output').innerText = shipToWorld + ' with Import Fees the total will be ' + '€' + ((shipToWorld * importFees)+shipToWorld).toFixed(2);
    }

}

function storeItemInit() {
 menuButton[0].addEventListener('click', () => {
    mainNav.classList.toggle('hidden');
    mottoTxt.classList.toggle('hidden');

  });

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
  shippingCalcultor(address)
  document.getElementById('shipping-calculator').addEventListener('change', () => shippingCalcultor(address))



}

function initRedirect() {

  setInterval(redirectPage, 1000)

}
