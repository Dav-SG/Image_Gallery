const objetos = [artistaLeonardo, objeto7];


const infoArtista = document.createElement('div');
const h1Artista = document.createElement('h1');
const h3Artista = document.createElement('h3');
const h3ArtistaE2 = document.createElement('h3');
const h4Artista = document.createElement('h4');
const h4ArtistaE2 = document.createElement('h4');
infoArtista.className = 'infoArtista';

h1Artista.textContent = 'Leonardo Da vinci';
h3Artista.textContent = 'Fecha de nacimiento :  15 de abril de 1452';
h3ArtistaE2.textContent = 'Lugar de nacimiento : Toscana, Italia';
h4Artista.textContent = 'Fecha de muerte : 52 de mayo de 1519 (67 años)';
h4ArtistaE2.textContent = 'Leonardo da Vinci fue un destacado polímata renacentista italiano,'+
' lo que significa que fue una persona altamente talentosa y versátil en una variedad de campos.'+
' Su obra abarca desde la creación de algunas de las pinturas más icónicas de la historia del arte, '+
'como la "Mona Lisa" y "La última cena".';


infoArtista.appendChild(h1Artista);
infoArtista.appendChild(h3Artista);
infoArtista.appendChild(h3ArtistaE2);
infoArtista.appendChild(h4Artista);
infoArtista.appendChild(h4ArtistaE2);

divPrincipal.appendChild(infoArtista);
fotosExposicion(objetos);


