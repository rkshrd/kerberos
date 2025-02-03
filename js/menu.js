const button = document.getElementById("sommaire-button");
const menu = document.getElementById("dropdown-menu");

button.addEventListener("click", () => {
    // Ajoute ou enlève la classe "active" pour afficher/masquer le menu
    menu.classList.toggle("active");
});

// Optionnel : Clique en dehors pour fermer le menu
document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("active");
    }
});