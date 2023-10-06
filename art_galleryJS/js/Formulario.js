const formulario = document.createElement('div');//creando un div para el formulario, y tambien su clase para darle estilos
formulario.className = 'formulario';
// se crea un div para el titulo del formulario 
const titulo = document.createElement('div');
titulo.className = 'title';
titulo.textContent = 'Registrate';
//se agrega el div principal para que aparezca el formulario
const form = document.createElement('div');
form.className = 'form';

// se agrega el campo de nombreForm para el ingreso del nombreForm al formulario
const nombreEntrada = document.createElement('input');
nombreEntrada.setAttribute('type', 'text');
nombreEntrada.setAttribute('placeholder', 'Nombre');
nombreEntrada.className = 'input';
nombreEntrada.id = 'name';
const nombreForm = document.createElement('div');
nombreForm.className = 'input_field';
nombreForm.appendChild(nombreEntrada);

// se agrega el campo de correo en el formulario 
const correoEntrada = document.createElement('input');
correoEntrada.setAttribute('type', 'correoEntrada');
correoEntrada.setAttribute('placeholder', 'Email');
correoEntrada.className = 'input';
correoEntrada.id = 'correoEntrada'; 
const email = document.createElement('div');
email.className = 'input_field';
email.appendChild(correoEntrada);

//se crea el campo de la contraseña en el formulario 
const passwordEntrada = document.createElement('input');
passwordEntrada.setAttribute('type', 'password');//con setattribute se colocan que tipos de atributos tendra el campo
passwordEntrada.setAttribute('placeholder', 'Contraseña');
passwordEntrada.className = 'input';
passwordEntrada.id = 'passwordEntrada';
const password = document.createElement('div');
password.className = 'input_field';
password.appendChild(passwordEntrada);

const botonRegis = //se agrega y crea  el botn de registro para el formulario
document.createElement('a'); //se crea el hipervinculo del boton
botonRegis.textContent = 'Registrar';
botonRegis.href = '#';
botonRegis.id = 'boton-re';

const boton = document.createElement('div');
boton.className = 'btn';
boton.appendChild(botonRegis);


form.appendChild(nombreForm);
form.appendChild(email);
form.appendChild(password);
form.appendChild(boton);// Se agregan los campos anteriormente creados de nombreForm email passw y boton al js

formulario.appendChild(titulo);//se agrega el titulo del formulario 
formulario.appendChild(form);//se agrega el cuerpo del formulario
document.body.appendChild(formulario);//se agrega el formulario al body principal de la pagina





