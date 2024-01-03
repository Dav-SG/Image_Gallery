// Definir la función para obtener información de los artistas
async function fetchArtistsInfo() {
    const artistURLs = [
        'https://api.unsplash.com/users/girlwithredhat/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
        'https://api.unsplash.com/users/neom/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
        'https://api.unsplash.com/users/robertarnar/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
        'https://api.unsplash.com/users/zonalsublime/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
        'https://api.unsplash.com/users/ilona_a/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
        'https://api.unsplash.com/users/stephanlouis/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
        'https://api.unsplash.com/users/grievek1610begur/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
        'https://api.unsplash.com/users/mak_jp/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
        'https://api.unsplash.com/users/alexandravutof/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
    ];
    const artists = [];

    try {
        const promises = artistURLs.map(async(url) => {
            const response = await fetch(url);
            const artist = await response.json();

            artists.push({
                username: artist.username,
                name: artist.name,
                profileImage: artist.profile_image.large,
            });
        });

        await Promise.all(promises);
    } catch (error) {
        console.error('Error fetching artist info', error);
    }

    return artists;
}

// Función para crear y mostrar la galería de artistas
async function createArtistsGallery() {
    const artists = await fetchArtistsInfo();

    // Mapeo de nombres de artistas a nombres de vistas
    const artistViews = {
        'Girl with red hat': 'Girl_with.html',
        'NEOM': 'neom.html',
        'Robert Arnar': 'robert.html',
        'Zyanya Citlalli': 'citlalli.html',
        'Lena Polishko': 'Lena.html',
        'Stephan Louis': 'Louis.html',
        'Kevin Grieve': 'Kevin.html',
        'Mak': 'Mark.html',
        'Alexandra Vutof': 'Alexandra.html',

    };

    const galleryContainer = document.createElement('div');
    galleryContainer.classList.add('js-artists-gallery', 'divPrincipales', 'contenedor');

    artists.forEach((artist) => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('js-artist-card');

        const thumbnail = document.createElement('img');
        thumbnail.classList.add('js-thumbnail');
        thumbnail.src = artist.profileImage;
        thumbnail.alt = artist.name;

        const artistName = document.createElement('h3');
        artistName.textContent = artist.name;

        // Verificar si hay una vista asociada y construir el enlace
        if (artistViews[artist.name]) {
            const artistLink = document.createElement('a');
            artistLink.href = artistViews[artist.name];
            artistLink.appendChild(thumbnail);
            artistLink.appendChild(artistName);
            artistCard.appendChild(artistLink);
        } else {
            // Si no hay una vista asociada, solo agregar la imagen y el nombre
            artistCard.appendChild(thumbnail);
            artistCard.appendChild(artistName);
        }

        galleryContainer.appendChild(artistCard);
    });

    document.body.appendChild(galleryContainer);
}

// Llamar a la función para crear y mostrar la galería de artistas
createArtistsGallery();