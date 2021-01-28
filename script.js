let darkMode = localStorage.getItem('darkMode');
let togglActive = localStorage.getItem('togglActive');
const darkModeBtn = document.querySelector('.dark-mode-btn');

const enableDarkMode = ()=>{
  document.documentElement.classList.add('dark-mode');
  darkModeBtn.classList.add('active');
  localStorage.setItem('darkMode', 'enabled');
};
const disableDarkMode = ()=>{
  document.documentElement.classList.remove('dark-mode');
  darkModeBtn.classList.remove('active');
  localStorage.setItem('darkMode', null);
};
if(darkMode == 'enabled'){
  enableDarkMode();
};

darkModeBtn.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if(darkMode != 'enabled'){
    enableDarkMode();
  }
  else{
    disableDarkMode();
  }
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