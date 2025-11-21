// script.js - shared site JS (menu + submenu + helpers)

document.addEventListener('DOMContentLoaded', function () {
  // mobile nav toggle
  window.toggleMenu = function () {
    const nav = document.getElementById('mobileNav');
    if (!nav) return;
    nav.classList.toggle('open');
    // lock scroll when menu open
    if (nav.classList.contains('open')) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  };

  // submenu toggles (delegated)
  window.toggleSubmenu = function (el) {
    if (!el) return;
    const submenu = el.parentElement.querySelector('.mobile-submenu');
    if (!submenu) return;
    const open = submenu.style.display === 'block';
    submenu.style.display = open ? 'none' : 'block';
    el.querySelector('.arrow') && (el.querySelector('.arrow').textContent = open ? '▶' : '▼');
  };

  // close mobile menu when clicking outside it (on small screens)
  document.addEventListener('click', function (e) {
    const nav = document.getElementById('mobileNav');
    const btn = e.target.closest('.hamburger');
    if (!nav) return;
    if (nav.classList.contains('open') && !e.target.closest('#mobileNav') && !btn) {
      nav.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Small helper: close popup by function if present
  window.closePopup = function () {
    const p = document.getElementById('popup');
    if (!p) return;
    p.classList.remove('show');
  };
});
