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

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const navigation = document.getElementById("navigation");
  const navigationLinks = navigation?.querySelectorAll("a");

  if (!menuButton || !navigation) {
    return;
  }

  function closeMenu() {
    navigation.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
    document.body.style.overflow = "";
  }

  menuButton.addEventListener("click", () => {
    const menuIsOpen = navigation.classList.toggle("active");

    menuButton.setAttribute(
      "aria-expanded",
      String(menuIsOpen)
    );

    menuButton.textContent = menuIsOpen ? "✕" : "☰";
    document.body.style.overflow = menuIsOpen ? "hidden" : "";
  });

  navigationLinks?.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
});

const gymVideo = document.getElementById("gymVideo");
const videoToggle = document.getElementById("videoToggle");

if (gymVideo && videoToggle) {
  videoToggle.addEventListener("click", () => {
    if (gymVideo.paused) {
      gymVideo.play();
      videoToggle.textContent = "Ⅱ";
      videoToggle.setAttribute("aria-label", "Παύση βίντεο");
    } else {
      gymVideo.pause();
      videoToggle.textContent = "▶";
      videoToggle.setAttribute("aria-label", "Αναπαραγωγή βίντεο");
    }
  });
}