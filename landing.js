window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const scrollPos = window.pageYOffset;

    if (scrollPos > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const navIcon = document.getElementById('nav-icon');
const navMenu = document.getElementById('nav-menu');

navIcon.addEventListener('click', function () {
    navMenu.classList.toggle('show');
    navIcon.classList.toggle('open');
});
