window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const scrollPos = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const quarterPage = 0.4 * documentHeight;

    

    if (scrollPos > quarterPage) {
      navbar.classList.remove('scrolled');
        navbar.style.backgroundColor = 'rgb(97, 134, 70, 1)';
    } else {
      navbar.classList.add('scrolled');
        navbar.style.backgroundColor = 'rgb(97, 134, 70, 0)';
    }
});

var menuIcon = document.getElementById("hamburger");
var closeIcon = document.getElementById("close");
var navbar = document.getElementById("hamburger_contents");

menuIcon.addEventListener("click", function() {
  // Hide the menu icon and show the close icon
menuIcon.style.display = "none";
closeIcon.style.display = "block";
navbar.style.display = "block";
});

closeIcon.addEventListener("click", function() {
  // Hide the close icon and show the menu icon
closeIcon.style.display = "none";
menuIcon.style.display = "block";
navbar.style.display = "none";
});