import { db } from "./firebaseConfig.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Seleccionar el formulario y los elementos del cuadro de agradecimiento
const contactForm = document.getElementById("contact-form");
const thanksBox = document.getElementById("thanks-box");
const overlay = document.getElementById("overlay");
const closeThanksBoxButton = document.getElementById("close-thanks-box");

// Manejar el evento de envío del formulario
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  // Capturar los datos del formulario
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Validar que los campos no estén vacíos
  if (!nombre || !email || !telefono || !mensaje) {
    alert("Por favor, completa todos los campos antes de enviar.");
    return;
  }

  try {
    // Guardar los datos en Firebase Firestore
    await addDoc(collection(db, "consultas"), {
      nombre,
      email,
      telefono,
      mensaje,
      timestamp: new Date() // Agregar una marca de tiempo
    });

    // Mostrar el cuadro de agradecimiento
    thanksBox.style.display = "block";
    overlay.style.display = "block";

    // Limpiar el formulario
    contactForm.reset();
  } catch (error) {
    console.error("Error al enviar los datos: ", error);
    alert("Ocurrió un error al enviar tus datos. Inténtalo nuevamente.");
  }
});

// Cerrar el cuadro de agradecimiento cuando se haga clic en el botón de cierre
closeThanksBoxButton.addEventListener("click", () => {
  thanksBox.style.display = "none";
  overlay.style.display = "none";
});

// Cerrar el cuadro de agradecimiento si se hace clic fuera de él (en el overlay)
overlay.addEventListener("click", () => {
  thanksBox.style.display = "none";
  overlay.style.display = "none";
});