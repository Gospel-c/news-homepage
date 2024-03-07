const closeIcon = document.querySelector(".nav__menu-close-icon");
const openMenuIcon = document.getElementById("nav-menu-icon");
const navMenu = document.querySelector(".nav__menu");
const overlay = document.querySelector(".overlay");

function menu() {
   
    openMenuIcon.addEventListener('click', () => {
        console.log("clicked!!")
        navMenu.classList.add('active');
        overlay.classList.add('active');
    })
    
    closeIcon.addEventListener('click', () => {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
    })
}

menu();