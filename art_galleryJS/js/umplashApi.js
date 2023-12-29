 // Crear el contenedor de imágenes
 const contenedorImagenes = document.createElement('div');
 contenedorImagenes.className = 'unsplash-images';
 document.body.appendChild(contenedorImagenes);

 // Definir la clave de acceso a la API de Unsplash
 const apiKey = 'y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU';
 const perPage = 100; // Mostrar 60 imágenes por página

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
     imagenDetalle.src = artist.urls.regular;
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
     closeButton.addEventListener('click', hideImage);

     // Agregar elementos al modal
     navigation.appendChild(prevButton);
     navigation.appendChild(nextButton);
     modalContent.appendChild(imagenDetalle);
     modalContent.appendChild(navigation);
     modalContent.appendChild(closeButton);
     modal.appendChild(modalContent);

     // Agregar el modal al cuerpo del documento
     document.body.appendChild(modal);

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

 // Hacer la solicitud a la API de Unsplash
 fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}&per_page=${perPage}`)
     .then(response => {
         if (!response.ok) {
             throw new Error('Error al obtener datos de la API');
         }
         return response.json();
     })
     .then(datos => {
         // Almacenar las imágenes cargadas
         imagenes = datos;

         // Mostrar las imágenes en cuadros
         datos.forEach((imagenDatos, index) => {
             const cuadro = document.createElement('div');
             cuadro.className = 'artist-card foto';

             const imagen = document.createElement('img');
             imagen.className = 'thumbnail';
             imagen.src = imagenDatos.urls.regular; // URL de la imagen en Unsplash
             imagen.alt = imagenDatos.alt_description; // Descripción de la imagen

             // Agregar evento de clic para mostrar la imagen en detalle
             imagen.addEventListener('click', () => showImage(imagenDatos, index, datos.length));

             const descripcion = document.createElement('div');
             descripcion.className = 'descripcion';
             descripcion.innerHTML = `<h3>${imagenDatos.alt_description}</h3><p>${imagenDatos.description}</p>`;

             cuadro.appendChild(imagen);
             cuadro.appendChild(descripcion);
             contenedorImagenes.appendChild(cuadro);
         });

         // Agregar evento de clic para cerrar la imagen al hacer clic fuera del modal
         document.addEventListener('click', hideImage);


     })
     .catch(error => {
         console.error('Error:', error.message);
     });