//EJERCICIO 1 CON GPT
  // Seleccionar el párrafo del DOM usando su ID
  const mousePositionGPT = document.querySelector('#mousePositionGPT');
  // Agregar un event listener para capturar el movimiento del mouse en el documento
  document.addEventListener('mousemove', function(event) {
    // Actualizar el texto del párrafo con la posición actual del mouse
    mousePositionGPT.textContent = `Posición del mouse con GPT: X=${event.clientX}, Y=${event.clientY}`;
  });

//EJERCICIO 1 CON COPILOT
  //crea una función que muestre la posición del mouse en el documento
  function mousePositionCP(event) {
      //obtenemos la posición del mouse
      var x = event.clientX;
      var y = event.clientY;
      //obtenemos el elemento del DOM donde se mostrará la posición del mouse
      var mousePositionCP = document.getElementById("mousePositionCP");
      //mostramos la posición del mouse en el elemento del DOM
      mousePositionCP.innerHTML = "Posición del mouse con Copilot: X=" + x + ", Y=" + y;
    }
    //agrega un event listener para capturar el movimiento del mouse en el documento
    document.addEventListener("mousemove", mousePositionCP);

//EJERCICIO 2 CON GPT
  // Agregar un evento de clic al botón de envío del formulario
  document.getElementById("form1-submitGPT").addEventListener("click", function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe al hacer clic en el botón
    
      // Obtener los valores de los campos de nombre y apellido
      var firstNameGPT = document.getElementById("form-fnameGPT").value;
      var lastNameGPT = document.getElementById("form-lnameGPT").value;
    
      // Combinar los valores de nombre y apellido en una variable de nombre completo
      var fullNameGPT = "Full name: " + firstNameGPT + " " + lastNameGPT;
    
      // Crear un nuevo elemento de párrafo y establecer su contenido de texto en el nombre completo
      var fullNameElementGPT = document.createElement("p");
      fullNameElementGPT.innerText = fullNameGPT;
    
      // Obtener una referencia al formulario y agregar el nuevo elemento de párrafo después del formulario
      var formElementGPT = document.getElementById("form1GPT");
      formElementGPT.parentNode.insertBefore(fullNameElementGPT, formElementGPT.nextSibling);
    });

//EJERCICIO 2 CON COPILOT
    //Crea una función que tome los valores de los campos de nombre y apellido del formulario, y que al dar click al botón de envío del formulario, muestre el nombre completo en un elemento nuevo de párrafo
    function formSubmitCP() {
      //obtenemos los valores de los campos de nombre y apellido
      var firstNameCP = document.getElementById("form-fnameCP").value;
      var lastNameCP = document.getElementById("form-lnameCP").value;
      //combinamos los valores de nombre y apellido en una variable de nombre completo
      var fullNameCP = "Full name: " + firstNameCP + " " + lastNameCP;
      //creamos un nuevo elemento de párrafo y establecemos su contenido de texto en el nombre completo
      var fullNameElementCP = document.createElement("p");
      fullNameElementCP.innerText = fullNameCP;
      //obtenemos una referencia al formulario y agregamos el nuevo elemento de párrafo después del formulario
      var formElementCP = document.getElementById("form1CP");
      formElementCP.parentNode.insertBefore(fullNameElementCP, formElementCP.nextSibling);
    }
    //agregamos un evento de clic al botón de envío del formulario
    document.getElementById("form1-submitCP").addEventListener("click", formSubmitCP);
    //evitamos que el formulario se envíe al hacer clic en el botón de envío del formulario
    document.getElementById("form1-submitCP").addEventListener("click", function(event) {
      event.preventDefault();
    });

//EJERCICIO 3 CON GPT
// Obtener los botones de inserción de fila y columna
var insertRowBtnGPT = document.getElementById("btn-insert-r-GPT");
var insertColBtnGPT = document.getElementById("btn-insert-c-GPT");

// Agregar un evento de clic a cada botón de inserción
insertRowBtnGPT.addEventListener("click", function() {
    // Crear una nueva fila
    var newRowGPT = document.createElement("tr");

    // Crear dos nuevas celdas y agregarlas a la nueva fila
    var newCell1GPT = document.createElement("td");
    newCell1GPT.textContent = "New Row";
    var newCell2GPT = document.createElement("td");
    newCell2GPT.textContent = "New Row";
    newRowGPT.appendChild(newCell1GPT);
    newRowGPT.appendChild(newCell2GPT);

    // Obtener una referencia a la tabla y agregar la nueva fila al final
    var tableGPT = document.getElementById("sampleTableGPT");
    tableGPT.appendChild(newRowGPT);
});

insertColBtnGPT.addEventListener("click", function() {
    // Obtener todas las filas de la tabla
    var rowsGPT = document.querySelectorAll("#sampleTableGPT tr");

    // Para cada fila, crear una nueva celda y agregarla al final
    rowsGPT.forEach(function(rowGPT) {
        var newCellGPT = document.createElement("td");
        newCellGPT.textContent = "New Column";
        rowGPT.appendChild(newCellGPT);
    });
});

//EJERCICIO 3 CON COPILOT

//EJERCICIO 4 CON GPT
// Obtenemos los elementos HTML de las cajas de entrada y el botón
const rowIndexInputGPT = document.getElementById('rowIndexGPT');
const colIndexInputGPT = document.getElementById('colIndexGPT');
const newValueInputGPT = document.getElementById('newValueGPT');
const changeButtonGPT = document.getElementById('btn-changeGPT');
const tableGPT = document.getElementById('myTableGPT');

// Agregamos un evento de clic al botón
changeButtonGPT.addEventListener('click', function() {
  // Obtenemos los valores ingresados por el usuario en las cajas de entrada
  const rowIndexGPT = parseInt(rowIndexInputGPT.value);
  const colIndexGPT = parseInt(colIndexInputGPT.value);
  const newValueGPT = newValueInputGPT.value;

  // Obtenemos la fila y la celda de la tabla correspondiente a los índices ingresados
  const rowGPT = tableGPT.rows[rowIndexGPT];
  const cellGPT = rowGPT.cells[colIndexGPT];

  // Actualizamos el contenido de la celda con el nuevo valor ingresado por el usuario
  cellGPT.innerHTML = newValueGPT;
});

//EJERCICIO 4 CON COPILOT

//EJERCICIO 5 CON GPT
// Obtenemos el select del documento
const colorSelectGPT = document.getElementById('colorSelectGPT');

// Obtenemos los botones del documento
const btnAddColorGPT = document.getElementById('btn-add-colorGPT');
const btnRmvColorGPT = document.getElementById('btn-rmv-colorGPT');

// Agregamos un evento de click al botón para agregar color
btnAddColorGPT.addEventListener('click', function() {
  // Generamos un color aleatorio
  const colorGPT = getRandomColor();

  // Creamos un elemento option y lo agregamos al select
  const optionGPT = document.createElement('option');
  optionGPT.value = colorGPT;
  optionGPT.text = colorGPT;
  colorSelectGPT.add(optionGPT);
});

// Agregamos un evento de click al botón para eliminar color
btnRmvColorGPT.addEventListener('click', function() {
  // Eliminamos el último elemento del select
  colorSelectGPT.remove(colorSelectGPT.length - 1);
});

// Función para generar un color aleatorio
function getRandomColor() {
  const lettersGPT = '0123456789ABCDEF';
  let colorGPT = '#';
  for (let i = 0; i < 6; i++) {
    colorGPT += lettersGPT[Math.floor(Math.random() * 16)];
  }
  return colorGPT;
}

//EJERCICIO 5 CON COPILOT
  
//EJERCICIO 6 CON GPT
// Obtenemos la imagen del documento
const imagenGato = document.getElementById('imagenGatoGPT');

// Agregamos un evento de mouseover a la imagen
imagenGato.addEventListener('mouseover', function() {
  // Generamos dos números aleatorios entre 300 y 600 para el width y height
  const width = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  const height = Math.floor(Math.random() * (600 - 300 + 1)) + 300;

  // Creamos una nueva URL para la imagen con el tamaño aleatorio
  const newUrl = `http://placekitten.com/${width}/${height}`;

  // Creamos un objeto de imagen para pre-cargar la imagen de tamaño aleatorio
  const imagenNueva = new Image();
  imagenNueva.onload = function() {
    // Cambiamos la imagen de la imagen de placeholder por la nueva imagen con el tamaño aleatorio
    imagenGato.src = newUrl;
  };
  imagenNueva.src = newUrl;
});

//EJERCICIO 6 CON COPILOT  

    
    