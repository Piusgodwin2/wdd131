// Copyright Year
document.getElementById("year").textContent = new Date().getFullYear();

// Last Modified
document.getElementById("lastModified").textContent = document.lastModified;

// Toggle hamburger menu
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navMenu").classList.toggle("active");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
];

// Render temple cards
const container = document.getElementById("cardcontainer");
function renderTemples(filteredTemples) {
  container.innerHTML = ""; // Clear previous cards

  filteredTemples.forEach((temple) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
    <div class="card-body">
      <div class="card-title">${temple.templeName}</div>
      <div class="card-text"><strong>Location:</strong> ${temple.location}</div>
      <div class="card-text"><strong>Dedicated:</strong> ${temple.dedicated}</div>
      <div class="card-text"><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</div>
    </div>
  `;

  container.appendChild(card);
});
}

  //card.innerHTML = ... sets the HTML content inside that card element.
   //This technique is used to inject a template string of HTML into the card.
  /* So this line makes the area look professional and readable, instead of something like "123456".
     .toLocaleString() formats that number with commas or localization*/

// Show all temples initially
renderTemples(temples);

// Filter logic
document.getElementById("home").addEventListener("click", () => {
  renderTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
  const result = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
  renderTemples(result);
});

document.getElementById("new").addEventListener("click", () => {
  const result = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
  renderTemples(result);
});

document.getElementById("large").addEventListener("click", () => {
  const result = temples.filter(t => t.area > 90000);
  renderTemples(result);
});

document.getElementById("small").addEventListener("click", () => {
  const result = temples.filter(t => t.area < 10000);
  renderTemples(result);
});