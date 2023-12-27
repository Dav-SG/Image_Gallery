document.addEventListener('DOMContentLoaded', function() {
    createArtistGallery();
});

function createArtistGallery() {
    // Crear un contenedor principal
    const mainContainer = document.createElement('div');
    mainContainer.className = 'main-container'; // Agregar una nueva clase

    const artistDetails = document.createElement('div');
    artistDetails.className = 'artist-details';

    const header = document.createElement('header');
    header.className = 'header';

    const h2Artist = document.createElement('h2');
    h2Artist.textContent = ''; // Rellenar con el nombre del artista

    const profileImage = document.createElement('img');
    profileImage.className = 'profile-image';
    profileImage.src = ''; // Rellenar con la URL de la imagen de perfil del artista
    profileImage.alt = 'Profile Image';

    const bioContainer = document.createElement('div');
    bioContainer.className = 'bio-container';

    const bioParagraph = document.createElement('p');
    bioParagraph.textContent = ''; // Rellenar con la biografía del artista

    bioContainer.appendChild(bioParagraph);

    header.appendChild(h2Artist);
    header.appendChild(profileImage);
    header.appendChild(bioContainer);

    artistDetails.appendChild(header);

    const photoContainer = document.createElement('div');
    photoContainer.className = 'photo-container';

    fetch('https://api.unsplash.com/users/girlwithredhat/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU')
        .then(response => response.json())
        .then(data => {
            const artist = data;
            profileImage.src = artist.profile_image.large;
            h2Artist.textContent = artist.name;
            bioParagraph.textContent = artist.bio;

            // Añadir la lógica para mostrar las fotos del artista en las tarjetas aquí
            artist.photos.forEach(photo => {
                const photoCard = document.createElement('div');
                photoCard.className = 'photo-card';

                const photoWrapper = document.createElement('div');
                photoWrapper.className = 'photo-wrapper';
                photoWrapper.addEventListener('click', () => mostrarImagen(photo));

                const photoThumbnail = document.createElement('img');
                photoThumbnail.className = 'photo-thumbnail';
                photoThumbnail.src = photo.urls.regular;
                photoThumbnail.alt = photo.alt_description;

                // Agregar clases para aplicar estilos
                photoThumbnail.classList.add('img');
                photoCard.classList.add('foto-card');

                photoWrapper.appendChild(photoThumbnail);
                photoCard.appendChild(photoWrapper);
                photoContainer.appendChild(photoCard);
            });

            artistDetails.appendChild(photoContainer);

            // Añadir artistDetails al contenedor principal
            mainContainer.appendChild(artistDetails);

            // Añadir el contenedor principal al divPrincipal
            divPrincipales.appendChild(mainContainer);
        })
        .catch(error => console.error('Error al obtener información del artista:', error));
}

function mostrarImagen(photo) {
    // Lógica para mostrar la imagen en pantalla completa
    console.log('Mostrar imagen:', photo);
}