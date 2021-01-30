

///////////////* DARK MODE TOGGL */////////////////
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

///////////////* BURGER BUTTON */////////////////

const burgerBtn = document.querySelector('.burger-btn');
let menuOpen = false;
const navbar = document.querySelector('.nav-bar');
burgerBtn.addEventListener('click', () => {
  if(!menuOpen) {
    burgerBtn.classList.add('open');
    navbar.classList.add('open_menu');
    menuOpen = true;
  } else {
    burgerBtn.classList.remove('open');
    navbar.classList.remove('open_menu');
    menuOpen = false;
  }
});

/////////////* BUTTON SOCIAL MEDIA */////////////////

const socailMenuBtn = document.querySelector('.menu-btn-social-media');
let socialNavBarOpen = false;
const socialNavBar = document.querySelector('.social-nav-bar');
socailMenuBtn.addEventListener('click', () => {
  if(!socialNavBarOpen) {
    socialNavBar.classList.add('open-social-bar');
    socialNavBarOpen = true;
  } else {
    socialNavBar.classList.remove('open-social-bar');
    socialNavBarOpen = false;
  }
  
});