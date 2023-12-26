//Estilos
document.addEventListener('DOMContentLoaded', function() {
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
    
    svg text {
        animation: stroke 5s infinite alternate;
        stroke-width: 2;
        stroke: black;
        font-size: 40px;
    }
    
    @keyframes stroke {
        0%   {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;}
        70%  {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); }
        80%  {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); stroke-width: 3;}
        100% {fill: rgba(72,138,204,1); stroke: rgba(54,95,160,0); stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;}
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
        top: 60%;
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
      
   
      .unsplash-images {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }
  
      .artist-card {
        width: 100%;
        max-width: 300px;
      }
  
      .foto {
        position: relative;
        overflow: hidden;
        cursor: pointer;
      }
  
      .thumbnail {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
        border: 4px solid black;
      }
  
      .foto:hover .thumbnail {
        transform: scale(1.1);
      }
  
      .descripcion {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px;
        box-sizing: border-box;
        transition: height 0.5s, bottom 0.5s;
        height: 0;
        overflow: hidden;
      }
  
      .foto:hover .descripcion {
        height: 30%;
        bottom: 0;
      }
  
      .modal {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
      }
  
      .modal-content {
        position: relative;
        background: white;
        padding: 20px;
        border-radius: 20px;
        text-align: center;
      }
  
      .modal img {
        width: 100%;
        max-height: 80vh;
        object-fit: contain;
      }
  
      .close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        color: white;
        cursor: pointer;
      }
     
.artist-details {
    max-width: 800px;
    width: 100%; /* Ajustado para que el contenido ocupe el 100% del ancho disponible */
    padding: 20px; /* Añadido espacio interno */
    box-sizing: border-box; /* Ajustado para que el padding no afecte el ancho total */
}

.header {
    text-align: center;
}

.profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin-top: 10px;
    margin-bottom: 10px;
}

h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.photo-container {
    display: flex;
    flex-wrap: wrap; /* Ajustado para que las fotos se envuelvan cuando no haya espacio suficiente */
    justify-content: center; /* Alineado al centro horizontalmente */
}

.photo-card {
    flex: 0 0 auto;
    width: 45.33%;
    margin-bottom: 30px; /* Ajustado para agregar espacio entre las tarjetas de fotos */
}

.photo-card:last-child {
    margin-right: 0;
}

.photo-wrapper {
    cursor: pointer;
}

.photo-thumbnail {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s;
}

.photo-thumbnail:hover {
    transform: scale(1.1);
}

.modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
}

.modal-content {
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

.modal-photo {
    width: 100%;
    max-height: 80vh;
    object-fit: contain;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: white;
    cursor: pointer;
}

p {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
}

.bio-container {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.bio-container p {
    font-size: 1.7rem;
    color: #333;
    margin: 0;
}
      
    `;

    document.head.appendChild(styles);
});