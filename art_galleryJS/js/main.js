//Inicia Body
//Inicia Main

//Se declara el h1 y el divPrincipal del main
const h1Main = document.createElement('h1');
const divPrincipal = document.createElement('div');

//Se asigna la clase "divPrincipal" a la constante
divPrincipal.className = 'divPrincipal';

//Se asigna el contenido del texto del h1
h1Main.textContent = 'EXPOSICIÓN GENERAL';

//Se añaden al html los elementos h1Main y divPrincipal
main.appendChild(h1Main);
main.appendChild(divPrincipal);

//Contenedor divPrincipal
//Se crean 9 divs que serán los contenedores de las fotos de la galería
const foto1 = document.createElement('div');
const foto2 = document.createElement('div');
const foto3 = document.createElement('div');
const foto4 = document.createElement('div');
const foto5 = document.createElement('div');
const foto6 = document.createElement('div');
const foto7 = document.createElement('div');
const foto8 = document.createElement('div');
const foto9 = document.createElement('div');

//Se declara un array que contiene los 9 divs creados anteriormente
const fotos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9];

//Se declaran 9 objects que contienen la info de cada imagen
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

//Artistas
const artistaAraki = {
    linkArtista: 'Hirohiko_Araki.html',
    linkImagen: './imagenes/Araki.png',
    descripcion: {
        h1: 'Hirohiko Araki',
        p: 'Hirohiko Araki es un renombrado mangaka japonés, principalmente reconocido por su icónica serie de manga "JoJo\'s Bizarre Adventure".'
    }
}
const artistaclaude = {
    linkArtista: 'claude_Monet.html',
    linkImagen: './imagenes/monet.jpg',
    descripcion: {
        h1: 'Claude Monet',
        p: 'Hirohiko Araki es un renombrado mangaka japonés, principalmente reconocido por su icónica serie de manga "JoJo\'s Bizarre Adventure".'
    }
}
const artistaGeorges = {
    linkArtista: 'Georges_Braque.html',
    linkImagen: './imagenes/Georges_Braque.jpg',
    descripcion: {
        h1: 'Georges Braque',
        p: 'Georges Braque, influyente pintor francés, fue un pionero del cubismo en el arte, trabajando en estrecha colaboración con Pablo Picasso para transformar la forma de representar el mundo en el siglo XX.".'
    }
}
const artistaGeorge = {
    linkArtista: 'Jorge_Pierre.html',
    linkImagen: './imagenes/Georges_Seurat.jpg',
    descripcion: {
        h1: 'Georges-Pierre Seurat',
        p: 'Georges Seurat es un pintor francés conocido por ser exponente'+
        'del movimiento artístico conocido como neoimpresionismo, es su obra'+
        'maestra "Un domingo en la tarde en la isla de la Grande Jatte'
    }
}
//Finaliza divPrincipal
//Finaliza Main