function showImage() {
    var button = document.getElementById('showImageButton');
    var img = document.getElementById('myImage');
    button.style.display = 'none';
    img.style.display = 'block';
}

function showButton() {
    var button = document.getElementById('showImageButton');
    var img = document.getElementById('myImage');
    img.style.display = 'none';
    button.style.display = 'block';
}

document.getElementById('fallingObject') .addEventListener('click', function(){
    this.style.animation = 'none'; /* Detiene la animación actual */
    void this.offsetWidth; /* Activa un reflow para reiniciar la animación */
    this.style.animation = 'fallAndRise 4s forwards'; /* Reinicia la animación */
});

// Función para incrementar el contador de visitas
function incrementarContador() {
    // Verificar si localStorage es compatible y está disponible
    if (typeof(Storage) !== "undefined") {
        // Obtener el valor actual del contador de visitas desde localStorage
        let visitas = localStorage.getItem("contadorVisitas");

        // Si no hay valor almacenado, comenzar en 1
        if (visitas === null) {
            visitas = 1;
        } else {
            // Si hay un valor almacenado, convertir a número y aumentar en 1
            visitas = parseInt(visitas) + 1;
        }

        // Guardar el nuevo valor del contador de visitas en localStorage
        localStorage.setItem("contadorVisitas", visitas);

        // Actualizar el contenido en el HTML
        document.getElementById("contadorVisitas").textContent = visitas;
    } else {
        // En caso de que localStorage no esté disponible
        alert("LocalStorage no está soportado en este navegador. No se puede contar las visitas.");
    }
}

// Llamar a la función para incrementar el contador al cargar la página
incrementarContador();