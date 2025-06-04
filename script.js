let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("article");

// Initially show about section and hide others
document.querySelector(".about-section").style.display = "block";

navbar.addEventListener("click", function (e) {
 // Get the clicked nav item's class
 let clickedItem = e.target.closest('.nav-items');

 if (!clickedItem) return;

 // Get section name from nav item's class
 let sectionName = clickedItem.classList[0];

 // Hide all sections first
 sections.forEach(section => {
  section.style.display = "none";
 });

 // Show the clicked section
 let targetSection = document.querySelector(`.${sectionName}-section`);
 if (targetSection) {
  targetSection.style.display = "block";
 }

 // Update active state in navbar
 document.querySelectorAll('.nav-items a').forEach(item => {
  item.style.color = 'rgb(255, 255, 235)';
 });
 clickedItem.querySelector('a').style.color = 'aquamarine';
});