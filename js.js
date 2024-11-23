document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', function () {
      // Close other open accordions
      document.querySelectorAll('.accordion-content').forEach((content) => {
        if (content !== this.nextElementSibling) {
          content.classList.remove('show');
          content.previousElementSibling.classList.remove('active');
        }
      });
  
      // Toggle the clicked accordion
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('show');
    });
  });

  //Animation for the bars
  document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach((bar) => {
      const finalWidth = bar.style.width;
      bar.style.width = "0%"; // Start from 0%
      setTimeout(() => {
        bar.style.width = finalWidth; // Animate to final width
      }, 200);
    });
  });

  
//Highlight Sidebar nav links when scrolling
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  const updateActiveLink = () => {
    let currentSection = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Adjust offset as needed
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === currentSection) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink(); // Initial call to set active link on page load
});

// Get all the nav links and sections
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Function to highlight active link based on scroll position
function handleScroll() {
  let currentSection = null;

  // Loop through each section and check if it's in the viewport
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    // Check if the current scroll position is within the section
    if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
      currentSection = section.id;
    }
  });

  // Loop through nav links and apply 'active' class to the corresponding one
  navLinks.forEach(link => {
    link.classList.remove('active');  // Remove active class from all
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');  // Add active class to the matching link
    }
  });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Optionally, trigger the function on page load to highlight the correct link if starting at a specific section
document.addEventListener('DOMContentLoaded', handleScroll);


// js.js

// Select the hamburger button and sidebar
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

// Add event listener to toggle the sidebar on click (only for small screens)
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open'); // Toggle the 'open' class to show/hide the sidebar on small screens
});





  // Form submission handler
  document.getElementById("submit-btn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form's default submission

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Prepare EmailJS parameters
    const templateParams = {
      email: email,
      message: message,
    };

    // Use EmailJS to send the form data
    emailjs.send("service_6ajh51z", "template_bra2356", templateParams)
      .then(() => {
        document.getElementById("form-status").innerText = "Message sent successfully!";
        document.getElementById("form-status").style.color = "green";

        // Optionally clear the form
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      })
      .catch((error) => {
        document.getElementById("form-status").innerText = "Failed to send message. Please try again.";
        document.getElementById("form-status").style.color = "red";
        console.error("Error:", error);
      });
  });











