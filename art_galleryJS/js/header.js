const body = document.body;
const header = document.createElement('header');
const divContenedor = document.createElement('div');
const main = document.createElement('main');

divContenedor.className = 'contenedor';

body.appendChild(header);
body.appendChild(divContenedor);
divContenedor.appendChild(main);

// Inicia header
// const header = document.querySelector('header');
const divWrapper = document.createElement('div');
const divContainer = document.createElement('div');

//Se añade el div "wrapper" al header
divWrapper.className ='wrapper';
header.appendChild(divWrapper);

// Crear un elemento de SVG
const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.setAttribute("width", "100%");
svgElement.setAttribute("height", "100%");

// Crear un elemento de texto en el SVG
const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
textElement.setAttribute("x", "50%");
textElement.setAttribute("y", "50%");
textElement.setAttribute("dy", ".35em");
textElement.setAttribute("text-anchor", "middle");
textElement.textContent = "LE PETIT LOUVRE";

// Aplicar estilos de animación al texto
textElement.style.animation = "stroke 5s infinite alternate";
textElement.style.strokeWidth = "1";
textElement.style.stroke = "black";
textElement.style.fontSize = "80px";

// Agregar un evento de clic al texto para redirigir a index.html
textElement.addEventListener("click", function() {
    window.location.href = "index.html";
});

// Agregar el texto al elemento SVG
svgElement.appendChild(textElement);

// Agregar el elemento SVG al documento
document.body.appendChild(svgElement);

// Define las keyframes de la animación dinámicamente
const style = document.createElement("style");
style.textContent = `
  @keyframes stroke {
    0%   {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;}
    70%  {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); }
    80%  {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); stroke-width: 3;}
    100% {fill: rgba(72,138,204,1); stroke: rgba(54,95,160,0); stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;}
  }
`;

// Agregar los estilos al encabezado del documento
document.head.appendChild(style);

const h1Element = document.createElement('h1');
h1Element.textContent = 'Art Gallery///Galeria De Arte';

divWrapper.appendChild(svgElement);
divWrapper.appendChild(h1Element);

//Se añade el div "container" al header
divContainer.className = 'container';
header.appendChild(divContainer);

//Contenido del divContainer
const imgHeader = document.createElement('img');
imgHeader.src = './svg/dark-mode.svg';
imgHeader.alt = 'icono dark mode';
imgHeader.className = 'dark-mode-boton';

const dropdown1 = document.createElement('div');
const dropdown2 = document.createElement('div');
const dropdown3 = document.createElement('div');
const dropdown4 = document.createElement('div');

dropdown1.className = 'dropdown';
dropdown2.className = 'dropdown';
dropdown3.className = 'dropdown';
dropdown4.className = 'dropdown';

const link1 = document.createElement('a');
link1.href = 'France.html';
const btn1 = document.createElement('button');
btn1.className = 'dropbtn';
btn1.textContent = 'France';
link1.appendChild(btn1);

const dropdownContent1 = document.createElement('div');
dropdownContent1.className = 'dropdown-content';
const linksDp1 = ['Claude_Monet.html', 'Georges_Braque.html', 'Georges-Pierre_Seurat.html'];

linksDp1.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.textContent = link.replace('.html', '');
    dropdownContent1.appendChild(anchor);
});

dropdown1.appendChild(link1);
dropdown1.appendChild(dropdownContent1);

const link2 = document.createElement('a');
link2.href = 'Japan.html';
const btn2 = document.createElement('button');
btn2.className = 'dropbtn';
btn2.textContent = 'Japan';
link2.appendChild(btn2);

const dropdownContent2 = document.createElement('div');
dropdownContent2.className = 'dropdown-content';
const linksDp2 = ['Hirohiko_Araki.html', 'Katsushika_Hokusai.html', 'Junji_Ito.html'];

linksDp2.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.textContent = link.replace('.html', '');
    dropdownContent2.appendChild(anchor);
});

dropdown2.appendChild(link2);
dropdown2.appendChild(dropdownContent2);

const link3 = document.createElement('a');
link3.href = 'Italy.html';
const btn3 = document.createElement('button');
btn3.className = 'dropbtn';
btn3.textContent = 'Italy';
link3.appendChild(btn3);

const dropdownContent3 = document.createElement('div');
dropdownContent3.className = 'dropdown-content';
const linksDp3 = ['Leonardo_da_Vinci.html', 'Michelangelo_Buonarroti.html', 'Donato_di_Niccolo_di_Betto_Bardi.html'];

linksDp3.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.textContent = link.replace('.html', '');
    dropdownContent3.appendChild(anchor);
});

dropdown3.appendChild(link3);
dropdown3.appendChild(dropdownContent3);

const link4 = document.createElement('a');
link4.href = 'Formulario.html';
const btn4 = document.createElement('button');
btn4.className = 'dropbtn';
btn4.textContent = 'Registrate';
link4.appendChild(btn4);

dropdown4.appendChild(link4);

divContainer.appendChild(imgHeader);
divContainer.appendChild(dropdown1);
divContainer.appendChild(dropdown2);
divContainer.appendChild(dropdown3);
divContainer.appendChild(dropdown4);

//Finaliza Header