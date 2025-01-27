// Sélection des éléments nécessaires
const buttonTravaux = document.getElementById("button_sousm");
const sousMenu = document.getElementById("sous_menu");

// Rendre le sous-menu invisible par défaut
sousMenu.style.display = "none";

// Ajouter un gestionnaire d'événement pour le clic sur le bouton
buttonTravaux.addEventListener("click", () => {
  // Basculer la visibilité du sous-menu
  if (sousMenu.style.display === "none") {
    sousMenu.style.display = "block";
  } else {
    sousMenu.style.display = "none";
  }
});

// Optionnel : Fermer le sous-menu si l'utilisateur clique en dehors
window.addEventListener("click", (event) => {
  if (!buttonTravaux.contains(event.target) && !sousMenu.contains(event.target)) {
    sousMenu.style.display = "none";
  }
});