//SOLUCIONES GENERADAS UTILIZANDO CHAT GPT
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

//EJERCICIO 4
// Obtenemos los elementos HTML de las cajas de entrada y el botón
const rowIndexInput = document.getElementById('rowIndex');
const colIndexInput = document.getElementById('colIndex');
const newValueInput = document.getElementById('newValue');
const changeButton = document.getElementById('btn-change');
const table = document.getElementById('myTable');

// Agregamos un evento de clic al botón
changeButton.addEventListener('click', function() {
  // Obtenemos los valores ingresados por el usuario en las cajas de entrada
  const rowIndex = parseInt(rowIndexInput.value);
  const colIndex = parseInt(colIndexInput.value);
  const newValue = newValueInput.value;

  // Obtenemos la fila y la celda de la tabla correspondiente a los índices ingresados
  const row = table.rows[rowIndex];
  const cell = row.cells[colIndex];

  // Actualizamos el contenido de la celda con el nuevo valor ingresado por el usuario
  cell.innerHTML = newValue;
});

//EJERCICIO 5
// Obtenemos el select del documento
const colorSelect = document.getElementById('colorSelect');

// Obtenemos los botones del documento
const btnAddColor = document.getElementById('btn-add-color');
const btnRmvColor = document.getElementById('btn-rmv-color');

// Agregamos un evento de click al botón para agregar color
btnAddColor.addEventListener('click', function() {
  // Generamos un color aleatorio
  const color = getRandomColor();

  // Creamos un elemento option y lo agregamos al select
  const option = document.createElement('option');
  option.value = color;
  option.text = color;
  colorSelect.add(option);
});

// Agregamos un evento de click al botón para eliminar color
btnRmvColor.addEventListener('click', function() {
  // Eliminamos el último elemento del select
  colorSelect.remove(colorSelect.length - 1);
});

// Función para generar un color aleatorio
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


//EJERCICIO 6
// Obtenemos la imagen del documento
const imagenGato = document.getElementById('imagenGato');

// Agregamos un evento de mouseover a la imagen
imagenGato.addEventListener('mouseover', function() {
  // Generamos dos números aleatorios entre 300 y 600 para el width y height
  const width = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  const height = Math.floor(Math.random() * (600 - 300 + 1)) + 300;

  // Creamos una nueva URL para la imagen con el tamaño aleatorio
  const newUrl = `http://placekitten.com/${width}/${height}`;

  // Cambiamos la imagen de la imagen de placeholder por la nueva imagen con el tamaño aleatorio
  imagenGato.src = newUrl;
});




  