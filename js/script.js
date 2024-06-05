// Toggle class active

const navbarNav = document.querySelector 
('.navbar-nav');
// ketika hamburger diclik
document.querySelector ('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//Menghilangkan sidebar dengan click diluar sidebar

const hamburger = document.querySelector
('#hamburger-menu');

document.addEventListener('click', function (e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains (e.target)){
        navbarNav.classList.remove ('active');
    }
    
})