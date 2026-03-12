(function () {
  'use strict';

  // ---------- NAVBAR ----------
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  var links = navLinks.querySelectorAll('a');

  links.forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ---------- CONTACT FORM ----------
  var form = document.getElementById('contactForm');
  var toast = document.getElementById('toast');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    toast.classList.add('visible');
    form.reset();

    setTimeout(function () {
      toast.classList.remove('visible');
    }, 4000);
  });

  // ---------- HEXAGON INTERACTION ----------

  var slices = document.querySelectorAll('.slice');
  var title = document.getElementById('hexTitle');
  var desc = document.getElementById('hexDesc');

  var activeSlice = null;

  slices.forEach(function (slice) {

    // HOVER PREVIEW
    slice.addEventListener('mouseenter', function () {

      if (!activeSlice) {
        title.textContent = slice.dataset.title;
        desc.textContent = slice.dataset.desc;
      }

    });

    // REMOVE PREVIEW
    slice.addEventListener('mouseleave', function () {

      if (!activeSlice) {
        title.textContent = "";
        desc.textContent = "";
      }

    });

    // CLICK LOCK
    slice.addEventListener('click', function () {

      slices.forEach(function (s) {
        s.classList.remove('active');
      });

      slice.classList.add('active');

      title.textContent = slice.dataset.title;
      desc.textContent = slice.dataset.desc;

      activeSlice = slice;

    });

  });

})();