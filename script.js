(function () {
  'use strict';

  // ---------- Mobile Navigation Toggle ----------
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu when a link is clicked
  var links = navLinks.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ---------- Contact Form ----------
  var form = document.getElementById('contactForm');
  var toast = document.getElementById('toast');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Show toast
    toast.classList.add('visible');

    // Reset form
    form.reset();

    // Hide toast after 4 seconds
    setTimeout(function () {
      toast.classList.remove('visible');
    }, 4000);
  });
})();
