// Función para reservas: valida, almacena localmente y envía a WhatsApp
function enviarWhatsappReservas(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const personas = document.getElementById("personas").value;
  const fecha = document.getElementById("fecha").value;

  // Validación básica
  if (!nombre || personas < 1 || personas > 12 || !fecha) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }

  // Almacenar en localStorage (simula guardar reservas)
  const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
  reservas.push({ nombre, personas, fecha });
  localStorage.setItem("reservas", JSON.stringify(reservas));
  alert("Reserva guardada localmente y enviada a WhatsApp!");

  // Mensaje predeterminado para WhatsApp
  const mensaje = `Hola! Quiero reservar en Hattori Hai. Nombre: ${nombre}, Personas: ${personas}, Fecha: ${fecha}`;
  window.open(`https://wa.me/541156096892?text=${encodeURIComponent(mensaje)}`, "_blank");

  // Limpiar formulario
  document.getElementById("form-reservas").reset();
}

// Función para delivery: mensaje predeterminado
function enviarWhatsappDelivery() {
  const mensaje = "Hola, quiero pedir delivery en Hattori Hai. ¿Me pueden ayudar con el menú?";
  window.open(`https://wa.me/541156096892?text=${encodeURIComponent(mensaje)}`, "_blank");
}

// Función para toggle del menú hamburguesa
function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("active");
}