//EJERCICIO 1
// Seleccionar el párrafo del DOM usando su ID
const mousePosition = document.querySelector('#mousePosition');

// Agregar un event listener para capturar el movimiento del mouse en el documento
document.addEventListener('mousemove', function(event) {
  // Actualizar el texto del párrafo con la posición actual del mouse
  mousePosition.textContent = `Posición del mouse: X=${event.clientX}, Y=${event.clientY}`;
});

//EJERCICIO 2
// Agregar un evento de clic al botón de envío del formulario
document.getElementById("form1-submit").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe al hacer clic en el botón
  
    // Obtener los valores de los campos de nombre y apellido
    var firstName = document.getElementById("form-fname").value;
    var lastName = document.getElementById("form-lname").value;
  
    // Combinar los valores de nombre y apellido en una variable de nombre completo
    var fullName = firstName + " " + lastName;
  
    // Crear un nuevo elemento de párrafo y establecer su contenido de texto en el nombre completo
    var fullNameElement = document.createElement("p");
    fullNameElement.innerText = fullName;
  
    // Obtener una referencia al formulario y agregar el nuevo elemento de párrafo después del formulario
    var formElement = document.getElementById("form1");
    formElement.parentNode.insertBefore(fullNameElement, formElement.nextSibling);
  });

//EJERCICIO 3
// Obtener los botones de inserción de fila y columna
var insertRowBtn = document.getElementById("btn-insert-r");
var insertColBtn = document.getElementById("btn-insert-c");

// Agregar un evento de clic a cada botón de inserción
insertRowBtn.addEventListener("click", function() {
    // Crear una nueva fila
    var newRow = document.createElement("tr");

    // Crear dos nuevas celdas y agregarlas a la nueva fila
    var newCell1 = document.createElement("td");
    var newCell2 = document.createElement("td");
    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);

    // Obtener una referencia a la tabla y agregar la nueva fila al final
    var table = document.getElementById("sampleTable");
    table.appendChild(newRow);
});

insertColBtn.addEventListener("click", function() {
    // Obtener todas las filas de la tabla
    var rows = document.querySelectorAll("#sampleTable tr");

    // Para cada fila, crear una nueva celda y agregarla al final
    rows.forEach(function(row) {
        var newCell = document.createElement("td");
        row.appendChild(newCell);
    });
});



  