function mostrarImagen(imagen) {
    // Lógica para mostrar la imagen en detalle
    console.log('Mostrar imagen en detalle:', imagen);
}

function fotosExposicion(objetos) {
    let aux = 0;

    for (let foto of fotos) {
        foto.className = 'foto';
        const anchor = document.createElement('a');
        const divDesc = document.createElement('div');
        divDesc.className = 'descripcion';
        anchor.href = objetos[aux].linkArtista;
        const img = document.createElement('img');
        img.src = objetos[aux].linkImagen;
        img.alt = 'Obra del Artista';
        img.width = 250;
        img.height = 250;
        anchor.appendChild(img);
        foto.appendChild(anchor);
        foto.appendChild(divDesc);
        const h1Desc = document.createElement('h1');
        const pDesc = document.createElement('p');
        h1Desc.textContent = objetos[aux].descripcion.h1;
        pDesc.textContent = objetos[aux].descripcion.p;
        divDesc.appendChild(h1Desc);
        divDesc.appendChild(pDesc);
        divPrincipal.appendChild(foto);

        if (aux < 9) {
            aux++;
        }
    }
}

function darkMode() {
    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    if (prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    prefiereDarkMode.addEventListener('change', function() {
        if (prefiereDarkMode.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    darkMode();
    // Agregando validación al formulario
    const nombre = document.getElementById('name');
    const correo = document.getElementById('correoEntrada');
    const contra = document.getElementById('passwordEntrada');
    const botonRegis = document.getElementById('boton-re');
    const expresionesCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    botonRegis.addEventListener("click", (event) => {
        if (nombre.value === null || nombre.value === '') {
            alert('Ingresa un nombre correcto')
        }
        if (contra.value === null || contra.value === '') {
            alert('Ingresa una contraseña correcta')
        }
        if (!expresionesCorreo.test(correo.value)) {
            alert('Ingresa un correo válido')
        } else {
            alert('Registrado');
        }
    });

    // Tu código para cargar fotos
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

    // Simulación de fotos con objetos vacíos
    const fotos = Array.from({ length: 10 }, (_, i) => ({ linkImagen: `imagen${i}.jpg`, descripcion: { h1: `Título ${i}`, p: `Descripción ${i}` }, linkArtista: `artista${i}.html` }));

    fotosExposicion(fotos);

    document.body.appendChild(artistDetails);
});