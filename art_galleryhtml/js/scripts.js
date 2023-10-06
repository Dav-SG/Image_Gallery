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
//Agregando una validación al formulario
const nombre = document.getElementById('name');
const correo = document.getElementById('Email');
const contra = document.getElementById('password');
const botonregis= document.getElementById('boton-re');
const expresionesCorreo= /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
//las expresiones regulares se guardan en la variable y se usara para la validación del correo


botonregis.addEventListener("click", (event) =>{//se crea una función de flecha para el evento de click en el boton 
    
    
    if (nombre.value ===  null || nombre.value === ''){//aqui validamos el nombre no este vacio ni tenga datos nulos
        alert('Ingresa un nombre correcto')
    }
    if(contra.value ===null || contra.value=== ''){//se valida la contraseña que no tenga datos nuloos o este vacio
        alert('Ingresa una contraseña correcta')
    }
    if(!expresionesCorreo.test(correo.value)){//se verifica que el correo con la ayuda de las expresiones regulares que cada cadena de valores valida diferentes secciones en el correo
        alert('ingresa un correo valido')
    }
    else{

    alert('Registrado');
    }
});
