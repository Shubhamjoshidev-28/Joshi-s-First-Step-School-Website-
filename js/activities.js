const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vT5_dEOssprdox5kp_mGKepSSYopvbKtrIy21HcwFqHnz-hFjcxfNeSzRRUNSyejTvl5cF0eoalxCXN/pub?gid=0&single=true&output=csv";

const grid = document.getElementById("galleryGrid");

if (!grid) {
  console.error("galleryGrid not found");
}

/* FETCH DATA FROM GOOGLE SHEET */
fetch(SHEET_URL)
  .then(res => res.text())
  .then(csv => {
    const rows = csv.split("\n").slice(1);

    rows.forEach(row => {
      const [title, date, cover] = row.split(",");

      if (!title || !cover) return;

      const card = document.createElement("div");
      card.className = "gallery-card";

      card.innerHTML = `
        <div class="image-wrapper">
          <img src="${cover.trim()}" alt="${title.trim()}" loading="lazy">
        </div>
        <div class="card-info">
          <h3>${title.trim()}</h3>
          <span>${date ? date.trim() : ""}</span>
        </div>
      `;

      grid.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Failed to load activities data", err);
  });
