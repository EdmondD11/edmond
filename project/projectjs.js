const apiBase = "https://swapi.dev/api";
const tableContainer = document.getElementById("tableContainer");
const paginationContainer = document.getElementById("pagination");
let currentPageUrl = "";
let currentMode = "";

function fetchData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching data:", error));
}

function renderTable(data, type) {
  const headers = type === "person"
    ? ["Name", "Height", "Mass", "Gender", "Birth Year", "Appearances"]
    : ["Name", "Model", "Manufacturer", "Cost", "Crew", "Passengers", "Class"];

  const rows = type === "person"
    ? data.results.map((item) => `
        <tr>
          <td>${item.name}</td>
          <td>${item.height}</td>
          <td>${item.mass}</td>
          <td>${item.gender}</td>
          <td>${item.birth_year}</td>
          <td>${item.films.length}</td>
        </tr>
      `)
    : data.results.map((item) => `
        <tr>
          <td>${item.name}</td>
          <td>${item.model}</td>
          <td>${item.manufacturer}</td>
          <td>${item.cost_in_credits || "N/A"}</td>
          <td>${item.crew}</td>
          <td>${item.passengers}</td>
          <td>${item.starship_class}</td>
        </tr>
      `);

  tableContainer.innerHTML = `
    <table>
      <thead>
        <tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr>
      </thead>
      <tbody>${rows.join("")}</tbody>
    </table>
  `;

  renderPagination(data);
}

function renderPagination(data) {
  paginationContainer.innerHTML = `
    <button ${data.previous ? "" : "disabled"} onclick="changePage('${data.previous}')">Previous</button>
    <button ${data.next ? "" : "disabled"} onclick="changePage('${data.next}')">Next</button>
  `;
}

function changePage(url) {
  if (!url) return;
  fetchData(url).then((data) => renderTable(data, currentMode));
}

document.getElementById("personBtn").addEventListener("click", () => {
  currentMode = "person";
  currentPageUrl = `${apiBase}/people/`;
  fetchData(currentPageUrl).then((data) => renderTable(data, "person"));
});

document.getElementById("shipBtn").addEventListener("click", () => {
  currentMode = "ship";
  currentPageUrl = `${apiBase}/starships/`;
  fetchData(currentPageUrl).then((data) => renderTable(data, "ship"));
});
















