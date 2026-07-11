document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    [
      ".section-heading",
      ".program-card",
      ".about-image",
      ".about-content",
      ".pricing-card",
      ".review-card",
      ".trust-item",
      ".contact-info",
      ".contact-form"
    ].join(",")
  );

  animatedElements.forEach((element) => {
    element.classList.add("reveal");
  });

  const grids = document.querySelectorAll(
    ".program-grid, .pricing-grid, .reviews-grid, .trust-grid"
  );

  grids.forEach((grid) => {
    [...grid.children].forEach((item, index) => {
      item.style.transitionDelay = `${index * 120}ms`;
    });
  });

  if (!("IntersectionObserver" in window)) {
    animatedElements.forEach((element) => {
      element.classList.add("show");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("show");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});