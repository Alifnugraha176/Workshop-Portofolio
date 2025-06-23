const form = document.getElementById('contactForm');
const confirmation = document.getElementById('confirmationMsg');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  confirmation.textContent = "Terima kasih! Pesan Anda telah dikirim.";
  form.reset();
});