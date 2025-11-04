 // Mobile menu toggle
      const menuBtn = document.getElementById("menu-btn");
      const nav = document.getElementById("nav");
      menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
      });
      // Close mobile menu when clicking on a link
      document.querySelectorAll("nav").forEach((link) => {
        link.addEventListener("click", () => {
          nav.classList.remove("active");
          mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
      });
      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70,
              behavior: "smooth",
            });
          }
        });
      });