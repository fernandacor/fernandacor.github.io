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
    var fullNameGPT = "Nombre completo: " + firstNameGPT + " " + lastNameGPT;
  
    // Crear un nuevo elemento de párrafo y establecer su contenido de texto en el nombre completo
    var fullNameElementGPT = document.createElement("p");
    fullNameElementGPT.innerText = fullNameGPT;
  
    // Obtener una referencia al formulario y agregar el nuevo elemento de párrafo después del formulario
    var formElementGPT = document.getElementById("form1GPT");
    formElementGPT.parentNode.insertBefore(fullNameElementGPT, formElementGPT.nextSibling);
  });

//EJERCICIO 2 CON COPILOT
//crea una función que tome los valores de los campos de nombre y apellido y que cree un nuevo elemento que los muestre en un párrafo cuando se haga clic en el botón de envío del formulario
function formSubmitCP() {
    //obtenemos los valores de los campos de nombre y apellido
    var firstNameCP = document.getElementById("form-fnameCP").value;
    var lastNameCP = document.getElementById("form-lnameCP").value;
    //combinamos los valores de nombre y apellido en una variable de nombre completo
    var fullNameCP = "Nombre completo: " + firstNameCP + " " + lastNameCP;
    //creamos un nuevo elemento de párrafo y establecemos su contenido de texto en el nombre completo
    var fullNameElementCP = document.createElement("p");
    fullNameElementCP.innerText = fullNameCP;
    //obtenemos una referencia al formulario y agregamos el nuevo elemento de párrafo después del formulario
    var formElementCP = document.getElementById("form1CP");
    formElementCP.parentNode.insertBefore(fullNameElementCP, formElementCP.nextSibling);
  }
  

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

    // //EJERCICIO 3 CON COPILOT
    // //crea una función que inserte una fila y una columna en la tabla 
    // function insertRow() {
    //     //obtenemos la tabla
    //     var table = document.getElementById("sampleTableCP");
    //     //creamos una nueva fila
    //     var rowCP = table.insertRow(-1);
    //     //creamos dos nuevas celdas
    //     var cell1 = row.insertCell(0);
    //     var cell2 = row.insertCell(1);
    //     //mostramos las celdas en blanco
    //     cell1.innerHTML = "New Row";
    //     cell2.innerHTML = "New Row";
    // }
    
    // function insertColumn() {
    //     //obtenemos la tabla
    //     var table = document.getElementById("sampleTableCP");
    //     //obtenemos todas las filas de la tabla
    //     var rows = table.rows;
    //     //recorremos las filas
    //     for (var i = 0; i < rows.length; i++) {
    //         //insertamos una celda en cada fila
    //         var cell = rows[i].insertCell(-1);
    //         //mostramos las celdas en blanco
    //         cell.innerHTML = "New Column";
    //     }
    // }

//EJERCICIO 3 CON COPILOT
//crea una función que inserte una fila y una columna en la tabla cuando se haga clic en los botones de insertar fila y columna
function insertRowCP() {
    //obtenemos la tabla
    var table = document.getElementById("sampleTableCP");
    //creamos una nueva fila
    var rowCP = table.insertRow(-1);
    //creamos dos nuevas celdas
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    //mostramos las celdas en blanco
    cell1.innerHTML = "";
    cell2.innerHTML = "";
}

function insertColumnCP() {
    //obtenemos la tabla
    var table = document.getElementById("sampleTableCP");
    //obtenemos todas las filas de la tabla
    var rows = table.rows;
    //recorremos las filas
    for (var i = 0; i < rows.length; i++) {
        //insertamos una celda en cada fila
        var cell = rows[i].insertCell(+1); //me puso -1 y lo cambié a +1
        //mostramos las celdas en blanco
        cell.innerHTML = "";
    }
}

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
//crea una función que cambie el valor de una celda de la tabla
// function changeValue() {
//     //obtenemos los valores de las cajas de texto
//     var rowIndex = document.getElementById("rowIndex").value;
//     var colIndex = document.getElementById("colIndex").value;
//     var newValue = document.getElementById("newValue").value;
//     //obtenemos la tabla
//     var table = document.getElementById("myTable");
//     //obtenemos la fila y la celda de la tabla
//     var row = table.rows[rowIndex];
//     var cell = row.cells[colIndex];
//     //mostramos el nuevo valor en la celda
//     cell.innerHTML = newValue;
//   }

//EJERCICIO 5 CON GPT
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


//EJERCICIO 5 CON COPILOT
//crea una función que agregue y elimine colores de un select
// function addColor() {
//     //generamos un color aleatorio
//     var color = getRandomColor();
//     //creamos un elemento option
//     var option = document.createElement("option");
//     //agregamos el color como valor y texto del option
//     option.value = color;
//     option.text = color;
//     //agregamos el option al select
//     colorSelect.add(option);
//   }

// function removeColor() {
//     //eliminamos el último elemento del select
//     colorSelect.remove(colorSelect.length - 1);
//   }

// //función para generar un color aleatorio
// function getRandomColor() {
//     var letters = "0123456789ABCDEF";
//     var color = "#";
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

  
  //EJERCICIO 6 CON GPT
  // // Obtenemos la imagen del documento
  // const imagenGato = document.getElementById('imagenGatoGPT');
  
  // // Agregamos un evento de mouseover a la imagen
  // imagenGato.addEventListener('mouseover', function() {
  //     // Generamos dos números aleatorios entre 300 y 600 para el width y height
  //     const width = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  //     const height = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
      
  //     // Creamos una nueva URL para la imagen con el tamaño aleatorio
  //     const newUrl = `http://placekitten.com/${width}/${height}`;
      
  //     // Cambiamos la imagen de la imagen de placeholder por la nueva imagen con el tamaño aleatorio
  //     imagenGato.src = newUrl;
  //   });
  // Obtenemos la imagen del documento
// const imagenGato = document.getElementById('imagenGatoGPT');

// // Agregamos un evento de mouseover a la imagen
// imagenGato.addEventListener('mouseover', function() {
//     // Generamos dos números aleatorios entre 300 y 600 para el width y height
//     const width = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
//     const height = Math.floor(Math.random() * (600 - 300 + 1)) + 300;

//     // Creamos una nueva URL para la imagen con el tamaño aleatorio
//     const newUrl = `http://placekitten.com/${width}/${height}`;

//     // Creamos un objeto de imagen para pre-cargar la imagen de tamaño aleatorio
//     const imagenNueva = new Image();
//     imagenNueva.onload = function() {
//         // Cambiamos la imagen de la imagen de placeholder por la nueva imagen con el tamaño aleatorio
//         imagenGato.src = newUrl;
//     };
//     imagenNueva.src = newUrl;
// });

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
      //crea una función que cambie el tamaño de la imagen al pasar el mouse sobre ella con un event listener mouseover
      function changeSize() {
        //generamos un tamaño aleatorio
        var width = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
        var height = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
        //creamos una nueva URL para la imagen con el tamaño aleatorio
        var newUrl = "http://placekitten.com/" + width + "/" + height;
        //cambiamos la imagen de la imagen de placeholder por la nueva imagen con el tamaño aleatorio
        var image = document.getElementById("imagenGatoCP");
        image.src = newUrl;
      }
      image.addEventListener("mouseover", changeSize);
      
    
    
    