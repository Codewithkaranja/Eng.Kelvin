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

      // Animate service cards on scroll
      const serviceCards = document.querySelectorAll(".service-card");

      function checkScroll() {
        serviceCards.forEach((card) => {
          const cardPosition = card.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;

          if (cardPosition < screenPosition) {
            card.classList.add("animate");
          }
        });
      }

      // Initial check
      checkScroll();

      // Listen for scroll events
      window.addEventListener("scroll", checkScroll);