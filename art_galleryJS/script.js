// // Obtener una referencia al elemento body
// const body = document.body;
//
// // Cambiar el color de fondo del body
// body.style.backgroundColor = "gray";

// Creación del header
const header = document.querySelector('header');
const divWrapper = document.createElement('div');
const divContainer = document.createElement('div');

//Se añade el div "wrapper" al header
divWrapper.className ='wrapper';
header.appendChild(divWrapper);

const svgElement = document.createElement('svg');
svgElement.innerHTML = `
  <text x="50%" y="50%" dy=".35em" text-anchor="middle">LE PETIT LOUVRE</text>
`;

const h1Element = document.createElement('h1');
h1Element.textContent = 'Art Gallery///Galeria De Arte';

divWrapper.appendChild(svgElement);
divWrapper.appendChild(h1Element);




