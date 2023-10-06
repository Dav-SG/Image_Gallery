const objetos = [artistaAraki, objeto4];


const infoArtista = document.createElement('div');
const h1Artista = document.createElement('h1');
const h3Artista = document.createElement('h3');
const h3ArtistaE2 = document.createElement('h3');
const h4Artista = document.createElement('h4');
const h4ArtistaE2 = document.createElement('h4');
infoArtista.className = 'infoArtista';

h1Artista.textContent = 'Hirohiko Araki';
h3Artista.textContent = 'Fecha de nacimiento : 7 de junio de 1960';
h3ArtistaE2.textContent = 'Lugar de nacimiento : Sendai, Japón';
h4Artista.textContent = 'Edad actual: 63 años';
h4ArtistaE2.textContent = 'Hirohiko Araki es un renombrado mangaka japonés, principalmente reconocido por su ' +
    'icónica serie de manga "JoJo\'s Bizarre Adventure". Su estilo artístico distintivo, la incorporación de ' +
    'elementos de moda y su influencia en la industria del manga lo convierten en una figura destacada en el ' +
    'mundo del cómic japonés.';


infoArtista.appendChild(h1Artista);
infoArtista.appendChild(h3Artista);
infoArtista.appendChild(h3ArtistaE2);
infoArtista.appendChild(h4Artista);
infoArtista.appendChild(h4ArtistaE2);

divPrincipal.appendChild(infoArtista);
fotosExposicion(objetos);


