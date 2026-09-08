const phones = [
 {name:"Apple iPhone 6",brand:"Apple",year:2014,screen:"4.7″",ram:"1 GB RAM",storage:"16/64/128 GB",cpu:"Apple A8",desc:"Model koji je obilježio jednu od važnih generacija iPhone uređaja."},
 {name:"Samsung Galaxy S7",brand:"Samsung",year:2016,screen:"5.1″",ram:"4 GB RAM",storage:"32/64/128 GB",cpu:"Exynos 8890",desc:"Popularni Samsungov flagship sa staklenim dizajnom i odličnom kamerom."},
 {name:"Nokia 3310",brand:"Nokia",year:2000,screen:"1.5″",ram:"—",storage:"16 MB",cpu:"Nokia Series 30",desc:"Jedan od najpoznatijih klasičnih mobilnih telefona svih vremena."},
 {name:"Xiaomi Redmi Note 8",brand:"Xiaomi",year:2019,screen:"6.3″",ram:"4 GB RAM",storage:"64/128 GB",cpu:"Snapdragon 665",desc:"Popularan model srednje klase sa četiri zadnje kamere."},
 {name:"Apple iPhone 12",brand:"Apple",year:2020,screen:"6.1″",ram:"4 GB RAM",storage:"64/128/256 GB",cpu:"Apple A14",desc:"Moderan iPhone sa OLED ekranom i 5G povezivanjem."},
 {name:"Samsung Galaxy S10",brand:"Samsung",year:2019,screen:"6.1″",ram:"8 GB RAM",storage:"128/512 GB",cpu:"Exynos 9820",desc:"Flagship iz S serije sa Dynamic AMOLED ekranom."},
 {name:"Nokia 6600",brand:"Nokia",year:2003,screen:"2.1″",ram:"—",storage:"6 MB",cpu:"ARM",desc:"Ikonični Symbian telefon sa karakterističnim oblikom."},
 {name:"iPhone 4",brand:"Apple",year:2010,screen:"3.5″",ram:"512 MB",storage:"8/16/32 GB",cpu:"Apple A4",desc:"Prepoznatljiv dizajn sa staklenim prednjim i zadnjim panelom."}
];
const sales = [
 {name:"Samsung Galaxy S10",price:"180 €",condition:"Odlično očuvan",storage:"128 GB",ram:"8 GB RAM",desc:"Telefon u odličnom stanju, spreman za korišćenje."},
 {name:"Apple iPhone 11",price:"220 €",condition:"Odlično očuvan",storage:"128 GB",ram:"4 GB RAM",desc:"Pouzdan iPhone sa odličnom kamerom."},
 {name:"Xiaomi Mi 11",price:"250 €",condition:"Odlično očuvan",storage:"256 GB",ram:"8 GB RAM",desc:"AMOLED ekran i snažan Snapdragon procesor."},
 {name:"Samsung Galaxy A52",price:"170 €",condition:"Odlično očuvan",storage:"128 GB",ram:"6 GB RAM",desc:"Odličan balans cijene i mogućnosti."},
 {name:"Apple iPhone 13",price:"300 €",condition:"Odlično očuvan",storage:"128 GB",ram:"4 GB RAM",desc:"Kompaktan moderni iPhone sa A15 čipom."}
];

function photoPlaceholder(label){return `<div class="device-photo"><div class="mini-phone">${label}</div></div>`}
function card(p){return `<article class="card" data-search="${(p.name+' '+p.brand).toLowerCase()}">${photoPlaceholder(p.name.replace(/Apple |Samsung |Xiaomi |Nokia /,'').slice(0,18))}<div class="card-body"><h3>${p.name}</h3><div class="year">${p.year}</div><div class="specs">▣ ${p.screen} ekran<br>⚙ ${p.ram}<br>◈ ${p.storage}<br>✦ ${p.cpu}</div><button class="details" onclick='openPhone(${JSON.stringify(p).replace(/'/g,"&#39;")})'>Detalji →</button></div></article>`}
function saleCard(p){return `<article class="sale-card">${photoPlaceholder(p.name.split(' ').slice(-2).join(' '))}<h3>${p.name}</h3><div class="tags"><span class="tag">✓ ${p.condition}</span><span class="tag">▣ ${p.storage}</span></div><div class="specs" style="color:#617187">▣ 6.1″ &nbsp; ⚙ ${p.ram}</div><div class="price">${p.price}</div><button onclick='alert("Kontakt: dodajte svoj broj ili e-mail u script.js")'>⌕ Kontaktiraj</button></article>`}
function render(list=phones){document.getElementById('collectionGrid').innerHTML=list.map(card).join('')}
function renderSales(){document.getElementById('saleGrid').innerHTML=sales.map(saleCard).join('')}
function openPhone(p){document.getElementById('modalContent').innerHTML=`<p class="eyebrow" style="color:#287cff">${p.brand.toUpperCase()}</p><h2>${p.name}</h2>${photoPlaceholder(p.name)}<p><b>Godina:</b> ${p.year}<br><b>Ekran:</b> ${p.screen}<br><b>RAM:</b> ${p.ram}<br><b>Memorija:</b> ${p.storage}<br><b>Procesor:</b> ${p.cpu}</p><p>${p.desc}</p>`;document.getElementById('modal').classList.add('show')}
function closeModal(e){if(!e||e.target.id==='modal'||e.target.classList.contains('close'))document.getElementById('modal').classList.remove('show')}
function runSearch(){const q=(document.getElementById('heroSearch').value||document.getElementById('headerSearch').value).toLowerCase().trim();document.getElementById('kolekcija').scrollIntoView({behavior:'smooth'});render(q?phones.filter(p=>(p.name+' '+p.brand+' '+p.year).toLowerCase().includes(q)):phones)}
function showAll(){render(phones)}
document.getElementById('heroSearch').addEventListener('keydown',e=>{if(e.key==='Enter')runSearch()});
document.getElementById('headerSearch').addEventListener('keydown',e=>{if(e.key==='Enter'){document.getElementById('heroSearch').value=e.target.value;runSearch()}});
document.querySelectorAll('.brands button').forEach(b=>b.addEventListener('click',()=>{const brand=b.dataset.brand;render(brand==='Ostali'?phones:phones.filter(p=>p.brand===brand));document.getElementById('kolekcija').scrollIntoView({behavior:'smooth'})}));
document.querySelectorAll('.timeline button').forEach(b=>b.addEventListener('click',()=>{const y=Number(b.dataset.year);const matches=phones.filter(p=>Math.abs(p.year-y)<=2);document.getElementById('yearText').textContent=matches.length?`${y}: ${matches.map(p=>p.name).join(', ')}`:`${y}: za ovu godinu još nema unesenih modela.`}));
render();renderSales();
