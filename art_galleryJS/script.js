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

const linksImagenes = ['./imagenes/monet-paintings-woman-with-a-parasol-1875.jpg', './imagenes/brake_violin_jarra.jpg',
    './imagenes/seurat-tarde-domingo-isla-jatte.jpg', './imagenes/Giorno-in-Spring.webp', './imagenes/il_570xN.5005281454_o1oq.webp',
    './imagenes/Marvin_2022_Uzumaki-Junji-Ito.webp', './imagenes/mona-lisa-0.webp', './imagenes/CreacionDeAdan.webp',
    './imagenes/magdalena_penitente.jpg'];

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

const objeto1 = {
    linkArtista: 'Claude_Monet.html',
    linkImagen: './imagenes/monet-paintings-woman-with-a-parasol-1875.jpg',
    descripcion: {
        h1: 'Woman with a Parasol - Madame Monet and Her Son',
        p: 'La pintura representa a la esposa de Monet, Camille Doncieux, y a su hijo Jean Monet, ' +
            'caminando en un campo abierto bajo el sol brillante.'
    }
};

const objeto2 = {
    linkArtista: 'Georges_Braque.html',
    linkImagen: './imagenes/brake_violin_jarra.jpg',
    descripcion: {
        h1: 'Brake Violin and Pitcher',
        p: 'Braque descompone y fragmenta la imagen de un violín y una jarra en una serie de formas geométricas interconectadas.'
    }
};

const objeto3 = {
    linkArtista: 'Georges-Pierre_Seurat.html',
    linkImagen: './imagenes/seurat-tarde-domingo-isla-jatte.jpg',
    descripcion: {
        h1: 'A Sunday Afternoon on the Island of La Grande Jatte',
        p: 'La pintura representa una escena de la vida parisina en un parque en la isla de la Grande Jatte en el río Sena.'
    }
};

const objeto4 = {
    linkArtista: 'Hirohiko_Araki.html',
    linkImagen: './imagenes/Giorno-in-Spring.webp',
    descripcion: {
        h1: 'Giorno in Spring',
        p: 'Giorno Giovanna es un personaje ficticio de la serie de manga japonesa JoJo\'s Bizarre Adventure, escrita e ilustrada por Hirohiko Araki'
    }
};

const objeto5 = {
    linkArtista: 'Katsushika_Hokusai.html',
    linkImagen: './imagenes/il_570xN.5005281454_o1oq.webp',
    descripcion: {
        h1: 'La Gran Ola de Kanagawa',
        p: 'Contiene una frescura y una expresión de síntesis que en occidente solo fue posible ' +
            'realizar hasta el siglo XX, y además bajo la influencia de este modelo oriental.'
    }
};

const objeto6 = {
    linkArtista: 'Junji_Ito.html',
    linkImagen: './imagenes/Marvin_2022_Uzumaki-Junji-Ito.webp',
    descripcion: {
        h1: 'Uzumaki (manga)',
        p: 'Uzumaki es un manga de horror seinen escrito e ilustrado por Junji Ito.'
    }
};

const objeto7 = {
    linkArtista: 'Leonardo_da_Vinci.html',
    linkImagen: './imagenes/mona-lisa-0.webp',
    descripcion: {
        h1: 'Mona Lisa',
        p: 'La Mona Lisa, es una obra del Renacimiento pintada por artista multifacético Leonardo ' +
            'da Vinci. El cuadro es uno de los más importantes símbolos de la cultura occidental.'
    }
};

const objeto8 = {
    linkArtista: 'Michelangelo_Buonarroti.html',
    linkImagen: './imagenes/CreacionDeAdan.webp',
    descripcion: {
        h1: 'La Creación de Adán',
        p: 'La creación de Adán, Ilustra uno de los nueve episodios del Génesis en el cual Dios le da vida a Adán, el primer hombre.'
    }
};

const objeto9 = {
    linkArtista: 'Donato_di_Niccolo_di_Betto_Bardi.html',
    linkImagen: './imagenes/magdalena_penitente.jpg',
    descripcion: {
        h1: 'María Magdalena Penitente',
        p: 'La Magdalena penitente es una escultura de madera de María Magdalena realizada por el ' +
            'escultor renacentista italiano Donatello, la pieza fue recibida con asombro por su realismo sin precedentes.'
    }
};

const objetos = [objeto1, objeto2, objeto3, objeto4, objeto5, objeto6, objeto7, objeto8, objeto9];

for(let foto of fotos){
    foto.className = 'foto';
    const anchor = document.createElement('a');
    const divDesc = document.createElement('div');
    divDesc.className = 'descripcion';
    anchor.href = objetos[aux].linkArtista;
    const img = document.createElement('img');
    img.src = objetos[aux].linkImagen;
    img.alt = 'Obra del Artista';
    img.width = 250;
    img.height = 250;
    anchor.appendChild(img);
    foto.appendChild(anchor);
    foto.appendChild(divDesc);
    const h1Desc = document.createElement('h1');
    const pDesc = document.createElement('p');
    h1Desc.textContent = objetos[aux].descripcion.h1;
    pDesc.textContent = objetos[aux].descripcion.p;
    divDesc.appendChild(h1Desc);
    divDesc.appendChild(pDesc);
    divPrincipal.appendChild(foto);

    if(aux < 9){
        aux++;
    }
}