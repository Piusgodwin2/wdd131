// Copyright Year
document.getElementById("year").textContent = new Date().getFullYear();

// Last Modified
document.getElementById("lastModified").textContent = document.lastModified;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Select the dropdown element
const productSelect = document.getElementById("product");

// Loop through products array and create option elements
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id; // Use the product id as the value
  option.textContent = product.name; // Display the product name
  productSelect.appendChild(option);
});