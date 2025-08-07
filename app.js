// Código básico para una aplicación de sorteo de amigo secreto.
// Variable tipo array para almacenar los nombres de los amigos.

let amigos = [];

// --- Función para agregar amigos a la lista ---

function agregarAmigo() {

    // Obtener el texto ingresado por el usuario del input con ID "amigo".

    let nombre = document.getElementById('amigo').value;

    // Validar la entrada. Si el campo está vacío, mostrar una alerta.

    if (nombre.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detenemos la función para no agregar un valor vacío.
    }

    // Actualizar el array de amigos usando .push().

    amigos.push(nombre);

    // Limpiar el campo de entrada.

    document.getElementById('amigo').value = '';

    // Llamamos a la función mostrarAmigosEnLista para mostrar la lista actualizada en la página.

    mostrarAmigosEnLista();
}

//   ------------------- commit 1: Agregar amigos y sortear amigo secreto -------------------

// --- Función para mostrar la lista de amigos  ---

function mostrarAmigosEnLista() {

    // Obtener el elemento de la lista HTML con ID "listaAmigos".

    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente para evitar duplicados.

    lista.innerHTML = "";

    // Recorrer  el array 'amigos'.

    for (let i = 0; i < amigos.length; i++) {

        // Crear un nuevo elemento de lista (<li>) para cada nombre.

        let li = document.createElement('li');

        // Asignar el nombre del amigo al texto del elemento <li>.

        li.textContent = amigos[i];

        // Agregar el nuevo elemento <li> a la lista <ul>.

        lista.appendChild(li);
    }
}


//------------------- commit 2: Sortear amigo secreto -------------------

// --- Función para realizar el sorteo aleatorio ---

function sortearAmigo() {

    // Validar que haya al menos dos amigos para realizar el sorteo.

    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para realizar el sorteo.");
        return;
    }

    // Generar un índice aleatorio.

    // Math.random() devuelve un número flotante entre 0 (inclusive) y 1 (exclusivo).
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado usando el índice aleatorio.
    let amigoSorteado = amigos[indiceAleatorio];

    // Obtener el elemento donde se mostrará el resultado.
    let resultado = document.getElementById('resultado');

    // Actualizar el contenido de ese elemento para mostrar el amigo sorteado.
   
    resultado.innerHTML = `<p class="winner-message">El amigo secreto es: <span>${amigoSorteado}</span></p>`;
}

// -------- commit 3 : Agregar Enter para ingresar amigos -----------

// --- Event Listener para la tecla 'Enter' ---
// Obtenemos el campo de texto.

let inputAmigo = document.getElementById('amigo');

// Agregamos un 'listener' para el evento 'keypress' (cuando se presiona una tecla).

inputAmigo.addEventListener('keypress', function(event) {

    // Comprobamos si la tecla presionada es 'Enter'.
    // `event.key` es la forma de obtener el nombre de la tecla.

    if (event.key === 'Enter') {

        // Prevenimos el comportamiento por defecto de la tecla 'Enter' en un input (que en algunos casos es enviar un formulario).
        event.preventDefault();

        // Llamamos a nuestra función 'agregarAmigo' para procesar la entrada.
        agregarAmigo();
    }
});

// ------------------------commit 4 Todo termindado------------------------