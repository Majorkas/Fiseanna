const menuButton = document.getElementsByClassName('menu-button')
let mainNav = document.getElementById('main-nav')
let mottoTxt = document.getElementById('motto-text')
function init() {
  menuButton[0].addEventListener('click', () => {
    mainNav.classList.toggle('hidden');
    mottoTxt.classList.toggle('hidden');

  });

}





init()
