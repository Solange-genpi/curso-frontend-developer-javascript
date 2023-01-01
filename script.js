const navEmail=document.querySelector('.navbar-email');
const MenuDesktop=document.querySelector('.desktop-menu');

navEmail.addEventListener('click',toggleMenu);

function toggleMenu(){
    MenuDesktop.classList.toggle('inactive');
}