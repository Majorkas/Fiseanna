const menuButton = document.getElementsByClassName('menu-button')
const mainNav = document.getElementById('main-nav')
const mottoTxt = document.getElementById('motto-text')
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
let count = 6;
function redirectPage() {
  count--;
  document.getElementById('countDown').innerHTML = count;
  if (count == 0) {
    window.location = 'index.html';
  }
}
const shipToIreland = 4.99
const shipToUK = 8.99
const shipToEurope = 5.50
const shipToWorld = 9.99
const importFees = 0.2
const address = document.getElementById('shipping-location')

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
  //* moved selected address here to prevent errors on other pages *//
  let selectedAddress = address.options[address.selectedIndex].text;


}

function initRedirect() {

  setInterval(redirectPage, 1000)

}
