//Se crean elementos del html
const body = document.body;
const header = document.createElement('header');
const divContenedor = document.createElement('div');
const main = document.createElement('main');

//Se le asigna la clase "contenedor" al divContenedor
divContenedor.className = 'contenedor';

//Se añade al body del html los elementos header, divContenedor
body.appendChild(header);
body.appendChild(divContenedor);

//Se le añade al divContenedor el main en el html
divContenedor.appendChild(main);

// Inicia header
//Se crean dos divs
const divWrapper = document.createElement('div');
const divContainer = document.createElement('div');

//Se añade el div "wrapper" al header
divWrapper.className ='wrapper';
header.appendChild(divWrapper);

// Crear un elemento de SVG
const svgPetitLouvre = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgPetitLouvre.setAttribute("width","100%");
svgPetitLouvre.setAttribute("height","100%");

// Crear un elemento de texto en el SVG
const petitLouvre = document.createElementNS("http://www.w3.org/2000/svg", "text");
petitLouvre.setAttribute("x","50%");
petitLouvre.setAttribute("y","50%");
petitLouvre.setAttribute("dy",".35em");
petitLouvre.setAttribute("text-anchor", "middle");
petitLouvre.textContent = "LE PETIT LOUVRE";

// Aplicar estilos de animación al text
petitLouvre.style.animation = "stroke 5s infinite alternate";
petitLouvre.style.strokeWidth = "1";
petitLouvre.style.stroke = "black";
petitLouvre.style.fontSize = "80px";

// Agregar un evento de clic al texto para redirigir al index
petitLouvre.addEventListener("click", function() {
    window.location.href = "index.html";
});

// Agregar el texto al elemento SVG
svgPetitLouvre.appendChild(petitLouvre);

// Agregar el elemento SVG al documento
document.body.appendChild(svgPetitLouvre);

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

//Se crea el elemento h1 del header
const h1Element = document.createElement('h1');

//Se le asigna el contenido del texto del h1
h1Element.textContent = 'Art Gallery///Galeria De Arte';

//Se añanden los elementos svgPetitLouvre y h1Element al divWrapper
divWrapper.appendChild(svgPetitLouvre);
divWrapper.appendChild(h1Element);

//Se añade el div "container" al header
divContainer.className = 'container';
header.appendChild(divContainer);

//Contenido del divContainer
const imgHeader = document.createElement('img');
imgHeader.src = './svg/dark-mode.svg';
imgHeader.alt = 'icono dark mode';
imgHeader.className = 'dark-mode-boton';

//Se crean cuatro divs que serán los botones desplegables de la navbar
const dropdown1 = document.createElement('div');
const dropdown2 = document.createElement('div');
const dropdown3 = document.createElement('div');
const dropdown4 = document.createElement('div');

//Se leas asigna la clase "dropdown"
dropdown1.className = 'dropdown';
dropdown2.className = 'dropdown';
dropdown3.className = 'dropdown';
dropdown4.className = 'dropdown';

//Se declara la constante link1 que crea un elemento anchor de html y tendrá como hipervínculo a France.html
const link1 = document.createElement('a');
link1.href = 'France.html';

//Se crea un elemento button y se le añade la clase "dropbtn" y el texto del botón se le asgigna "France"
const btn1 = document.createElement('button');
btn1.className = 'dropbtn';
btn1.textContent = 'France';
//Se le asigna btn1 a link1
link1.appendChild(btn1);

//Se crea un elemento div con clase 'dropdown-content'
const dropdownContent1 = document.createElement('div');
dropdownContent1.className = 'dropdown-content';
//Se declara un array que contiene los enlaces a los artistas franceses
const linksDp1 = ['Claude_Monet.html', 'Georges_Braque.html', 'Georges-Pierre_Seurat.html'];

/**
 * For que itera el array de enlaces el cual crea elementos anchor le asigna un link del array de enlaces,
 * pero además le asigna el texto que mostrara en pantalla dicho anchor y después lo añade al div
 * dropdownContent1
 */

linksDp1.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.textContent = link.replace('.html', '');
    dropdownContent1.appendChild(anchor);
});

//Se añaden los elementos link1 y dropdownContent1 al div dropdown1
dropdown1.appendChild(link1);
dropdown1.appendChild(dropdownContent1);

//Se repite lo anterior dropdown2, 3 y 4
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

//Se le añaden los elementos imgHeader, dropdown1, 2, 3 y 4 al divContainer
divContainer.appendChild(imgHeader);
divContainer.appendChild(dropdown1);
divContainer.appendChild(dropdown2);
divContainer.appendChild(dropdown3);
divContainer.appendChild(dropdown4);

//Finaliza Header