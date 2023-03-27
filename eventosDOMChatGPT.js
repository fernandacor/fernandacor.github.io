// Seleccionar el párrafo del DOM usando su ID
const mousePosition = document.querySelector('#mousePosition');

// Agregar un event listener para capturar el movimiento del mouse en el documento
document.addEventListener('mousemove', function(event) {
  // Actualizar el texto del párrafo con la posición actual del mouse
  mousePosition.textContent = `Posición del mouse: X=${event.clientX}, Y=${event.clientY}`;
});

