// script.js - site-wide interactions

document.addEventListener('DOMContentLoaded', () => {
  // toggle mobile nav
  window.toggleMenu = function () {
    const nav = document.getElementById('mobileNav');
    if (!nav) return;
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  };

  // toggle mobile submenu
  window.toggleSubmenu = function (btn) {
    if (!btn) return;
    const submenu = btn.nextElementSibling;
    if (!submenu) return;
    const isOpen = submenu.style.display === 'block';
    submenu.style.display = isOpen ? 'none' : 'block';
    const arrow = btn.querySelector('.arrow');
    if (arrow) arrow.textContent = isOpen ? '▶' : '▼';
  };

  // click outside to close mobile menu
  document.addEventListener('click', (e) => {
    const nav = document.getElementById('mobileNav');
    const hamburger = e.target.closest('.hamburger');
    if (!nav) return;
    if (nav.classList.contains('open') && !e.target.closest('#mobileNav') && !hamburger) {
      nav.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // popup helpers
  window.openPopup = function (id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('show');
  };
  window.closePopup = function (id = 'popup') {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('show');
  };

  function openBio(img, name, role, bio) {
  document.getElementById("bioImg").src = img;
  document.getElementById("bioName").textContent = name;
  document.getElementById("bioRole").textContent = role;
  document.getElementById("bioText").textContent = bio;

  document.getElementById("bioModalOverlay").classList.add("active");
}

function closeBio() {
  document.getElementById("bioModalOverlay").classList.remove("active");
}

  // team modal open/close
  window.openBio = function (data) {
    const overlay = document.getElementById('bioModalOverlay');
    if (!overlay) return;
    overlay.querySelector('.modal-photo').src = data.img;
    overlay.querySelector('.modal-photo').alt = data.name;
    overlay.querySelector('.modal-name').textContent = data.name;
    overlay.querySelector('.modal-role').textContent = data.role;
    overlay.querySelector('.modal-bio').textContent = data.bio;
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  };
  window.closeBio = function () {
    const overlay = document.getElementById('bioModalOverlay');
    if (!overlay) return;
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  };

  // block keyboard navigation under soldout overlay (basic)
  document.addEventListener('keydown', (e) => {
    const sold = document.querySelector('.content-area .soldout-overlay');
    if (!sold) return;
    if (sold && sold.offsetParent !== null) {
      if (e.key === 'Tab') e.preventDefault();
    }
  });
});
// --------------------
// BIO MODAL FUNCTIONS
// --------------------

function openBio(image, name, role, text) {
  const overlay = document.getElementById("bioModalOverlay");

  document.getElementById("bioImg").src = image;
  document.getElementById("bioImg").alt = name;
  document.getElementById("bioName").textContent = name;
  document.getElementById("bioRole").textContent = role;
  document.getElementById("bioText").textContent = text;

  overlay.style.display = "flex";
}

function closeBio() {
  document.getElementById("bioModalOverlay").style.display = "none";
}

// Close modal when clicking outside the box
document.getElementById("bioModalOverlay").addEventListener("click", function (e) {
  if (e.target === this) {
    closeBio();
  }
});


// --------------------
// MOBILE NAV FUNCTIONS
// --------------------

function toggleMenu() {
  const nav = document.getElementById("mobileNav");
  nav.classList.toggle("open");
}

function toggleSubmenu(button) {
  const submenu = button.nextElementSibling;
  const arrow = button.querySelector(".arrow");

  submenu.classList.toggle("open");

  if (submenu.classList.contains("open")) {
    arrow.textContent = "▼";
  } else {
    arrow.textContent = "▶";
  }
}

