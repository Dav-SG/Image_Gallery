const objetos = [artistaclaude, objeto1];


const infoArtista = document.createElement('div');
const h1Artista = document.createElement('h1');
const h3Artista = document.createElement('h3');
const h3ArtistaE2 = document.createElement('h3');
const h4Artista = document.createElement('h4');
const h4ArtistaE2 = document.createElement('h4');
infoArtista.className = 'infoArtista';

h1Artista.textContent = 'Claude Monet';
h3Artista.textContent = 'Fecha de nacimiento : 14 de noviembre 1840';
h3ArtistaE2.textContent = 'Lugar de nacimiento : París, Francia';
h4Artista.textContent = 'Fecha de muerte : 5 de diciembre 1926 (86 años)';
h4ArtistaE2.textContent = 'Claude Monet fue un pintor francés'+
'uno de los creadores del impresionismo'+
'El término impresionismo deriva del título de su obra Impresión'+
'sol naciente'+
'​Sus primeras obras, hasta la mitad de la década de 1860'+
'son de estilo realista. Monet logró exponer algunas en el Salón de París.';


infoArtista.appendChild(h1Artista);
infoArtista.appendChild(h3Artista);
infoArtista.appendChild(h3ArtistaE2);
infoArtista.appendChild(h4Artista);
infoArtista.appendChild(h4ArtistaE2);

divPrincipal.appendChild(infoArtista);
fotosExposicion(objetos);


