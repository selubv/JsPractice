import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import {shortcuts} from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/Naruto.mp3", "#activar-alarma", "#desactivar-alarma");
});

d.addEventListener("keydown", (e)=>{
    shortcuts(e);
});