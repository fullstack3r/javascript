var currencies = [
  {
    id: "AED",
    name: "United Arab Emirates Dirham",
    min_size: "0.01000000",
  },
  {
    id: "AFN",
    name: "Afghan Afghani",
    min_size: "0.01000000",
  },
];

function render() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  currencies.forEach((item, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="p-2">${item.id}</td>
      <td class="p-2">${item.name}</td>
      <td class="p-2">${item.min_size}</td>
    `;
    tableBody.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", () => render());
