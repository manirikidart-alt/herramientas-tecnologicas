// ================================
// Página CRM y Comercio Electrónico
// ================================

// Mensaje de bienvenida
window.addEventListener("load", () => {
    console.log("Sitio cargado correctamente.");
});

// Scroll suave
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({
            behavior:'smooth'
        });

    });

});

// Animación de aparición

const tarjetas = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

tarjetas.forEach(card => {

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".8s";

    observer.observe(card);

});

// Botón para volver arriba

const boton = document.createElement("button");

boton.innerHTML="↑";

boton.id="btnTop";

document.body.appendChild(boton);

boton.style.position="fixed";
boton.style.bottom="20px";
boton.style.right="20px";
boton.style.padding="12px 16px";
boton.style.border="none";
boton.style.borderRadius="50%";
boton.style.background="#1565c0";
boton.style.color="white";
boton.style.cursor="pointer";
boton.style.display="none";
boton.style.fontSize="18px";
boton.style.boxShadow="0 5px 10px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        boton.style.display="block";

    }else{

        boton.style.display="none";

    }

});

boton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});
