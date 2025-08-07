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

