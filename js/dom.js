/*let texto = "Hola, soy Sergio Bonilla y quiero aprender a programar en JavaScript";
const habla = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
habla(texto); */
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
const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
