// Seleccionar elementos del DOM
const form = document.querySelector(".form");
const nameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const registerButton = document.querySelector(".form-btn");

// Agregar evento de envío del formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validar campos
  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    passwordInput.value.trim() === ""
  ) {
    alert("Por favor, complete todos los campos");
    return;
  }

  // Simular envío de datos al servidor
  console.log("Enviando datos al servidor...");
  console.log(`Nombre: ${nameInput.value}`);
  console.log(`Email: ${emailInput.value}`);
  console.log(`Password: ${passwordInput.value}`);

  // Redireccionar a la página de inicio
  window.location.href = "inicio.html";
});
