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


