// Mensaje de confirmación del formulario (sin enviar a un servidor)
const form = document.getElementById("formContacto");
const respuesta = document.getElementById("respuestaForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  respuesta.textContent = `¡Gracias, ${nombre}! Tu mensaje fue recibido.`;
  respuesta.className = "mt-3 small text-success";
  form.reset();
});

// Resalta el enlace activo del menú según la sección visible
const enlaces = document.querySelectorAll(".navbar .nav-link");
const secciones = [...enlaces].map(a => document.querySelector(a.getAttribute("href")));

window.addEventListener("scroll", () => {
  const y = window.scrollY + 120;
  secciones.forEach((sec, i) => {
    if (sec && sec.offsetTop <= y && sec.offsetTop + sec.offsetHeight > y) {
      enlaces.forEach(a => a.classList.remove("active"));
      enlaces[i].classList.add("active");
    }
  });
});
