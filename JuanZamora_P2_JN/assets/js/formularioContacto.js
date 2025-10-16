const form = document.getElementById("contactForm");
const vistaPrevia = document.getElementById("vistaPrevia");
const btnLimpiar = document.getElementById("btnLimpiar");

const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("correo");
const asuntoSelect = document.getElementById("asunto");
const mensajeInput = document.getElementById("mensaje");

const prevNombre = document.getElementById("prevNombre");
const prevCorreo = document.getElementById("prevCorreo");
const prevAsunto = document.getElementById("prevAsunto");
const prevMensaje = document.getElementById("prevMensaje");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const nombre = nombreInput.value.trim();
  const correo = correoInput.value.trim();
  const asunto = asuntoSelect.value.trim();
  const mensaje = mensajeInput.value.trim();

 
  if (!nombre || !correo || !asunto || !mensaje) {
    alert("Por favor, complete todos los campos.");
    vistaPrevia.classList.add("d-none");
    return;
  }

  
  prevNombre.textContent = nombre;
  prevCorreo.textContent = correo;
  prevAsunto.textContent = asunto;
  prevMensaje.textContent = mensaje;

  vistaPrevia.classList.remove("d-none");
});


btnLimpiar.addEventListener("click", function () {
  form.reset(); 
  vistaPrevia.classList.add("d-none"); 
});
