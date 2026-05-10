// hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {

  // toggle open class on both hamburger and nav
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');

});

// close menu when a nav link is clicked - mobile
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});


// active nav highlight on scroll
const sections = document.querySelectorAll('section, footer');
const links    = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {

  let currentSection = '';

  sections.forEach(function (section) {

    // get how far down the section starts
    const sectionTop    = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }

  });

  // add active class to matching nav link
  links.forEach(function (link) {
    link.classList.remove('active');

    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });

});


// navbar shadow on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {

  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
  } else {
    navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
  }

});
