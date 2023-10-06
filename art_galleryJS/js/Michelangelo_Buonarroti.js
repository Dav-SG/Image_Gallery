const objetos = [artistaMichelangelo, objeto8];


const infoArtista = document.createElement('div');
const h1Artista = document.createElement('h1');
const h3Artista = document.createElement('h3');
const h3ArtistaE2 = document.createElement('h3');
const h4Artista = document.createElement('h4');
const h4ArtistaE2 = document.createElement('h4');
infoArtista.className = 'infoArtista';

h1Artista.textContent = 'Michelangelo Buonarroti';
h3Artista.textContent = 'Fecha de muerte : 18 de febrero de 1564 (88 años)';
h3ArtistaE2.textContent = 'Lugar de nacimiento : Toscana, Italia';
h4Artista.textContent = 'Fecha de muerte : 52 de mayo de 1519 (67 años)';
h4ArtistaE2.textContent = 'Michelangelo fue uno de los artistas más influyentes'+
' del Renacimiento italiano. Se destacó en la escultura, la pintura y la arquitectura.'+
' Algunas de sus obras más famosas incluyen la escultura del "David", los frescos '+
'de la Capilla Sixtina en el Vaticano y la cúpula de la Basílica de San Pedro en Roma.';


infoArtista.appendChild(h1Artista);
infoArtista.appendChild(h3Artista);
infoArtista.appendChild(h3ArtistaE2);
infoArtista.appendChild(h4Artista);
infoArtista.appendChild(h4ArtistaE2);

divPrincipal.appendChild(infoArtista);
fotosExposicion(objetos);


