const grid = document.getElementById("galleryGrid");

if (!grid) {
  console.error("galleryGrid not found");
}

activitiesData.forEach(item => {
  const card = document.createElement("div");
  card.className = "gallery-card";

  card.innerHTML = `
    <div class="image-wrapper">
      <img src="${item.cover}" alt="${item.title}" loading="lazy">
    </div>
    <div class="card-info">
      <h3>${item.title}</h3>
      <span>${item.date}</span>
    </div>
  `;

  grid.appendChild(card);
});
