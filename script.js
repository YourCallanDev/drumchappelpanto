// ===== THE "HE'S BEHIND YOU" EASTER EGG =====
// A ghost peeks out from the side of the screen randomly
function createGhost() {
    const ghost = document.createElement('div');
    ghost.innerHTML = "👻";
    ghost.style.cssText = `
        position: fixed;
        right: -60px;
        top: ${Math.random() * 70 + 15}vh;
        font-size: 50px;
        transition: right 1s ease-in-out;
        cursor: pointer;
        z-index: 10000;
        filter: drop-shadow(0 0 10px white);
    `;
    document.body.appendChild(ghost);

    // Peek out
    setTimeout(() => { ghost.style.right = "10px"; }, 100);

    // Click to vanish
    ghost.onclick = () => {
        ghost.innerHTML = "💥";
        setTimeout(() => ghost.remove(), 300);
    };

    // Retreat after 4 seconds
    setTimeout(() => {
        if(ghost) ghost.style.right = "-60px";
        setTimeout(() => ghost.remove(), 1000);
    }, 4000);
}

// Trigger a ghost every 45 seconds
setInterval(createGhost, 45000);

// ===== MOBILE MENU TOGGLE =====
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
}

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

console.log("DAPC Magic Loaded! 🎭");
