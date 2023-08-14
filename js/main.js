const menuBtn = document.querySelector('#menu-btn')
menuBtn.addEventListener('click', function () {
  document.body.classList.toggle('mobile-menu-active')
})

// Definimos la función toggleContent()
function toggleContent() {
  var paragraphs = document.querySelectorAll("#sobre-mi .contenido p");
  paragraphs.forEach(function (paragraph) {
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  });
}

const sections = document.querySelectorAll('.scroll-section');

function checkSections() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.8) {
      section.style.opacity = '1';
    } else {
      section.style.opacity = '0'; // Vuelve a ocultar la sección si no está visible en la pantalla
    }
  });
}

window.addEventListener('scroll', checkSections);
window.addEventListener('load', checkSections);
window.addEventListener('resize', checkSections);

// Ejecutar la función al cargar la página
checkSections();


const toggleModeBtn = document.getElementById('toggle-mode-btn');
const modeImg = document.getElementById('mode-img');
const body = document.body;

toggleModeBtn.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    modeImg.src = 'img/toggle-on.png'; // Cambia la ruta para el modo claro
  } else {
    body.classList.add('dark-mode');
    modeImg.src = 'img/toggle-off.png'; // Cambia la ruta para el modo oscuro
  }
});

const imagenPerfil = document.getElementById("imagenPerfil");
const otraImagen = document.getElementById("otraImagen");
let mostrarPrimeraImagen = true;

function alternarImagenes() {
  if (mostrarPrimeraImagen) {
    imagenPerfil.style.display = "none";
    otraImagen.style.display = "block";
    mostrarPrimeraImagen = false;
  } else {
    imagenPerfil.style.display = "block";
    otraImagen.style.display = "none";
    mostrarPrimeraImagen = true;
  }
}
setInterval(alternarImagenes, 3000);

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scroll-to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
