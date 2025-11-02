// Mobile Menu Toggle
      const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
      const nav = document.querySelector("nav");

      mobileMenuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
        mobileMenuBtn.innerHTML = nav.classList.contains("active")
          ? '<i class="fas fa-times"></i>'
          : '<i class="fas fa-bars"></i>';
      });

      // Close mobile menu when clicking on a link
      document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", () => {
          nav.classList.remove("active");
          mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
      });

      // Form submission
      document
        .getElementById("contactForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          // Simple form validation
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const phone = document.getElementById("phone").value;
          const service = document.getElementById("service").value;
          const message = document.getElementById("message").value;

          if (!name || !email || !phone || !service || !message) {
            alert("Please fill out all fields before submitting.");
            return;
          }

          // Simulate form submission
          alert("Thank you for your message! We will contact you shortly.");
          this.reset();
        });

      // Floating label functionality
      const formInputs = document.querySelectorAll(
        ".form-group input, .form-group textarea, .form-group select"
      );

      formInputs.forEach((input) => {
        // Check if input has value on page load
        if (input.value) {
          input.parentElement.classList.add("focused");
        }

        input.addEventListener("focus", () => {
          input.parentElement.classList.add("focused");
        });

        input.addEventListener("blur", () => {
          if (!input.value) {
            input.parentElement.classList.remove("focused");
          }
        });
      });