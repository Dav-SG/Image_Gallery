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

//Se añade el div "container" al header
divContainer.className = 'container';
header.appendChild(divContainer);

const imgHeader = document.createElement('img');
imgHeader.src = './svg/dark-mode.svg';
imgHeader.alt = 'icono dark mode';
imgHeader.className = 'dark-mode-boton';

const dropdown1 = document.createElement('div');
dropdown1.className = 'dropdown';

const link1 = document.createElement('a');
link1.href = 'France.html';
const btn1 = document.createElement('button');
btn1.className = 'dropbtn';
btn1.textContent = 'France';
link1.appendChild(btn1);

const dropdownContent1 = document.createElement('div');
dropdownContent1.className = 'dropdown-content';
const links1 = ['Claude_Monet.html', 'Georges_Braque.html', 'Georges-Pierre_Seurat.html'];

links1.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.textContent = link.replace('.html', '');
    dropdownContent1.appendChild(anchor);
});

dropdown1.appendChild(link1);
dropdown1.appendChild(dropdownContent1);
divContainer.appendChild(imgHeader);
divContainer.appendChild(dropdown1);


