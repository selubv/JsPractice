import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import {moveBall, shortcuts} from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/Naruto.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "December 31, 2023 23:59:59", "Feliz Navidad Pendejo");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://youtu.be/xq-aTe77bkA" target="_blank">Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/xq-aTe77bkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/PW7bdrp9ePbtZZPBA" target="_blank">Ver Sitio</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1583.7896333737663!2d-76.240300656423!3d-9.929803928451216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2e25c51eee9%3A0x791adbfd296fbb35!2sPlaza%20de%20Armas%20de%20Hu%C3%A1nuco!5e1!3m2!1ses!2spe!4v1690996423801!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );
});

d.addEventListener("keydown", (e)=>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");