const objetos = [artistaGeorge, objeto3];


const infoArtista = document.createElement('div');
const h1Artista = document.createElement('h1');
const h3Artista = document.createElement('h3');
const h3ArtistaE2 = document.createElement('h3');
const h4Artista = document.createElement('h4');
const h4ArtistaE2 = document.createElement('h4');
infoArtista.className = 'infoArtista';

h1Artista.textContent = 'Georges-Pierre Seurat ';
h3Artista.textContent = 'Fecha de nacimiento : 2 de diciembre de 1859';
h3ArtistaE2.textContent = 'Lugar de nacimiento : París, Francia';
h4Artista.textContent = 'Fecha de muerte : 29 de marzo de 1891 (32)';
h4ArtistaE2.textContent = 'Ingresó muy joven en el taller de Henri Lehmann,' +
'donde aprendió las teorías acerca de la luz'+
'y el color inspiradas en el clasicismo'+
 'de Jean-Auguste-Dominique. Más tarde participó'+
'en la fundación del Salón de Artistas Independientes';


infoArtista.appendChild(h1Artista);
infoArtista.appendChild(h3Artista);
infoArtista.appendChild(h3ArtistaE2);
infoArtista.appendChild(h4Artista);
infoArtista.appendChild(h4ArtistaE2);

divPrincipal.appendChild(infoArtista);
fotosExposicion(objetos);


