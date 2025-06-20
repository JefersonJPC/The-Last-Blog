const nav_movil = document.getElementById('nav-movil');
const navLinks = document.getElementById('links');
if (nav_movil && navLinks) {
    nav_movil.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// === Galería Interactiva ===
const galeria = [
    'img/referencia1.jpg',
    'img/img1.jpg',
    'img/referencia3.jpg',
    'img/referencia4.jpg',
    'img/referencia5.jpg',
    'img/img2.jpg',
    'img/referencia7.jpg',
    'img/referencia8.jpg',
    'img/img3.jpg',
    'img/referencia10.jpg',
    'img/referencia11.jpg',
    'img/referncia12.jpg'
];

let indiceGaleria = 0;

function mostrarImagenes() {
    const contenedor = document.getElementById('contenedor-galeria');
    if (!contenedor) return;
    contenedor.innerHTML = '';

    for (let i = 0; i < 4; i++) {
        const img = document.createElement('img');
        img.src = galeria[indiceGaleria + i];
        img.alt = `Imagen ${indiceGaleria + i + 1}`;
        contenedor.appendChild(img);
    }
}

window.cambiarGaleria = function (direccion) {
    indiceGaleria += direccion;
    if (indiceGaleria < 0) indiceGaleria = galeria.length - 4;
    if (indiceGaleria > galeria.length - 4) indiceGaleria = 0;
    mostrarImagenes();
};

mostrarImagenes();


// === Banner Automático ===
const banner = [
    'img/bann1.jpg',
    'img/bann2.jpg',
    'img/bann3.jpg'
];

let indiceBanner = 0;

function mostrarBanner() {
    const imgBanner = document.getElementById('imagen-banner');
    if (!imgBanner) return;
    imgBanner.src = banner[indiceBanner];
    imgBanner.alt = `Imagen ${indiceBanner + 1}`;
}

function cambiarBanner(direccion) {
    indiceBanner += direccion;
    if (indiceBanner < 0) indiceBanner = banner.length - 1;
    if (indiceBanner >= banner.length) indiceBanner = 0;
    mostrarBanner();
}

mostrarBanner();
setInterval(() => cambiarBanner(1), 3000);



//Script para bloquear el click derecho demi mouse
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Click derecho bloqueado")
});

// Bloqueo de la convinación de teclas (Ctrl+C)
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();

        alert("Presinaste Ctrl  + C")
    }
});

//Bloqueo de la tecla f12
document.addEventListener('keydown', function (event) {
    if (event.key === 'f12' || event.keyCode === 123) {
        event.preventDefault();
        alert("Presionaste la tecla f12")
    }

});


//Bloqueo de la tecla t
document.addEventListener('keydown', function (event) {
    if (event.key === 't' || event.keyCode === 123) {
        event.preventDefault();
        alert("Presionaste la tecla t")
    }

});