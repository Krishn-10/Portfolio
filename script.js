let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("article");
let container = document.querySelector(".container");

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

//Service item
let serviceitem = document.querySelector(".service-item");

// serviceitem.addEventListener("click", function (e) {

// })



//Contact Input
let contactname = document.querySelector(".contact-name");
let contactemail = document.querySelector(".contact-email");
let contactbtn = document.querySelector(".contact-button");

contactemail.addEventListener('input', function () {
  const value = contactemail.value;
  if (value.includes('@')) {
    contactemail.classList.add('valid');
    contactemail.classList.remove('invalid');
  } else {
    contactemail.classList.add('invalid');
    contactemail.classList.remove('valid');
  }
});

contactemail.addEventListener('focus', function () {
  if (emailInput.value === '') {
    emailInput.classList.add('invalid');
  }
});

contactemail.addEventListener('blur', function () {
  if (contactemail.value === '') {
    contactemail.classList.remove('valid', 'invalid');
  }
});




//Project Segregation
let projectlistitem = document.querySelectorAll(".project-list-item");
let projectoptions = document.querySelectorAll(".projects-header-item");

projectoptions.forEach(child => {
  if (child.innerText.trim() === "Frontend Development") {

    child.addEventListener('click', () => {
      child.style.color = "hsl(45, 100 %, 72 %)";
      projectlistitem.forEach(child => {
        child.classList.remove("none");
        if (!child.classList.contains("front")) {
          child.classList.add("none");
        }
      })
    });
  }
  else if (child.innerText.trim() === "Core Electronics") {
    child.addEventListener('click', () => {
      projectlistitem.forEach(child => {
        child.classList.remove("none");
        if (!child.classList.contains("core")) {
          child.classList.add("none");
        }
      })
    });
  }
  else if (child.innerText.trim() === "Java") {
    child.addEventListener('click', () => {
      projectlistitem.forEach(child => {
        child.classList.remove("none");
        if (!child.classList.contains("java")) {
          child.classList.add("none");
        }
      })
    });
  }
  else {
    child.addEventListener('click', () => {
      projectlistitem.forEach(child => {
        child.classList.remove("none");
      })
    });
  }
});

let testimonialclosebtn = document.querySelector(".testimonial-hidden-close");
let testimonialhidden = document.querySelector(".testimonial-hidden");
let testimoniallist = document.querySelectorAll(".testimonial-list");


testimoniallist.forEach(child => {
  child.addEventListener("click", function () {
    testimonialhidden.classList.add("show");
    container.style.opacity = "0.3";
    container.style.pointerevents = "none";
    container.style.userselect = "none";
    container.style.cursor = "default";



  })
})

// testimonialitem.addEventListener("click", function () {
//   testimonialhidden.classList.add("show");
//   container.style.opacity = "0.3";
// })

testimonialclosebtn.addEventListener("click", function () {
  testimonialhidden.classList.remove("show");
  container.style.opacity = "1";
})
