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

      // Animate testimonial cards on scroll
      const testimonialCards = document.querySelectorAll(".testimonial-card");

      function checkScroll() {
        testimonialCards.forEach((card) => {
          const cardPosition = card.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;

          if (cardPosition < screenPosition) {
            card.classList.add("animate");
          }
        });
      }
      document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");
    const duration = 3000; // 3 seconds

    const options = {
      root: null,
      threshold: 0.3
    };

    const startCounting = (entry) => {
      const counter = entry.target;
      const target = +counter.getAttribute("data-target");
      const updateCount = () => {
        const current = +counter.innerText.replace('+',''); // remove + if present
        const increment = target / (duration / 30);

        if (current < target) {
          counter.innerText = Math.ceil(current + increment) + '+';
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target + '+';
        }
      };
      updateCount();
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting(entry);
          obs.unobserve(entry.target);
        }
      });
    }, options);

    counters.forEach(counter => observer.observe(counter));
  });

      // Initial check
      checkScroll();

      // Listen for scroll events
      window.addEventListener("scroll", checkScroll);