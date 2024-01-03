// Crear el contenedor principal
const contenedorImagenes = document.createElement('div');
contenedorImagenes.className = 'unsplash-images';
document.body.appendChild(contenedorImagenes);

// Datos de ejemplo de artistas
const artistas = [
    { nombre: 'Nilson manuel Novelo', imagen: './imagenes/Nilson.jpg', informacion: 'Desarollador' },
    { nombre: 'Samuel Pastrana Camarillo', imagen: './imagenes/Samuel.jpg', informacion: 'Desarollador' },
    { nombre: 'Francisco Pérez García', imagen: './imagenes/Francisco.jpg', informacion: 'Desarollador' },
    { nombre: 'Eduardo interian Parra', imagen: './imagenes/Eduardo.jpg', informacion: 'Desarollador' },
    { nombre: 'David Soberanis Gómez', imagen: './imagenes/David.jpg', informacion: 'Desarollador' },
    { nombre: 'Jorge Salomon Cua Ek', imagen: './imagenes/Cua.jpg', informacion: 'Desarollador' },
    { nombre: 'Alexis Santos Fernandez', imagen: './imagenes/Alexis.jpg', informacion: 'Desarollador' },

];

// Iterar sobre los artistas y agregarlos al contenedor
artistas.forEach(artista => {
    // Crear la tarjeta del artista
    const tarjetaArtista = document.createElement('div');
    tarjetaArtista.className = 'artist-card foto';

    // Contenedor de la imagen del artista
    const contenedorImagen = document.createElement('div');
    contenedorImagen.className = 'contenedor-imagen';
    const imagenArtista = document.createElement('img');
    imagenArtista.className = 'thumbnail';
    imagenArtista.src = artista.imagen;
    imagenArtista.alt = artista.nombre;
    contenedorImagen.appendChild(imagenArtista);

    // Contenedor de la información del artista
    const descripcion = document.createElement('div');
    descripcion.className = 'descripcion';
    descripcion.innerHTML = `<h3>${artista.nombre}</h3><p>${artista.informacion}</p>`;

    // Agregar contenedores a la tarjeta del artista
    tarjetaArtista.appendChild(contenedorImagen);
    tarjetaArtista.appendChild(descripcion);

    // Agregar la tarjeta al contenedor principal
    contenedorImagenes.appendChild(tarjetaArtista);
});

// Estilos
contenedorImagenes.style.display = 'flex';
contenedorImagenes.style.justifyContent = 'space-around';
contenedorImagenes.style.flexWrap = 'wrap';

const tarjetasArtista = document.querySelectorAll('.artist-card');
tarjetasArtista.forEach(tarjeta => {
    tarjeta.style.width = '400px'; // Aumentar el ancho de la tarjeta
    tarjeta.style.border = '1px solid #ccc';
    tarjeta.style.padding = '10px';
    tarjeta.style.margin = '10px';
    tarjeta.style.textAlign = 'center';
});

const contenedoresImagen = document.querySelectorAll('.contenedor-imagen');
contenedoresImagen.forEach(contenedor => {
    contenedor.style.height = '400px'; // Aumentar la altura del contenedor de la imagen
    contenedor.style.overflow = 'hidden';
    contenedor.style.display = 'flex';
    contenedor.style.alignItems = 'center'; // Centrar verticalmente la imagen
});

const imagenesArtista = document.querySelectorAll('.thumbnail');
imagenesArtista.forEach(imagen => {
    imagen.style.width = '100%';
    imagen.style.height = '100%'; // Hacer que la imagen ocupe todo el contenedor
    imagen.style.objectFit = 'cover'; // Ajustar la imagen sin deformarla
});

const descripciones = document.querySelectorAll('.descripcion');
descripciones.forEach(descripcion => {
    descripcion.style.textAlign = 'center';
});