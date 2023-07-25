// Obtener los enlaces de navegación
var navLinks = document.querySelectorAll(".header-links a");

// Obtener todas las secciones
var sections = document.querySelectorAll(".section");

// Obtener el elemento main
var mainContent = document.querySelector("main");

// Función para mostrar la pantalla de carga
function showLoader() {
  const loader = document.getElementById("loader");
  loader.classList.remove("hidden");
  mainContent.classList.add("hidden"); // Ocultar el contenido del main
}

// Función para ocultar la pantalla de carga
function hideLoader() {
  const loader = document.getElementById("loader");
  loader.classList.add("hidden");
  mainContent.classList.remove("hidden"); // Mostrar el contenido del main
}

// Agregar el evento de clic a cada enlace
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    const target = link.getAttribute("href"); // Obtener el destino del enlace
    const section = document.querySelector(target); // Obtener la sección correspondiente al destino

    showLoader(); // Mostrar la pantalla de carga

    setTimeout(() => {
      // Ocultar todas las secciones
      sections.forEach((section) => section.classList.add("hidden"));

      section.classList.remove("hidden"); // Mostrar la sección correspondiente al destino

      hideLoader(); // Ocultar la pantalla de carga
    }, 250); // Tiempo de espera simulado (250 milisegundos)

    // Agregar clase para animación fade-in
    section.classList.add("fade-in");
  });
});
