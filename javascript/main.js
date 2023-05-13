let hamburger = document.querySelector('.hamburger');
let mobileNavigation = document.querySelector('.mobile-navigation');
let navUI = document.querySelectorAll('.nav-ui');

hamburger.addEventListener('click', function() {
    mobileNavigation.classList.toggle('active');

});

navUI.forEach(nav => nav.addEventListener('click', activeClassRemover))

function activeClassRemover() {
    mobileNavigation.classList.remove('active');
}

document.querySelector('.gallary').addEventListener('touchend', activeClassRemover);
document.querySelector('.gallary').addEventListener('touchmove', activeClassRemover);
document.querySelector('.gallary').addEventListener('wheel', activeClassRemover);
document.querySelector('.gallary').addEventListener('click', activeClassRemover);