/*let texto = "Hola, soy Sergio Bonilla y quiero aprender a programar en JavaScript";
const habla = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
habla(texto); */

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