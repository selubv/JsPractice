const d = document;

export function shortcuts (e){
    /*console.log(e);
    console(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e.shiftKey);
    */

    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado");
    }
    if(e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmacion con el teclado");
    }
    if(e.key === "p" && e.altKey){
        prompt("Haz lanzado un aviso con el teclado");
    }
} 