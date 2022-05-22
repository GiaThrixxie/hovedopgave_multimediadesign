// definerer en variabel ved navn back_to_top som henter elementet med ID'et 'backToTopBtn'
let back_to_top = document.getElementById("backToTopBtn");

// displayBackToTopBtn bruger en 'if-else' statement - hvis dokumentet er skrullet længere end 100 pixels ned så sætter den back_to_top variablens display-property til 'block', hvilket vil vise den
// Hvis den ikke er skruet længere end 100 pixels ned så bliver variablens display-property sat til 'none', hvilket vil skjule den fra brugerens syn, men ikke slette den.
function displayBackToTopBtn() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    back_to_top.style.display = "block";
  } else {
    back_to_top.style.display = "none";
  }
}

// Når vinduet skruller så kalder denne funktionen displayBackToTopBtn
window.onscroll = function() {
  displayBackToTopBtn()
};

// Når knappen bliver trykket kaldes denne funktion - den sætter dokumentets scrollTop-property til at være 0, hvilket vil køre hele siden tilbage til starten
function scrollTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome and others
}