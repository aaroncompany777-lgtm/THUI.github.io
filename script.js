// Accordion Functionality (only one open at a time)
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const openItem = document.querySelector(".accordion-item.active");

    // Close any already open item
    if (openItem && openItem !== item) {
      openItem.classList.remove("active");
    }

    // Toggle clicked item
    item.classList.toggle("active");
  });
});
