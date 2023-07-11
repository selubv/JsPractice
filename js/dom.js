/*let texto = "Hola, soy Sergio Bonilla y quiero aprender a programar en JavaScript";
const habla = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
habla(texto); */

console.log("******Elementos del Documento");
console.log(window.document);   //sirve para identificar el documento que quieres llamar
console.log(document);  //sirve para identificar el documento de manera mas rapida
console.log(document.head); //muestra lo que hay dentro del head
console.log(document.body); //muestra lo que hay dentro del body
console.log(document.documentElement);  //muestra una etiqueta en particular del HTML
console.log(document.doctype); //muestra el tipo del documento
console.log(document.charset);  //muestra el tipo del caracter del documento
console.log(document.title); //muestra el titulo del documento HTML
console.log(document.links); //muestra los links que se utilizan en el documento HTML
console.log(document.images); //muestra los images que se utilizan en el documento HTML
setTimeout(()=>{
    console.log(document.getSelection().toString());    //muestra lo que marcamos en pantalla del buscador
},3000);
document.write("<h2>Hola, te escribo desde el DOM</h2>");
/*
//Selectores en JS
console.log(document.getElementById("menu"));   //Se utiliza para seleccionar la id del html y es mas rapido que el query
console.log(document.querySelector("#menu"));   //Se utiliza para seleccionar la id del html pero es menos eficiente
console.log(document.querySelector("a"));       //Se selecciona el primer a
console.log(document.querySelectorAll("a"));    //se seleccionan todas las a
console.log(document.querySelectorAll("a").length); // se puede usas atributos como el length
document.querySelectorAll("a").forEach((el) => console.log(el));    //Tambien se puede usar el ForEach element
console.log(document.querySelector(".card"));   //Se antepone el identificador de id o . o # etc
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));

//DOM ATRIBUTOS Y DATA-ATTRIBUTES

console.log(document.documentElement.lang);     //mostrar el lenguaje del html element
console.log(document.documentElement.getAttribute("lang"));     //muestra igual el lenguaje del html element pero de manera que fue escrita
console.log(document.querySelector(".link-dom").href);      //mostramos el link del html element pero con el puerto de acceso
console.log(document.querySelector(".link-dom").getAttribute("href"));  //mostramos el link del html element como fue escrito

document.documentElement.lang = "en";   //se puede cambiar el document de manera directa       
console.log(document.documentElement.lang);     //mostrar el lenguaje del html element
document.documentElement.setAttribute("lang", "en-MX");     //o podemos cambiar tambien con el setAttribute
console.log(document.documentElement.lang);     //

const $linkDOM = document.querySelector(".link-dom");   

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "http://youtube.com/selubv01");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//DATA-Attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objetos del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "suscribete a mi canal";
console.log($linkDOM.dataset.description);
*/

//Dom en el css
/*const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
*/