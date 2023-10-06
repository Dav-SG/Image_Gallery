/**
 * Funcion que espera como parametro un array de objetos el cual contiene la info de las fotos e itera sobre el array
 * de "divs" de fotos creado anteriormente
 * @param objetos
 */

function fotosExposicion(objetos){
    let aux = 0;

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
}

/**
 * Función de modo oscuro que determina que modo prefiere el usuario de manera automática de acuerdo a la config
 * de su equipo, pero además permite activarlo o desactivarlo manualmente gracias al botón dark-mode
 */
document.addEventListener('DOMContentLoaded', function (){

    darkMode();
    //agregando validación al formulario
    const nombre = document.getElementById('name');
    const correo = document.getElementById('correoEntrada');
    const contra = document.getElementById('passwordEntrada');
    const botonRegis = document.getElementById('boton-re');
    const expresionesCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Expresión regular para validar el correo electrónico

//las expresiones regulares se guardan en la variable y se usara para la validación del correo


    botonRegis.addEventListener("click", (event) =>{//se crea una función de flecha para el evento de click en el boton


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




