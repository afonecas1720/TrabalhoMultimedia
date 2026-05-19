/**
 * Melhorias de UX: texto rotativo na página inicial e fecho do menu móvel ao navegar.
 */
(function () {
    "use strict";

    const rotacao = document.querySelector("[data-rotacao-mensagens]");
    if (rotacao) {
        const mensagens = rotacao.getAttribute("data-rotacao-mensagens").split("|");
        let i = 0;
        setInterval(function () {
            i = (i + 1) % mensagens.length;
            rotacao.style.opacity = "0";
            setTimeout(function () {
                rotacao.textContent = mensagens[i].trim();
                rotacao.style.opacity = "1";
            }, 200);
        }, 3800);
    }

    const menu = document.getElementById("menu-principal");
    const links = document.querySelectorAll(".principal-nav a");
    if (menu && links.length) {
        links.forEach(function (link) {
            link.addEventListener("click", function () {
                menu.checked = false;
            });
        });
    }

    const cab = document.querySelector(".site-header");
    if (cab) {
        window.addEventListener(
            "scroll",
            function () {
                cab.classList.toggle("is-scrolled", window.scrollY > 12);
            },
            { passive: true }
        );
    }

    const formDemo = document.querySelector(".formulario-contacto");
    if (formDemo) {
        formDemo.addEventListener("submit", function (ev) {
            ev.preventDefault();
            window.alert("Pedido demonstrativo: num site real estes dados seriam enviados para o servidor.");
        });
    }
})();
