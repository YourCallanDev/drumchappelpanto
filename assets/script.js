/* =========================
/assets/script.js
========================= */

function toggleMenu(){
  document.getElementById('mobileMenu').classList.toggle('active');
}

/* EVENTS FIXED */
fetch('/events.json')
.then(res=>res.json())
.then(data=>{
  const container=document.getElementById('eventsContainer');
  if(!container) return;

  data.events.forEach(e=>{
    if(e.soldOut) return;

    let dates='';
    e.dates.forEach(d=>dates+=`<p>${d}</p>`);

    container.innerHTML+=`
    <div class="event-card">
      <img src="${e.image}">
      <h3>${e.title}</h3>
      <p>${e.description}</p>
      ${dates}
      <button onclick="window.open('${e.ticketLink}')">Tickets Available</button>
    </div>`;
  });
});

function openPopup(id){
  document.getElementById(id).style.display='flex';
}
function closePopup(id){
  document.getElementById(id).style.display='none';
}

/* EASTER EGG */
document.addEventListener('click',()=>{
  if(Math.random()<0.05){
    alert("HE'S BEHIND YOU! 👀");
  }
});
