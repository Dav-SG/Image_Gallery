// Crear el contenedor de imágenes
const contenedorImagenes = document.createElement('div');
contenedorImagenes.className = 'unsplash-images';
document.body.appendChild(contenedorImagenes);

// Definir la clave de acceso a la API de Unsplash
const apiKey = 'y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU';
const perPage = 20; // Mostrar 20 imágenes aleatorias
let imagenes = []; // Almacenar las imágenes cargadas

// Función para mostrar la imagen en detalle al hacer clic
function showImage(artist, currentIndex, totalImages) {
    // Crear el modal
    const modal = document.createElement('div');
    modal.className = 'modal';

    // Contenido del modal
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Imagen en detalle
    const imagenDetalle = document.createElement('img');
    imagenDetalle.className = 'thumbnail-modal';
    imagenDetalle.src = artist.urls.regular; // Cambiado a calidad regular
    imagenDetalle.alt = artist.alt_description;

    // Navegación entre imágenes
    const navigation = document.createElement('div');
    navigation.className = 'navigation';

    // Botón para ir a la imagen anterior
    const prevButton = document.createElement('button');
    prevButton.className = 'nav-button';
    prevButton.innerHTML = '&lt;'; // Flecha izquierda
    prevButton.addEventListener('click', () => navigateImages(currentIndex - 1, totalImages));

    // Botón para ir a la siguiente imagen
    const nextButton = document.createElement('button');
    nextButton.className = 'nav-button';
    nextButton.innerHTML = '&gt;'; // Flecha derecha
    nextButton.addEventListener('click', () => navigateImages(currentIndex + 1, totalImages));

    // Botón para cerrar el modal
    const closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Agregar elementos al modal
    navigation.appendChild(prevButton);
    navigation.appendChild(nextButton);
    modalContent.appendChild(imagenDetalle);
    modalContent.appendChild(navigation);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);

    // Agregar el modal al cuerpo del documento
    document.body.appendChild(modal);

    // Cerrar el modal al hacer clic fuera de la imagen
    modal.addEventListener('click', hideImage);
}

// Función para navegar entre imágenes en el modal
function navigateImages(index, totalImages) {
    // Asegurarse de que el índice esté dentro del rango de imágenes
    index = Math.max(0, Math.min(index, totalImages - 1));

    // Obtener el modal actual
    const modal = document.querySelector('.modal');

    // Cerrar el modal actual
    if (modal) {
        modal.remove();
    }

    // Mostrar la nueva imagen en detalle
    const nuevaImagen = imagenes[index];
    showImage(nuevaImagen, index, totalImages);
}

// Función para ocultar la imagen al quitar el clic o hacer clic fuera del modal
function hideImage(event) {
    // Verificar si se hizo clic fuera del modal
    if (event.target.classList.contains('modal')) {
        // Buscar el modal y eliminarlo
        const modal = document.querySelector('.modal');
        if (modal) {
            modal.remove();
        }
    }
}

// Función para crear y mostrar la galería de fotos aleatorias
async function createRandomPhotosGallery() {
    const apiUrl = `https://api.unsplash.com/photos/random?count=${perPage}&client_id=${apiKey}&quality=regular`;

    try {
        const response = await fetch(apiUrl);
        const randomPhotos = await response.json();

        randomPhotos.forEach((photo, index) => {
            const photoCard = document.createElement('div');
            photoCard.className = 'artist-card photo-card';

            const thumbnail = document.createElement('img');
            thumbnail.className = 'thumbnail';
            thumbnail.src = photo.urls.regular;
            thumbnail.alt = photo.alt_description;

            // Agregar evento de clic para mostrar la imagen en detalle
            thumbnail.addEventListener('click', () => showImage(photo, index, randomPhotos.length));

            const description = document.createElement('div');
            description.className = 'description';
            description.innerHTML = `<h3>${photo.alt_description}</h3><p>${photo.description}</p>`;

            photoCard.appendChild(thumbnail);
            photoCard.appendChild(description);
            contenedorImagenes.appendChild(photoCard);
        });

        // Almacenar las imágenes cargadas
        imagenes = randomPhotos;

    } catch (error) {
        console.error('Error fetching random photos', error);
    }
}

// Llamar a la función para crear y mostrar la galería de fotos aleatorias
createRandomPhotosGallery();