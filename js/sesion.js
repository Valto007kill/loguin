const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInput = document.querySelector('input[name="email"]').value.trim();
  const passwordInput = document
    .querySelector('input[name="password"]')
    .value.trim();

  if (!emailInput || !passwordInput) {
    alert("Por favor, complete todos los campos");
    return;
  }

  try {
    const response = await fetch("http://localhost/tu_ruta/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
      }),
    });

    const result = await response.json();
    if (result.success) {
      alert("Inicio de sesión exitoso");
      window.location.href = "inicio.html";
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Ocurrió un error al iniciar sesión.");
  }
});

/*
// Seleccionar elementos del DOM
const form = document.querySelector(".form");
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const loginButton = document.querySelector(".form-btn");

// Agregar evento de envío del formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validar campos
  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("Por favor, complete todos los campos");
    return;
  }

  // Simular envío de datos al servidor
  console.log("Enviando datos al servidor...");
  console.log(`Email: ${emailInput.value}`);
  console.log(`Password: ${passwordInput.value}`);

  // Redireccionar a la página de inicio
  window.location.href = "inicio.html";
});
*/
