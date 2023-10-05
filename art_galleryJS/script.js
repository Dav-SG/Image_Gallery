// // Obtener una referencia al elemento body
// const body = document.body;
//
// // Cambiar el color de fondo del body
// body.style.backgroundColor = "gray";
//Inicia Body
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

//Inicia Main

const h1Main = document.createElement('h1');
const divPrincipal = document.createElement('div');

divPrincipal.className = 'divPrincipal';

h1Main.textContent = 'EXPOSICIÓN GENERAL';
main.appendChild(h1Main);
main.appendChild(divPrincipal);

//Contenedor divPrincipal
const linksArtistas = ['Claude_Monet.html', 'Georges_Braque.html', 'Georges-Pierre_Seurat.html', 'Hirohiko_Araki.html',
'Katsushika_Hokusai.html', 'Junji_Ito.html', 'Leonardo_da_Vinci.html', 'Michelangelo_Buonarroti.html',
'Donato_di_Niccolo_di_Betto_Bardi.html'];

const foto1 = document.createElement('div');
const foto2 = document.createElement('div');
const foto3 = document.createElement('div');
const foto4 = document.createElement('div');
const foto5 = document.createElement('div');
const foto6 = document.createElement('div');
const foto7 = document.createElement('div');
const foto8 = document.createElement('div');
const foto9 = document.createElement('div');

const fotos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9];
let aux = 0;

for(let foto of fotos){
    foto.className = 'foto';
    const anchor = document.createElement('a');
    anchor.className = 'foto' + (aux + 1);
    const divDesc = document.createElement('div');
    divDesc.className = 'descripcion';
    anchor.href = linksArtistas[aux];
    foto.appendChild(anchor);
    foto.appendChild(divDesc);

    if(aux < 9){
        aux++;
    }

    divPrincipal.appendChild(foto);
}

const enlace1 = document.querySelector('.foto1');
const img1 = document.createElement('img');
img1.src = './imagenes/monet-paintings-woman-with-a-parasol-1875.jpg';
img1.alt = 'Obra del Artista';
img1.width = 250;
img1.height = 250;
enlace1.appendChild(img1);