burger = document.querySelector('.burger')
navbar = document.querySelector('.nav-bar')
rightnav = document.querySelector('.nav-right')
navList = document.querySelector('.nav-list')

burger.addEventListener('click', ()=> {
    rightnav.classList.toggle('visible');
    navList.classList.toggle('visible');
    navbar.classList.toggle('nav-h'); 
})