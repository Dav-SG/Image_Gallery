const objetos = [artistaDonato, objeto9];


const infoArtista = document.createElement('div');
const h1Artista = document.createElement('h1');
const h3Artista = document.createElement('h3');
const h3ArtistaE2 = document.createElement('h3');
const h4Artista = document.createElement('h4');
const h4ArtistaE2 = document.createElement('h4');
infoArtista.className = 'infoArtista';

h1Artista.textContent = 'Donato di Niccolò di Betto Bardi';
h3Artista.textContent = 'Fecha de nacimiento : Alrededor de 1386';
h3ArtistaE2.textContent = 'Lugar de nacimiento : Florencia, Italia';
h4Artista.textContent = 'Fecha de muerte : 13 de diciembre de 1466 (80 años)';
h4ArtistaE2.textContent = 'Donatello es uno de los escultores más influyentes '+
'del Renacimiento italiano. Sus obras maestras incluyen la escultura en bronce del '+
'"David", que es considerada una de las primeras representaciones realistas de la '+
'figura humana desde la antigüedad clásica.';


infoArtista.appendChild(h1Artista);
infoArtista.appendChild(h3Artista);
infoArtista.appendChild(h3ArtistaE2);
infoArtista.appendChild(h4Artista);
infoArtista.appendChild(h4ArtistaE2);

divPrincipal.appendChild(infoArtista);
fotosExposicion(objetos);


