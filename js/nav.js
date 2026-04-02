document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.nav-hamburger');
  var nav = document.querySelector('nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });

  nav.querySelectorAll('.nav-links a, .nav-cta a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
});
