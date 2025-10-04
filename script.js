const temples = [
  { id:1, name:"Vaishno Devi Temple", state:"Jammu & Kashmir", img:"images/vaishno.jpg", info:"Located in Katra, Vaishno Devi Temple is one of the holiest shrines dedicated to Goddess Vaishno Devi. Millions of devotees undertake the yatra every year." },
  { id:2, name:"Golden Temple", state:"Punjab", img:"images/golden.jpg", info:"Also known as Harmandir Sahib, the Golden Temple is the holiest shrine of Sikhism, located in Amritsar. Its golden dome and serene lake attract millions." },
  { id:3, name:"Pandharpur Vithoba Temple", state:"Maharashtra", img:"images/pandharpur.jpg", info:"Dedicated to Lord Vithoba, this temple in Pandharpur is one of the most visited pilgrimage sites in Maharashtra." },
  { id:4, name:"Nataraja Temple", state:"Tamil Nadu", img:"images/nataraja.jpg", info:"The Nataraja Temple in Chidambaram is dedicated to Lord Shiva as the cosmic dancer, Nataraja. It represents dance, art, and devotion." },
  { id:5, name:"Somnath Temple", state:"Gujarat", img:"images/somnath.jpg", info:"Somnath is one of the twelve Jyotirlingas of Lord Shiva, symbolizing faith and resilience as it has been rebuilt multiple times." },
  { id:6, name:"Nidhivan Temple", state:"Uttar Pradesh", img:"images/nidhivan.jpg", info:"Located in Vrindavan, Nidhivan Temple is surrounded by mystery and devotion, believed to be the place where Lord Krishna still performs Raas Leela." },
  { id:7, name:"Jagannath Temple", state:"Odisha", img:"images/jagannath.jpg", info:"Jagannath Temple in Puri is one of the Char Dhams, famous for its Rath Yatra and deep devotion to Lord Jagannath." },
  { id:8, name:"Kedarnath Temple", state:"Uttarakhand", img:"images/kedarnath.jpg", info:"Situated in the Himalayas, Kedarnath is one of the twelve Jyotirlingas and a sacred pilgrimage in the Char Dham Yatra." },
  { id:9, name:"Shree Siddhivinayak Temple", state:"Maharashtra", img:"images/siddhivinayak.jpg", info:"Dedicated to Lord Ganesha, this temple in Mumbai is visited by millions seeking blessings for success and prosperity." },
  { id:10, name:"Ram Mandir", state:"Uttar Pradesh", img:"images/rammandir.jpg", info:"The newly built Ram Mandir in Ayodhya is dedicated to Lord Ram, symbolizing centuries of devotion and faith." }
];


if(document.getElementById("temple-list")){
  const container = document.getElementById("temple-list");
  temples.forEach(t => {
    container.innerHTML += `
      <div class="card">
        <img src="${t.img}" alt="${t.name}">
        <div class="card-body">
          <h3>${t.name}</h3>
          <p><b>State:</b> ${t.state}</p>
          <a href="temple.html?id=${t.id}" class="read-btn">Read More</a>
        </div>
      </div>
    `;
  });
}

// Load temple detail page
if(document.getElementById("temple-detail")){
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const temple = temples.find(t => t.id == id);
  if(temple){
    document.getElementById("temple-detail").innerHTML = `
      <h2>${temple.name}</h2>
      <img src="${temple.img}" alt="${temple.name}">
      <p><b>State:</b> ${temple.state}</p>
      <p>${temple.info}</p>
    `;
  }
}