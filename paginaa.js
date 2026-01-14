    // Mensaje de consola para verificar que funciona
console.log("Servitecno cargado correctamente");

// Ejemplo: Cambio de color del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = "10px 0";
    } else {
        header.style.padding = "20px 0";
    }
});