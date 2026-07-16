document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('messageModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const noBtn = document.getElementById('noButton');
    const bgMusic = document.getElementById('bgMusic');

    document.body.addEventListener('click', function() {
        if (bgMusic.paused) bgMusic.play().catch(e => console.log(e));
    }, { once: true });

    openBtn.addEventListener('click', () => modal.style.display = 'flex');
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    
    noBtn.addEventListener('mouseover', function () {
        const modalContent = document.querySelector('.modal-content');
        const maxLeft = modalContent.clientWidth - noBtn.clientWidth - 30;
        const maxTop = modalContent.clientHeight - noBtn.clientHeight - 30;
        noBtn.style.position = 'absolute';
        noBtn.style.left = (Math.random() * maxLeft) + 'px';
        noBtn.style.top = (Math.random() * maxTop) + 'px';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('messageModal');
    const openBtn = document.getElementById('openModalBtn');
    const noBtn = document.getElementById('noButton');
    const bgMusic = document.getElementById('bgMusic');

    // Función para intentar reproducir la música en cualquier primer clic en la pantalla
    document.body.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play().catch(error => console.log("El navegador requiere más interacción para reproducir el audio."));
        }
    }, { once: true }); // El { once: true } asegura que este evento se dispare solo la primera vez

    // Abre la ventana modal
    openBtn.addEventListener('click', function () {
        modal.style.display = 'flex';
        // Respaldo: si la música aún no suena, forzamos la reproducción al abrir la modal
        if (bgMusic.paused) {
            bgMusic.play();
        }
    });

    // Función para el botón escurridizo confinado a la caja blanca
    noBtn.addEventListener('mouseover', function () {
        const modalContent = document.querySelector('.modal-content');
        
        // Calculamos el espacio máximo disponible dentro de la caja blanca
        const maxLeft = modalContent.clientWidth - noBtn.clientWidth - 30;
        const maxTop = modalContent.clientHeight - noBtn.clientHeight - 30;

        // Generamos coordenadas aleatorias asegurando un margen mínimo de 20px
        const newLeft = Math.floor(Math.random() * (maxLeft - 20)) + 20;
        const newTop = Math.floor(Math.random() * (maxTop - 20)) + 20;

        // Aplicamos la posición absoluta relativa a modal-content
        noBtn.style.position = 'absolute';
        noBtn.style.left = newLeft + 'px';
        noBtn.style.top = newTop + 'px';
    });
});