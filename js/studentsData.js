const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQG3TUYuV9kwVPvQ-HojS4r-lu2dfbMTnNZy1WMS7jBWVP-jUywm6iIctaNDBqjyajhkH1txS9mzMQA/pub?gid=0&single=true&output=csv";

const studentsGrid = document.getElementById("studentsGrid");
const searchInput = document.getElementById("searchInput");

let students = [];

/* ===============================
   FETCH & PARSE CSV
================================ */
async function loadStudents() {
  try {
    const response = await fetch(CSV_URL);
    const csvText = await response.text();

    const rows = csvText.split("\n").map(row =>
      row.split(",").map(cell => cell.replace(/^"|"$/g, "").trim())
    );

    const headers = rows[0].map(h => h.toLowerCase());
    const dataRows = rows.slice(1);

    students = dataRows
      .filter(row => row.length >= 3)
      .map(row => ({
        name: row[headers.indexOf("name")] || "",
        age: row[headers.indexOf("age")] || "",
        photo: cleanImageURL(row[headers.indexOf("photo")] || "")
      }));

    renderStudents(students);

  } catch (error) {
    console.error("Error loading students:", error);
    studentsGrid.innerHTML = "<p style='color:red'>Failed to load students</p>";
  }
}

/* ===============================
   CLEAN IMAGE URL
================================ */
function cleanImageURL(url) {
  if (!url) return "";

  // If user pasted Drive "view" link → convert
  if (url.includes("drive.google.com/file/d/")) {
    const id = url.split("/d/")[1].split("/")[0];
    return `https://drive.google.com/uc?id=${id}`;
  }

  // Remove quotes, spaces
  return url.replace(/^"+|"+$/g, "").trim();
}

/* ===============================
   RENDER STUDENTS
================================ */
function renderStudents(list) {
  studentsGrid.innerHTML = "";

  if (list.length === 0) {
    studentsGrid.innerHTML = "<p>No students found</p>";
    return;
  }

  list.forEach(student => {
    const card = document.createElement("div");
    card.className = "student-card";

    card.innerHTML = `
      <div class="student-photo">
        <img src="${student.photo}" 
             alt="${student.name}" 
             onerror="this.src='https://via.placeholder.com/150'">
      </div>

      <h3 class="student-name">${student.name}</h3>
      <p class="student-age">Age: ${student.age}</p>
    `;

    studentsGrid.appendChild(card);
  });
}

/* ===============================
   SEARCH
================================ */
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(value) ||
    s.age.toString().includes(value)
  );

  renderStudents(filtered);
});

/* ===============================
   INIT
================================ */
loadStudents();
