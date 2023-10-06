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



botonregis.addEventListener("click", (event) =>{
    
    
    if (nombre.value ===  null || nombre.value === ''){
        alert('Ingresa un nombre correcto')
    }
    if(contra.value ===null || contra.value=== ''){
        alert('Ingresa una contraseña correcta')
    }
    if(!expresionesCorreo.test(correo.value)){
        alert('ingresa un correo valido')
    }
    else{

    alert('Registrado');
    }
});

