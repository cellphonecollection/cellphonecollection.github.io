const phones = [
  {
  name: "Apple iPhone 6",
  brand: "Apple",
  year: 2014,
  screen: "4.7″",
  ram: "1 GB RAM",
  storage: "16 / 64 / 128 GB",
  cpu: "Apple A8",
  desc: "Model koji je obilježio jednu od važnih generacija iPhone uređaja.",
  image: "https://cellphonecollection.github.io/iphone-6.jpg.jpg"
},
  {
    name: "Samsung Galaxy S7",
    brand: "Samsung",
    year: 2016,
    screen: "5.1″",
    ram: "4 GB RAM",
    storage: "32 / 64 / 128 GB",
    cpu: "Exynos 8890",
    desc: "Popularni Samsungov flagship sa staklenim dizajnom i odličnom kamerom."
  },
  {
    name: "Nokia 3310",
    brand: "Nokia",
    year: 2000,
    screen: "1.5″",
    ram: "—",
    storage: "16 MB",
    cpu: "Nokia Series 30",
    desc: "Jedan od najpoznatijih klasičnih mobilnih telefona svih vremena."
  },
  {
    name: "Xiaomi Redmi Note 8",
    brand: "Xiaomi",
    year: 2019,
    screen: "6.3″",
    ram: "4 GB RAM",
    storage: "64 / 128 GB",
    cpu: "Snapdragon 665",
    desc: "Popularan model srednje klase sa četiri zadnje kamere."
  },
  {
    name: "Apple iPhone 12",
    brand: "Apple",
    year: 2020,
    screen: "6.1″",
    ram: "4 GB RAM",
    storage: "64 / 128 / 256 GB",
    cpu: "Apple A14 Bionic",
    desc: "Moderan iPhone sa OLED ekranom i 5G povezivanjem."
  },
  {
    name: "Samsung Galaxy S10",
    brand: "Samsung",
    year: 2019,
    screen: "6.1″",
    ram: "8 GB RAM",
    storage: "128 / 512 GB",
    cpu: "Exynos 9820",
    desc: "Flagship iz S serije sa Dynamic AMOLED ekranom."
  },
  {
    name: "Nokia 6600",
    brand: "Nokia",
    year: 2003,
    screen: "2.1″",
    ram: "—",
    storage: "6 MB",
    cpu: "ARM",
    desc: "Ikonični Symbian telefon sa karakterističnim oblikom."
  },
  {
    name: "Apple iPhone 4",
    brand: "Apple",
    year: 2010,
    screen: "3.5″",
    ram: "512 MB",
    storage: "8 / 16 / 32 GB",
    cpu: "Apple A4",
    desc: "Prepoznatljiv dizajn sa staklenim prednjim i zadnjim panelom."
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    year: 2024,
    screen: "6.8″",
    ram: "12 GB RAM",
    storage: "256 / 512 GB / 1 TB",
    cpu: "Snapdragon 8 Gen 3",
    desc: "Samsungov premium flagship sa S Pen olovkom i naprednim kamerama."
  },
  {
    name: "Apple iPhone 15 Pro",
    brand: "Apple",
    year: 2023,
    screen: "6.1″",
    ram: "8 GB RAM",
    storage: "128 / 256 / 512 GB / 1 TB",
    cpu: "Apple A17 Pro",
    desc: "Pro model sa titanijumskim kućištem, USB-C priključkom i A17 Pro čipom."
  },
  {
    name: "Xiaomi 14",
    brand: "Xiaomi",
    year: 2024,
    screen: "6.36″",
    ram: "12 GB RAM",
    storage: "256 / 512 GB",
    cpu: "Snapdragon 8 Gen 3",
    desc: "Kompaktan flagship sa Leica kamerama i snažnim Snapdragon procesorom."
  },
  {
    name: "Huawei P60 Pro",
    brand: "Huawei",
    year: 2023,
    screen: "6.67″",
    ram: "8 / 12 GB RAM",
    storage: "256 / 512 GB",
    cpu: "Snapdragon 8+ Gen 1",
    desc: "Huawei premium telefon poznat po naprednom sistemu kamera."
  }
];


const sales = [
  {
    name: "Samsung Galaxy S10",
    brand: "Samsung",
    price: "180 €",
    condition: "Odlično očuvan",
    storage: "128 GB",
    ram: "8 GB RAM",
    screen: "6.1″",
    desc: "Telefon u odličnom stanju, spreman za korišćenje."
  },
  {
    name: "Apple iPhone 11",
    brand: "Apple",
    price: "220 €",
    condition: "Odlično očuvan",
    storage: "128 GB",
    ram: "4 GB RAM",
    screen: "6.1″",
    desc: "Pouzdan iPhone sa odličnom kamerom."
  },
  {
    name: "Xiaomi Mi 11",
    brand: "Xiaomi",
    price: "250 €",
    condition: "Odlično očuvan",
    storage: "256 GB",
    ram: "8 GB RAM",
    screen: "6.81″",
    desc: "AMOLED ekran i snažan Snapdragon procesor."
  },
  {
    name: "Samsung Galaxy A52",
    brand: "Samsung",
    price: "170 €",
    condition: "Odlično očuvan",
    storage: "128 GB",
    ram: "6 GB RAM",
    screen: "6.5″",
    desc: "Odličan balans cijene i mogućnosti."
  },
  {
    name: "Apple iPhone 13",
    brand: "Apple",
    price: "300 €",
    condition: "Odlično očuvan",
    storage: "128 GB",
    ram: "4 GB RAM",
    screen: "6.1″",
    desc: "Kompaktan moderni iPhone sa A15 Bionic čipom."
  }
];


/* ================= POMOĆNE FUNKCIJE ================= */

function escapeHTML(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function phonePlaceholder(name, brand, image = "") {

  const shortName = name
    .replace("Apple ", "")
    .replace("Samsung ", "")
    .replace("Xiaomi ", "")
    .replace("Huawei ", "")
    .replace("Nokia ", "");

  if (image) {
    return `
      <div class="device-photo">
        <img
          src="${escapeHTML(image)}"
          alt="${escapeHTML(name)}"
        >
      </div>
    `;
  }

  return `
    <div class="device-photo">
      <div class="mini-phone">
        <span>${escapeHTML(brand)}</span>
        <b>${escapeHTML(shortName)}</b>
      </div>
    </div>
  `;
}


/* ================= KARTICA KOLEKCIJE ================= */

function card(p, index) {

  return `
    <article class="card">

      ${phonePlaceholder(p.name, p.brand, p.image)}

      <div class="card-body">

        <h3>${escapeHTML(p.name)}</h3>

        <div class="year">
          ${escapeHTML(p.year)}
        </div>

        <div class="specs">
          ▣ ${escapeHTML(p.screen)} ekran<br>
          ⚙ ${escapeHTML(p.ram)}<br>
          ◈ ${escapeHTML(p.storage)}<br>
          ✦ ${escapeHTML(p.cpu)}
        </div>

        <button
          class="details"
          type="button"
          data-phone-index="${index}"
        >
          Pogledaj detalje →
        </button>

      </div>

    </article>
  `;
}


/* ================= KARTICA PRODAJE ================= */

function saleCard(p) {

  return `
    <article class="sale-card">

      ${phonePlaceholder(p.name, p.brand)}

      <h3>${escapeHTML(p.name)}</h3>

      <div class="tags">

        <span class="tag">
          ✓ ${escapeHTML(p.condition)}
        </span>

        <span class="tag">
          ◈ ${escapeHTML(p.storage)}
        </span>

      </div>

      <div class="specs" style="color:#617187">
        ▣ ${escapeHTML(p.screen)}
        &nbsp; ⚙ ${escapeHTML(p.ram)}
      </div>

      <div class="price">
        ${escapeHTML(p.price)}
      </div>

      <button
        type="button"
        class="contact-button"
        data-sale-name="${escapeHTML(p.name)}"
      >
        ⌕ Kontaktiraj
      </button>

    </article>
  `;
}


/* ================= PRIKAZ KOLEKCIJE ================= */

function render(list = phones) {

  const grid = document.getElementById("collectionGrid");
  const count = document.getElementById("collectionCount");

  if (!grid) {
    console.error("Nije pronađen collectionGrid.");
    return;
  }

  if (list.length === 0) {

    grid.innerHTML = `
      <div style="
        grid-column:1/-1;
        background:#fff;
        border:1px solid #dce5ef;
        border-radius:10px;
        padding:35px;
        text-align:center;
        color:#718196;
      ">
        <strong>Nema pronađenih telefona.</strong>
        <br>
        <small>Pokušajte sa drugim nazivom ili proizvođačem.</small>
      </div>
    `;

  } else {

    grid.innerHTML = list
      .map((phone) => {
        const originalIndex = phones.indexOf(phone);
        return card(phone, originalIndex);
      })
      .join("");

  }

  if (count) {

    count.textContent =
      `${list.length} ${list.length === 1 ? "telefon" : "telefona"} u prikazu`;

  }

  attachCollectionButtons();
}


/* ================= DUGMAD DETALJA ================= */

function attachCollectionButtons() {

  document
    .querySelectorAll("[data-phone-index]")
    .forEach(button => {

      button.addEventListener("click", function() {

        const index = Number(
          button.getAttribute("data-phone-index")
        );

        if (!Number.isNaN(index) && phones[index]) {
          openPhone(phones[index]);
        }

      });

    });
}


/* ================= PRIKAZ PRODAJE ================= */

function renderSales() {

  const grid = document.getElementById("saleGrid");

  if (!grid) {
    console.error("Nije pronađen saleGrid.");
    return;
  }

  grid.innerHTML = sales
    .map(saleCard)
    .join("");

  attachSaleButtons();
}


/* ================= DUGMAD PRODAJE ================= */

function attachSaleButtons() {

  document
    .querySelectorAll("[data-sale-name]")
    .forEach(button => {

      button.addEventListener("click", function() {

        const name =
          button.getAttribute("data-sale-name");

        contactSeller(name);

      });

    });
}


/* ================= DETALJI TELEFONA ================= */

function openPhone(p) {

  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");

  if (!modal || !content) {
    console.error("Modal nije pronađen.");
    return;
  }

  content.innerHTML = `

    <p class="eyebrow blue-eyebrow">
      ${escapeHTML(p.brand)}
    </p>

    <h2>
      ${escapeHTML(p.name)}
    </h2>

    ${phonePlaceholder(p.name, p.brand)}

    <div style="
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:10px;
      margin:20px 0;
    ">

      <div>
        <strong>Godina</strong>
        <br>
        ${escapeHTML(p.year)}
      </div>

      <div>
        <strong>Ekran</strong>
        <br>
        ${escapeHTML(p.screen)}
      </div>

      <div>
        <strong>RAM</strong>
        <br>
        ${escapeHTML(p.ram)}
      </div>

      <div>
        <strong>Memorija</strong>
        <br>
        ${escapeHTML(p.storage)}
      </div>

      <div style="grid-column:1/-1">
        <strong>Procesor</strong>
        <br>
        ${escapeHTML(p.cpu)}
      </div>

    </div>

    <p>
      ${escapeHTML(p.desc)}
    </p>
  `;

  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}


/* ================= ZATVARANJE MODALA ================= */

function closeModal(e) {

  const modal = document.getElementById("modal");

  if (!modal) return;

  if (
    !e ||
    e.target.id === "modal" ||
    e.target.classList.contains("close")
  ) {

    modal.classList.remove("show");
    document.body.style.overflow = "";

  }
}


/* ================= KONTAKT ================= */

function contactSeller(name) {

  alert(
    `Kontakt za ${name}\n\n` +
    `Ovdje ćemo kasnije staviti tvoj broj telefona, ` +
    `Viber, WhatsApp ili e-mail.`
  );
}


/* ================= PRETRAGA ================= */

function runSearch() {

  const heroInput =
    document.getElementById("heroSearch");

  const headerInput =
    document.getElementById("headerSearch");

  const heroValue =
    heroInput ? heroInput.value.trim() : "";

  const headerValue =
    headerInput ? headerInput.value.trim() : "";

  const q =
    (heroValue || headerValue).toLowerCase();

  const results = q
    ? phones.filter(p =>
        `${p.name} ${p.brand} ${p.year} ${p.cpu}`
          .toLowerCase()
          .includes(q)
      )
    : phones;

  render(results);

  const collection =
    document.getElementById("kolekcija");

  if (collection) {

    collection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }
}


/* ================= PRIKAŽI SVE ================= */

function showAll() {

  const heroInput =
    document.getElementById("heroSearch");

  const headerInput =
    document.getElementById("headerSearch");

  if (heroInput) {
    heroInput.value = "";
  }

  if (headerInput) {
    headerInput.value = "";
  }

  render(phones);

  const collection =
    document.getElementById("kolekcija");

  if (collection) {

    collection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }
}


/* ================= PRETRAGA ENTER ================= */

function setupSearch() {

  const heroSearch =
    document.getElementById("heroSearch");

  if (heroSearch) {

    heroSearch.addEventListener(
      "keydown",
      function(e) {

        if (e.key === "Enter") {
          runSearch();
        }

      }
    );

  }


  const headerSearch =
    document.getElementById("headerSearch");

  if (headerSearch) {

    headerSearch.addEventListener(
      "keydown",
      function(e) {

        if (e.key === "Enter") {

          const heroInput =
            document.getElementById("heroSearch");

          if (heroInput) {
            heroInput.value =
              headerSearch.value;
          }

          runSearch();

        }

      }
    );

  }

}


/* ================= PROIZVOĐAČI ================= */

function setupBrands() {

  document
    .querySelectorAll(".brands button")
    .forEach(button => {

      button.addEventListener(
        "click",
        function() {

          const brand =
            button.dataset.brand;

          let results;

          if (brand === "Ostali") {

            results = phones.filter(p =>
              ![
                "Apple",
                "Samsung",
                "Xiaomi",
                "Nokia",
                "Huawei"
              ].includes(p.brand)
            );

          } else {

            results = phones.filter(p =>
              p.brand === brand
            );

          }

          render(results);

          const collection =
            document.getElementById("kolekcija");

          if (collection) {

            collection.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }

        }
      );

    });

}


/* ================= TIMELINE ================= */

function setupTimeline() {

  document
    .querySelectorAll(".timeline button")
    .forEach(button => {

      button.addEventListener(
        "click",
        function() {

          const year =
            Number(button.dataset.year);

          const matches =
            phones.filter(p =>
              Math.abs(p.year - year) <= 2
            );

          const yearText =
            document.getElementById("yearText");

          if (!yearText) return;

          if (matches.length) {

            yearText.innerHTML =
              `<strong>${year}</strong> — ` +
              matches
                .map(p => escapeHTML(p.name))
                .join(" • ");

          } else {

            yearText.textContent =
              `${year}: za ovaj period još nema unesenih modela.`;

          }

        }
      );

    });

}


/* ================= ESC ZA MODAL ================= */

function setupEscape() {

  document.addEventListener(
    "keydown",
    function(e) {

      if (e.key === "Escape") {
        closeModal();
      }

    }
  );

}


/* ================= POKRETANJE SAJTA ================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    render();
    renderSales();

    setupSearch();
    setupBrands();
    setupTimeline();
    setupEscape();

    console.log(
      "Mobile Collection učitan:",
      phones.length,
      "telefona u kolekciji i",
      sales.length,
      "telefona na prodaju."
    );

  }
);
