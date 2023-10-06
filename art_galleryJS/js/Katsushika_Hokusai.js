const objetos = [artistaHokusai, objeto5];


const infoArtista = document.createElement('div');
const h1Artista = document.createElement('h1');
const h3Artista = document.createElement('h3');
const h3ArtistaE2 = document.createElement('h3');
const h3ArtistaE3 = document.createElement('h3');
const h4Artista = document.createElement('h4');
infoArtista.className = 'infoArtista';

h1Artista.textContent = 'Katsushika Hokusai';
h3Artista.textContent = 'Fecha de nacimiento : 31 de octubre de 1760';
h3ArtistaE2.textContent = 'Lugar de nacimiento : Tokio, Japón';
h3ArtistaE3.textContent = 'Fecha de muerte :  10 de mayo de 1849 (89 años)';
h4Artista.textContent = 'Hokusai, maestro del género ukiyo-e, produjo una gran cantidad de obras a lo largo de su vida,abarcando retratos, paisajes y escenas cotidianas hasta ilustraciones eróticas. Su enfoque en la representación de la naturaleza y la vida cotidiana japonesa, junto con su habilidad para capturar la majestuosidad del monte Fuji, lo han convertido en una figura destacada en la historia del arte.';


infoArtista.appendChild(h1Artista);
infoArtista.appendChild(h3Artista);
infoArtista.appendChild(h3ArtistaE2);
infoArtista.appendChild(h3ArtistaE3);
infoArtista.appendChild(h4Artista);

divPrincipal.appendChild(infoArtista);
fotosExposicion(objetos);
