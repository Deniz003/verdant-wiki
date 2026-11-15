
/* =================================
   ATLAS — KNOWLEDGE ARCHIVE
   Main functionality
================================= */

// 1. SEARCH FUNCTIONALITY

const searchInput = document.getElementById("search");

const navigationLinks = document.querySelectorAll(
    ".explorer nav a"
);

const categoryCards = document.querySelectorAll(
    ".category-card"
);

searchInput.addEventListener("input", function () {

    const query = searchInput.value.toLowerCase().trim();

    // Filter navigation links
    navigationLinks.forEach(link => {

        const text = link.textContent.toLowerCase();

        link.style.display = text.includes(query)
            ? "block"
            : "none";

    });

    // Filter category cards
    categoryCards.forEach(card => {

        const text = card.textContent.toLowerCase();

        card.style.display = text.includes(query)
            ? "block"
            : "none";

    });

});
