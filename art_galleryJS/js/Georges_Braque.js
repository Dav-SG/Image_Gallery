const objetos = [artistaGeorges, objeto2];


const infoArtista = document.createElement('div');
const h1Artista = document.createElement('h1');
const h3Artista = document.createElement('h3');
const h3ArtistaE2 = document.createElement('h3');
const h4Artista = document.createElement('h4');
const h4ArtistaE2 = document.createElement('h4');
infoArtista.className = 'infoArtista';

h1Artista.textContent = 'Georges Braque';
h3Artista.textContent = 'Fecha de nacimiento : 13 de mayo de 1882';
h3ArtistaE2.textContent = 'Lugar de nacimiento : Argenteuil-sur-Seine, cerca de París, Francia';
h4Artista.textContent = 'Fecha de muerte : 31 de agosto de 1963 (81 años)';
h4ArtistaE2.textContent = 'Pintor francés. Hijo de un pintor de brocha gorda, oficio que siguió'+
'en unc rincipio, Georges Braque estudió a partir de 1900'+
 'en la Escuela de Bellas Artes de París y hacia 1906 se adhirió'+
 ' al fauvismo, bajo la influencia de su amigo Othon Friezs,'+
 ' con obras como El embarcadero del puerto del Estaque.';


infoArtista.appendChild(h1Artista);
infoArtista.appendChild(h3Artista);
infoArtista.appendChild(h3ArtistaE2);
infoArtista.appendChild(h4Artista);
infoArtista.appendChild(h4ArtistaE2);

divPrincipal.appendChild(infoArtista);
fotosExposicion(objetos);


