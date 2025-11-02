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

      // Portfolio Filtering
      const filterButtons = document.querySelectorAll(".filter-btn");
      const portfolioItems = document.querySelectorAll(".portfolio-item");

      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Remove active class from all buttons
          filterButtons.forEach((btn) => btn.classList.remove("active"));

          // Add active class to clicked button
          button.classList.add("active");

          // Get filter value
          const filterValue = button.getAttribute("data-filter");

          // Filter portfolio items
          portfolioItems.forEach((item) => {
            if (
              filterValue === "all" ||
              item.getAttribute("data-category") === filterValue
            ) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          });
        });
      });
     
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

