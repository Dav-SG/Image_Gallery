const objetos = [artistaIto, objeto6];


const infoArtista = document.createElement('div');
const h1Artista = document.createElement('h1');
const h3Artista = document.createElement('h3');
const h3ArtistaE2 = document.createElement('h3');
const h4Artista = document.createElement('h4');
const h4ArtistaE2 = document.createElement('h4');
infoArtista.className = 'infoArtista';

h1Artista.textContent = 'Junji Ito';
h3Artista.textContent = 'Fecha de nacimiento : 31 de julio de 1963';
h3ArtistaE2.textContent = 'Lugar de nacimiento : Gifu, Japón';
h4Artista.textContent = 'Edad actual: 59 años';
h4ArtistaE2.textContent = 'Junji Ito es conocido por su capacidad para crear historias de terror extremadamente perturbadoras. Algunas de sus obras más famosas incluyen "Uzumaki," una historia sobre una ciudad obsesionada por los espirales; y "Gyo," una historia de horror sobre criaturas mecánicas que infestan el mundo.';


infoArtista.appendChild(h1Artista);
infoArtista.appendChild(h3Artista);
infoArtista.appendChild(h3ArtistaE2);
infoArtista.appendChild(h4Artista);
infoArtista.appendChild(h4ArtistaE2);

divPrincipal.appendChild(infoArtista);
fotosExposicion(objetos);
