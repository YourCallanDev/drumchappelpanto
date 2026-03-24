function toggleMenu(){
  document.getElementById("mobileMenu").classList.toggle("active");
}

fetch('/events.json')
.then(res=>res.json())
.then(data=>{
  const container=document.getElementById("eventsContainer");
  if(!container) return;

  data.events.forEach(e=>{
    if(e.soldOut) return;

    let dates="";
    e.dates.forEach(d=>dates+=`<p>${d}</p>`);

    container.innerHTML+=`
    <div class="event-card">
      <img src="${e.image}">
      <h3>${e.title}</h3>
      <p>${e.description}</p>
      ${dates}
      <button onclick="window.open('${e.ticketLink}')">🎟 Tickets Available Now</button>
    </div>`;
  });
});

function openPopup(id){
  document.getElementById(id).style.display="flex";
}

function closePopup(id){
  document.getElementById(id).style.display="none";
}
