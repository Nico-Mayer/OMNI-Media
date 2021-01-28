document.onkeypress = function(e){

  e = e || window.event;

  if(e.keyCode === 13){
    document.documentElement.classList.toggle('dark-mode');

  }


};
const darkModeBtn = document.querySelector('.dark-mode-btn');
darkModeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
});

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const navbar = document.querySelector('.nav-bar');
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navbar.classList.add('open_menu');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navbar.classList.remove('open_menu');
    menuOpen = false;
  }
});