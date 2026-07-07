/* =====================================================
   HERRAMIENTAS TECNOLÓGICAS
   CRM y Comercio Electrónico
   Autor: Luis Ricardo Zúñiga Sánchez
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    iniciarScrollSuave();
    crearBotonArriba();
    animacionTarjetas();
    efectoNavbar();
    crearBotonModoOscuro();

});

/* =====================================================
      SCROLL SUAVE
===================================================== */

function iniciarScrollSuave(){

    const enlaces = document.querySelectorAll('nav a');

    enlaces.forEach(enlace=>{

        enlace.addEventListener("click",function(e){

            e.preventDefault();

            const destino = document.querySelector(this.getAttribute("href"));

            destino.scrollIntoView({

                behavior:"smooth"

            });

        });

    });

}

/* =====================================================
      BOTÓN VOLVER ARRIBA
===================================================== */

function crearBotonArriba(){

    const boton=document.createElement("button");

    boton.innerHTML="↑";

    boton.id="btnTop";

    document.body.appendChild(boton);

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

}

/* =====================================================
      EFECTO NAVBAR
===================================================== */

function efectoNavbar(){

    const nav=document.querySelector("nav");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>50){

            nav.style.background="#0d47a1";

            nav.style.boxShadow="0 8px 20px rgba(0,0,0,.25)";

        }

        else{

            nav.style.background="#0d47a1";

            nav.style.boxShadow="none";

        }

    });

}

/* =====================================================
      ANIMACIÓN DE TARJETAS
===================================================== */

function animacionTarjetas(){

    const tarjetas=document.querySelectorAll(".card");

    const observer=new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.style.opacity="1";

                    entry.target.style.transform="translateY(0px)";

                }

            });

        },

        {

            threshold:.20

        }

    );

    tarjetas.forEach(card=>{

        card.style.opacity="0";

        card.style.transform="translateY(50px)";

        card.style.transition=".8s";

        observer.observe(card);

    });

}

/* =====================================================
      CONTADOR DE ESTADÍSTICAS
===================================================== */

function contador(elemento,final){

    let numero=0;

    const intervalo=setInterval(()=>{

        numero++;

        elemento.textContent=numero;

        if(numero>=final){

            clearInterval(intervalo);

        }

    },20);

}

const observerNumeros=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const numero=entry.target;

            contador(numero,Number(numero.dataset.numero));

        }

    });

});

document.querySelectorAll(".contador").forEach(numero=>{

    observerNumeros.observe(numero);

});

/* =====================================================
      MODO OSCURO
===================================================== */

function crearBotonModoOscuro(){

    const boton=document.createElement("button");

    boton.innerHTML="🌙";

    boton.id="modoOscuro";

    document.body.appendChild(boton);

    boton.style.position="fixed";

    boton.style.bottom="90px";

    boton.style.right="20px";

    boton.style.width="55px";

    boton.style.height="55px";

    boton.style.borderRadius="50%";

    boton.style.border="none";

    boton.style.background="#263238";

    boton.style.color="white";

    boton.style.cursor="pointer";

    boton.style.fontSize="20px";

    boton.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

    boton.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){

            boton.innerHTML="☀";

        }

        else{

            boton.innerHTML="🌙";

        }

    });

}

/* =====================================================
      EFECTO ESCRITURA DEL TÍTULO
===================================================== */

const titulo=document.querySelector("header h1");

if(titulo){

    const texto=titulo.textContent;

    titulo.textContent="";

    let i=0;

    function escribir(){

        if(i<texto.length){

            titulo.textContent+=texto.charAt(i);

            i++;

            setTimeout(escribir,70);

        }

    }

    escribir();

}

/* =====================================================
      REVELAR SECCIONES
===================================================== */

const secciones=document.querySelectorAll("section");

const observerSecciones=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("mostrar");

        }

    });

});

secciones.forEach(sec=>{

    sec.classList.add("oculta");

    observerSecciones.observe(sec);

});

/* =====================================================
      MENSAJE DE BIENVENIDA
===================================================== */

setTimeout(()=>{

    console.log("Bienvenido al sitio web sobre CRM y Comercio Electrónico");

},1000);

/* =====================================================
      AÑO AUTOMÁTICO EN EL FOOTER
===================================================== */

const footer=document.querySelector("footer");

if(footer){

    const año=new Date().getFullYear();

    const p=document.createElement("p");

    p.innerHTML="© "+año+" | Proyecto Académico UAEMéx";

    footer.appendChild(p);

}
