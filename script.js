const formulario = document.querySelector("#form"); /* cambie let por const y agrege ; */

formulario.onsubmit = function(e) {

  e.preventDefault();
  
  let nombreInput = formulario.elements[0]
  let edadInput = formulario.elements[1]
  let nacionalidadInput = formulario.elements[2]

  let nombre = nombreInput.value
  let edad = edadInput.value
  let nacionalidad = nacionalidadInput.value /*  */

  /* var i = nacionalidadInput.selectedIndex */
  /* var nacionalidad = nacionalidadInput.options[i].value */

  /* separe edad en otro console.log y les agrege un string */
  console.log("Nombre del invitado: " + nombre)
  console.log("Edad del invitado: " + edad)
  console.log("Nacionalidad del invitado: " + nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad >= 18 /*  */
    && edad <= 40) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);


function agregarInvitado(nombre, edad, nacionalidad) {
/* modifique el valor de la nacionalidad que se va a igualar */
  if (nacionalidad === "Argentina") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "Mexicana") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "Venezolana") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "Peruana") {
    nacionalidad = "Peruana"
  }
  

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista") /*  */
lista.appendChild(elementoLista);

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)

/* comente este boton duplicado */
/* var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar); */

  botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}