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

// Crea el elemento SVG
const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.setAttribute("width", "100%");
svgElement.setAttribute("height", "100%");

// Create a text element
const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
textElement.setAttribute("x", "50%");
textElement.setAttribute("y", "50%");
textElement.setAttribute("dy", ".35em");
textElement.setAttribute("text-anchor", "middle");
textElement.textContent = "LE PETIT LOUVRE";

// Apply animation to the text element
textElement.style.animation = "stroke 5s infinite alternate";
textElement.style.strokeWidth = "1";
textElement.style.stroke = "black";
textElement.style.fontSize = "100px";

// Append the text element to the SVG element
svgElement.appendChild(textElement);

// Append the SVG element to the document
document.body.appendChild(svgElement);

// Define the keyframes animation dynamically
const style = document.createElement("style");
style.textContent = `
  @keyframes stroke {
	0%   {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;}
	70%  {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); }
	80%  {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); stroke-width: 3;}
	100% {fill: rgba(72,138,204,1); stroke: rgba(54,95,160,0); stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;}
  }
`;

// Append the style to the document head
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

//Inicia Main

const h1Main = document.createElement('h1');
const divPrincipal = document.createElement('div');

divPrincipal.className = 'divPrincipal';

h1Main.textContent = 'EXPOSICIÓN GENERAL';
main.appendChild(h1Main);
main.appendChild(divPrincipal);

//Contenedor divPrincipal
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
//Finaliza divPrincipal
//Finaliza Main

//Estilos
document.addEventListener('DOMContentLoaded', function (){
    const styles = document.createElement('style');
    styles.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
    
    html {
        box-sizing: border-box; /* Esto hace que el border y el padding no afecten el ancho de nuestros elementos */
        font-size: 62.5%; /* Esto hace que 1rem = 10px */
    }
    
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    svg {
        /* font-family: "Russo One", sans-serif; */
        font-family: "Dancing Script", sans-serif;
        width: 100%; 
        height: 100%;
    }
    
    /* Alinea los headers tipo 1 y 3 al centro de la pagina */
    h1, h3 {
        text-align: center;
    }
    
    h4 {
        font-family:  'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    
    * DIV que contiene el menu desplegable */
    .dropdown {
        position: relative;
        display: inline-block;
    }
    
    /* Contenido del menu desplegable, no se ve por defecto */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #162146;
        min-width: 100px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        z-index: 1;
    }
    
    /* Links dentro del menu desplegable*/
    .dropdown-content a {
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
    
    /* Cambiar el color al pasar el raton sobre el menu desplegable */
    .dropdown-content a:hover {
        background-color: #324c9f;
    }
    
    /* Mostrar menu desplegable al mostrar el raton */
    .dropdown:hover .dropdown-content {
        display: block;
    }
    
    /* Cambiar el color del boton al ser mostrado */
    .dropdown:hover .dropbtn {
        background-color: #213269;
    }
    
    .container {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        text-align: center;
        align-items: center;
        padding: 0 0;
    }
    
    .dark-mode-boton{
        max-width: 50px;
        max-height: 50px;
        margin-bottom: 2rem;
    }
    
    .dark-mode-boton:hover{
        cursor: pointer;
    }
    
    @media (min-width: 768px) {
        svg text{
            font-size: 80px;
        }
    
        .container {
            flex-direction: row;
            justify-content: center;
            max-height: 100px;
        }
    }
    
    h1,h2,h3, h4 {
        text-align: center;
        color: whitesmoke;
    }
    
    body
    {
        background-image: url(../imagenes/cielo-colorido-nubes-puesta-sol.jpg);
    }
    
    .dark-mode{
        background-image: url(../svg/layered-waves-haikei.svg);
    }
    
    .dark-mode svg text{
        stroke: white;
    }
    
    .dark-mode .wrapper{
        background-color: #04043c;;
    }
    
    .dark-mode .dark-mode-boton{
        filter: invert(100%);
    }
    
    html
    {
        height: 100%;
        margin: 0;
    }
    
    section {
        display: flex;
        width: 100%;
        height: 430px;
        
    }
    
    /* Transicion de imagenes */
    
    
    img {
        height: 33rem;
        width: 28rem;
        border-radius: 1.2rem;
    
    }
    
    .descripcion {
        height: 7rem;
        width: 28rem;
        padding: 6px;
        box-sizing: border-box;
        position: relative;
        background: rgb(27, 27, 27);
        color: white;
        transition: height 0.5s, bottom 0.5s;
        bottom: 0;
    }
    
    @media (min-width: 992px) {
        svg text{
            font-size: 100px;
        }
    
        img{
            height: 40rem;
            width: 35rem;
        }
    
        .descripcion{
            height: 70px;
            width: 350px;
        }
    }
    
    
    p {
        font-size: 20px;
        margin: 20px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s, visibility 0.5s;
    }
    
    span {
        font-weight: bold;
        
    }
    
    .foto:hover {
        cursor: pointer;
        
    }
    
    .foto:hover .descripcion {
        height: 220px;
        bottom: 150px; /* Ajusta la posición según tu preferencia */
        background: black;
        border-radius: 12px;
    }
    
    .foto:hover p {
        opacity: 1;
        visibility: visible;
    }
    
    .foto:hover img {
        transform: scale(1.1) rotate(-0deg);
    }
    
    /*Button estilo*/
    .dropbtn{
        background-color: #314a9b;
        cursor: pointer;
        border: none;
        padding: 16px 32px;
        color: azure;
        font-size: 24px;
        font-weight: bold;
        position: relative;
        border-radius: 12px;
        margin-right: 35px;
    }
    .dropbtn::before{/*Button estilo*/
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            45deg,
            red,blue, deeppink, blue,red, blue,deeppink,blue
        );
        background-size: 800%;
        border-radius: 12px;
        filter: blur(15px);
        animation: glowing 20s linear infinite;
    }
    
    @keyframes glowing{
        /*Button estilo*/
        0%{
            background-position: 0 0;
        }
        50%{
        background-position: 400% 0;
        }
        100%{
            background-position: 0 0;
        }
    }
    
    a
    {
        text-decoration: none;
    }
    
    .divPrincipal{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    
    @media (min-width: 768px) {
        .divPrincipal {
            margin-top: 2rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
    }
    
    @media (min-width: 992px) {
        .divPrincipal {
            margin-top: 2rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
        }
    }
    
    .contenedor {
        padding: 2rem;
        width: min(90%, 120rem);
        margin: 0 auto; /* Centra el contenido horizontalmente */
    }
    
    .infoArtista{
        background-color: #000;
        border-radius: 5%;
        padding: 2.5rem;
        max-height: 470px;
    }
    
    .infoArtista h1{
        font-size: 3.5rem;
    }
    
    .infoArtista h3, h4{
        font-size: 1.7rem;
    }
    /*Formulario*/
    
      
      .formulario{
        max-width: 350px;
        width: 100%;
        height: auto;
        background:  rgba(12, 164, 191, 0.216); 
        padding: 60px 45px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 20px;
      }
      
      .formulario .title{
        margin-bottom: 20px;
        text-align: center;
        font-size: 26px;
        font-weight: bold;
        color:var(--secundario);
      }
      
      
      .formulario .form .input_field{
        position: relative;
        margin-bottom: 10px;
      }
      
      .formulario .form .input_field .input{
        width: 100%;
        padding: 12px;
        padding-left: 30px;
        border: none;
        background: #eeeeee;
      }
      
      .formulario .form .btn{
        width: 70%;
        margin: 20px auto 0;
        background: #3aaf9f;
        text-align: center;
        padding: 12px;
        border-radius: 25px;
      }
      
      .formulario .form .btn a{
        color: #fff;
      }
      
      .formulario .form .input_field i{
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 14px;
        color: #1d2120;
      }
      
    `;

    document.head.appendChild(styles);
});

document.addEventListener('DOMContentLoaded', function (){

    darkMode();
});

function darkMode(){
    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    if(prefiereDarkMode.matches){
        document.body.classList.add('dark-mode');
    } else{
        document.body.classList.remove('dark-mode');
    }

    prefiereDarkMode.addEventListener('change', function (){
        if(prefiereDarkMode.matches){
            document.body.classList.add('dark-mode');
        } else{
            document.body.classList.remove('dark-mode');
        }
    });

    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click', function (){
        document.body.classList.toggle('dark-mode');
    });
}
