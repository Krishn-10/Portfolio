let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("article");

// Initially hide all sections
sections.forEach(section => {
    section.style.display = "none";
});

// Show About section by default
document.querySelector(".About-section").style.display = "block";

navbar.addEventListener("click", function (e) {
    // Prevent default link behavior
    e.preventDefault();
    
    let clickedItem = e.target.closest('.nav-items');
    
    if (!clickedItem) return;
    
    // Get the text content and capitalize first letter
    let sectionName = clickedItem.querySelector('a').textContent;
    sectionName = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
    
    // Hide all sections
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
    clickedItem.querySelector('a').style.color = 'hsl(45, 100%, 72%)';
});

//Eye Icon
// let icon = document.querySelector(".fa-eye");
// icon.addEventListener("click", function(e) {
//     document.createElement("div");
    
// })