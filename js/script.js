(() => {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  const navLinks = [...document.querySelectorAll(".primary-nav a")];
  const year = document.getElementById("year");

  // Automatically update the copyright year
  if (year) year.textContent = new Date().getFullYear();

  // Close mobile navigation
  const closeMenu = () => {
    nav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
  };

  // Mobile navigation toggle
  menuToggle?.addEventListener("click", () => {
    const isOpen =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Open navigation" : "Close navigation"
    );

    nav?.classList.toggle("open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  // Close menu when a navigation link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu using Escape key
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  // Sticky header styling on scroll
  const updateHeader = () => {
    header?.classList.toggle("scrolled", window.scrollY > 24);
  };

  updateHeader();

  window.addEventListener("scroll", updateHeader, {
    passive: true
  });

  // Highlight the navigation link for the section currently in view
  const sections = navLinks
    .map(link =>
      document.querySelector(link.getAttribute("href"))
    )
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navLinks.forEach(link => {
              const active =
                link.getAttribute("href") ===
                `#${entry.target.id}`;

              link.classList.toggle("active", active);

              if (active) {
                link.setAttribute("aria-current", "location");
              } else {
                link.removeAttribute("aria-current");
              }
            });
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
      }
    );

    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  }

  // Gentle reveal-on-scroll animations
  const revealTargets = document.querySelectorAll(
    ".story-grid, .productions, .show-heading, .venue-card, " +
    ".ticket-cta, .buy-method, .team-card, .benefit-card, " +
    ".contact-layout, .faq-area"
  );

  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    revealTargets.forEach(target => {
      target.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealTargets.forEach(target => {
      revealObserver.observe(target);
    });
  }

  // Close mobile navigation when resizing to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });

})();
