// Smooth scrolling and active link highlighting
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
  
    window.addEventListener("scroll", function () {
      let current = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  
    // Smooth scrolling
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth",
        });
      });
    });
  });
  
  // Form validation
  function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    if (name === '' || email === '' || subject === '' || message === '') {
      alert('Please fill out all the required fields');
    } else {
      alert('Form submitted successfully!');
      document.getElementById('contact-form').reset();
    }
  }
  