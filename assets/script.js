function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

/* EVENTS LOAD */
fetch('/events.json')
.then(res => res.json())
.then(data => {
  const container = document.getElementById("eventsContainer");
  if(!container) return;

  const today = new Date();

  data.events.forEach(event => {

    if(event.soldOut === true) return;

    const card = document.createElement("div");
    card.className = "event-card";

    let datesHTML = "";
    event.dates.forEach(d => {
      datesHTML += `<p>${d}</p>`;
    });

    card.innerHTML = `
      <img src="${event.image}">
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      ${datesHTML}
      <button onclick="window.open('${event.ticketLink}')">🎟 Tickets Available Now</button>
    `;

    container.appendChild(card);
  });
});

/* POPUPS */
function openPopup(id) {
  document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}
