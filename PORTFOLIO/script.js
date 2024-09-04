const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

// Toggle menu visibility when the hamburger is clicked
hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');

    // Toggle between showing the hamburger icon and cross icon
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const crossIcon = document.querySelector('.cross-icon');
    
    hamburgerIcon.classList.toggle('show');
    crossIcon.classList.toggle('show');
});
