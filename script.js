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