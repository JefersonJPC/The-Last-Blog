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





const personajes = [
  {
    nombre: "Ellie",
    foto: "img/Part_II_Ellie_infobox.jpg",
    cita: "Protagonista de la segunda entrega. Valiente, decidida y marcada por la tragedia. Su viaje está motivado por el deseo de justicia tras una pérdida devastadora.",
    bio: "Ellie es una joven inmune al Cordyceps y pieza clave en la búsqueda de una cura. Tras vivir eventos traumáticos y perder personas importantes, su vida queda marcada por el dolor, el deseo de justicia y la necesidad de encontrar sentido en un mundo destruido.",
    grupo: "Comunidad de Jackson",
    stats: {
      "Otros nombres": "“Kiddo”, “Ell”",
      "Origen": "Zona de cuarentena de Boston",
      "Rol": "Protagonista, sobreviviente",
      "Aparece en": "The Last of Us Parte I & II"
    }
  },
  {
    nombre: "Joel",
    foto: "img/Part_II_Joel_infobox.jpg",
    cita: "Protector de Ellie y figura paternal. Su pasado como contrabandista y las decisiones difíciles que toma marcan el rumbo de la historia.",
    bio: "Joel es un sobreviviente endurecido por la muerte de su hija Sarah al inicio del brote. Años después se convierte en una figura paternal para Ellie, protegiéndola en su viaje por Estados Unidos. Sus acciones desencadenan consecuencias que afectan a todos a su alrededor.",
    grupo: "Comunidad de Jackson",
    stats: {
      "Otros nombres": "Joel Miller",
      "Origen": "Austin, Texas",
      "Rol": "Contrabandista, protector",
      "Aparece en": "The Last of Us Parte I & II"
    }
  },
  {
    nombre: "Abby",
    foto: "img/Abby_TLOU2_remaster.PNG.jpg",
    cita: "Miembro de los Lobos. Su historia se entrelaza con la de Ellie, mostrando otro lado del conflicto y desafiando la percepción del jugador sobre justicia y venganza.",
    bio: "Abby es una soldado del grupo WLF, cuya vida queda marcada por la muerte de su padre a manos de Joel. Su historia ofrece una perspectiva distinta del conflicto, donde el deseo de venganza y la búsqueda de redención se entrelazan en su camino.",
    grupo: "Lobos (WLF)",
    stats: {
      "Otros nombres": "Abigail Anderson",
      "Origen": "Salt Lake City, Utah",
      "Rol": "Soldado WLF, coprotagonista",
      "Aparece en": "The Last of Us Parte II"
    }
  },
  {
    nombre: "Dina",
    foto: "/img/Part_II_Dina_infobox.jpg",
    cita: "Compañera de Ellie y figura clave en su viaje emocional. Proporciona apoyo y humanidad en medio del caos.",
    bio: "Dina es una joven fuerte, empática y protectora. Tiene una relación romántica con Ellie y la acompaña durante su viaje. Su presencia representa un ancla emocional en un mundo que constantemente pone a prueba la esperanza.",
    grupo: "Comunidad de Jackson",
    stats: {
      "Otros nombres": "—",
      "Origen": "Jackson, Wyoming",
      "Rol": "Apoyo emocional, pareja de Ellie",
      "Aparece en": "The Last of Us Parte II"
    }
  },
  {
    nombre: "Tommy",
    foto: "img/Part_II_Tommy_infobox.jpg",
    cita: "Hermano menor de Joel. Un personaje impulsado por la venganza, con un rol crucial en la historia de Ellie.",
    bio: "Tommy es el hermano menor de Joel, exmiembro de los Luciérnagas y fundador de la comunidad de Jackson. Aunque busca justicia por su hermano, su cruzada por la venganza lo consume y afecta su salud física y emocional.",
    grupo: "Comunidad de Jackson",
    stats: {
      "Otros nombres": "Tommy Miller",
      "Origen": "Austin, Texas",
      "Rol": "Líder de comunidad, francotirador",
      "Aparece en": "The Last of Us Parte I & II"
    }
  },
  {
    nombre: "Lev",
    foto: "img/Part_II_Lev_infobox.jpg",
    cita: "Un joven miembro de los Serafitas que huye de su grupo. Forma un vínculo fuerte con Abby.",
    bio: "Lev es un joven transgénero que escapa de los Serafitas tras ser perseguido por su identidad. Su valentía, compasión y vínculo con Abby lo convierten en una figura clave de resistencia contra el fanatismo.",
    grupo: "Serafitas (Scars)",
    stats: {
      "Otros nombres": "Lily (nombre asignado al nacer)",
      "Origen": "Territorio Serafita",
      "Rol": "Aliado de Abby, ex-Serafita",
      "Aparece en": "The Last of Us Parte II"
    }
  },
  {
    nombre: "Yara",
    foto: "img/Part_II_Yara_infobox.jpg",
    cita: "Hermana mayor de Lev. Valiente y protectora, ayuda a Abby durante su tiempo con los Serafitas.",
    bio: "Yara es la hermana mayor de Lev. También escapa de los Serafitas tras defender a su hermano. Su sacrificio y determinación la convierten en un símbolo de resistencia familiar.",
    grupo: "Serafitas (Scars)",
    stats: {
      "Otros nombres": "—",
      "Origen": "Territorio Serafita",
      "Rol": "Protectora de Lev",
      "Aparece en": "The Last of Us Parte II"
    }
  },
  {
    nombre: "Isaac",
    foto: "img/Part_II_Isaac_infobox.jpg",
    cita: "Líder de los Lobos (WLF). Exmilitar, dirige con mano firme y es responsable de la guerra contra los Serafitas.",
    bio: "Isaac Dixon es el comandante de los WLF en Seattle. Es un líder autoritario y calculador que prioriza la victoria sobre la moralidad, llevando a su gente a un conflicto sangriento contra los Serafitas.",
    grupo: "Lobos (WLF)",
    stats: {
      "Otros nombres": "Isaac Dixon",
      "Origen": "Seattle",
      "Rol": "Líder militar (WLF)",
      "Aparece en": "The Last of Us Parte II"
    }
  },
  {
    nombre: "Emily",
    foto: "img/Emily_shoulder_infobox.jpg",
    cita: "Miembro fanático de los Serafitas. Representa el extremismo dentro del grupo y su hostilidad hacia los desertores.",
    bio: "Emily es una fiel seguidora del dogma Serafita. Participa activamente en la persecución de desertores como Lev y Yara. Su actitud refleja el fanatismo inquebrantable del culto.",
    grupo: "Serafitas (Scars)",
    stats: {
      "Otros nombres": "—",
      "Origen": "Territorio Serafita",
      "Rol": "Miembro radical Serafita",
      "Aparece en": "The Last of Us Parte II"
    }
  },
  {
    nombre: "Jesse",
    foto: "img/Part_II_Jesse_infobox.jpg",
    cita: "Amigo cercano de Ellie y exnovio de Dina. Un miembro responsable de la comunidad de Jackson que acompaña a Ellie en parte de su viaje.",
    bio: "Jesse es un joven valiente y leal que forma parte de la patrulla de Jackson. Su compromiso con la comunidad y su deseo de proteger a sus seres queridos lo llevan a acompañar a Ellie en su misión.",
    grupo: "Comunidad de Jackson",
    stats: {
      "Otros nombres": "—",
      "Origen": "Jackson, Wyoming",
      "Rol": "Miembro de patrulla",
      "Aparece en": "The Last of Us Parte II"
    }
  },
  {
    nombre: "María",
    foto: "img/Part_II_Maria_infobox.jpg",
    cita: "Esposa de Tommy y líder de la comunidad de Jackson. Es sensata, firme y se encarga de proteger a los suyos, incluyendo a Ellie y Dina.",
    bio: "María es la esposa de Tommy y una figura central en la comunidad de Jackson. Antiguamente fiscal, ahora actúa como líder organizativa y defensora del bienestar común.",
    grupo: "Comunidad de Jackson",
    stats: {
      "Otros nombres": "María Miller",
      "Origen": "Wyoming",
      "Rol": "Líder comunitaria",
      "Aparece en": "The Last of Us Parte I & II"
    }
  },

  {
    nombre: "Los Luciérnagas",
    foto: "img/Fireflies_logo.jpg",
    cita: "Organización revolucionaria que buscaba una cura y la caída de FEDRA.",
    bio: "Los Luciérnagas fueron una facción rebelde paramilitar con el objetivo de restaurar el orden democrático y hallar una cura para la infección del Cordyceps. Aunque sus fines eran nobles, muchas veces actuaron de manera extrema, realizando experimentos cuestionables, incluso con personas inmunes como Ellie. Fueron enemigos declarados de FEDRA.",
    stats: {
      "Ideología": "Resistencia civil, ciencia y democracia",
      "Base principal": "Salt Lake City (Hospital)",
      "Enemigos": "FEDRA",
      "Estado actual": "Disuelta tras los eventos de TLOU I"
    }
  },
  {
    nombre: "FEDRA",
    foto: "img/FEDRA.jpg",
    cita: "Agencia gubernamental que mantuvo el orden con puño de hierro tras la pandemia.",
    bio: "La Agencia Federal de Respuesta a Desastres (FEDRA) tomó el control de Estados Unidos después del brote, instaurando zonas de cuarentena bajo ley marcial. Aunque garantizaban seguridad básica, también cometieron abusos de poder, corrupción y violencia, lo que generó levantamientos ciudadanos y la aparición de grupos rebeldes como los Luciérnagas.",
    stats: {
      "Rol": "Gobierno militar postpandemia",
      "Zonas de influencia": "QZ en varias ciudades",
      "Conflictos": "Con Luciérnagas, Cazadores, Lobos",
      "Estado actual": "Colapsada en varias regiones"
    }
  },
  {
    nombre: "Cazadores",
    foto: "img/Hunters_logo.jpg",
    cita: "Grupos violentos que sobreviven saqueando y matando a otros.",
    bio: "Los Cazadores surgieron tras la caída de FEDRA en varias ciudades. Sin organización formal, se rigen por la supervivencia y la brutalidad. Atacan caravanas, emboscan a viajeros y controlan territorios por la fuerza. Son uno de los mayores peligros para cualquier explorador solitario.",
    stats: {
      "Motivación": "Supervivencia, saqueo",
      "Zonas comunes": "Pittsburgh, otras ciudades abandonadas",
      "Organización": "Fragmentada y anárquica",
      "Moral": "Nula o relativa"
    }
  },
  {
    nombre: "Lobos (WLF)",
    foto: "img/WLF_logo.jpg",
    cita: "Facción militarizada surgida tras la caída de FEDRA en Seattle.",
    bio: "Los Lobos o WLF nacieron como un grupo de resistencia que logró derrocar a FEDRA en Seattle. Se convirtieron rápidamente en una milicia organizada con una estricta jerarquía, control territorial y armamento pesado. Su conflicto con los Serafitas provocó un prolongado y sangriento enfrentamiento.",
    stats: {
      "Liderazgo": "Isaac Dixon",
      "Ubicación": "Seattle",
      "Conflicto activo": "Serafitas (Scars)",
      "Tácticas": "Militares, con perros y vigilancia"
    }
  },
  {
    nombre: "Serafitas (Scars)",
    foto: "img/Seraphites_logo.jpg",
    cita: "Secta religiosa que predica la purificación del mundo.",
    bio: "Los Serafitas son una comunidad religiosa radical que se distanció del mundo moderno tras el brote. Rechazan la tecnología y viven de forma aislada, guiados por las enseñanzas de una mujer profética. Su conflicto con los Lobos los ha llevado a librar una guerra sangrienta.",
    stats: {
      "Creencias": "Espiritualidad, anti-modernismo",
      "Ubicación": "Zonas rurales alrededor de Seattle",
      "Comunicación": "Silbidos y señales",
      "Enemigos": "WLF, desertores como Lev"
    }
  },
  {
    nombre: "Comunidad de Jackson",
    foto: "img/Polilla_2.jpg",
    cita: "Uno de los pocos asentamientos pacíficos autosostenibles tras el brote.",
    bio: "Jackson, fundado por Tommy y Maria Miller, representa esperanza en un mundo caótico. Funciona con energía hidroeléctrica, cultivos sostenibles y una comunidad que coopera por el bien común. Es el hogar de personajes como Ellie, Dina y Jesse.",
    stats: {
      "Líderes": "Tommy y Maria Miller",
      "Ubicación": "Jackson, Wyoming",
      "Características": "Seguridad, democracia, comunidad",
      "Rol": "Refugio para sobrevivientes"
    }
  },
  {
    nombre: "Rattlers",
    foto: "img/Rattlers_logo.jpg",
    cita: "Grupo esclavista que representa la deshumanización extrema tras el apocalipsis.",
    bio: "Los Rattlers son una facción cruel que captura humanos para esclavizarlos, forzándolos a trabajar o mantener infectados encadenados como guardianes. Representan lo peor de la humanidad en un mundo sin leyes.",
    stats: {
      "Ubicación": "Costa de California",
      "Prácticas": "Esclavitud, tortura, vigilancia con infectados",
      "Peligrosidad": "Extrema",
      "Líder conocido": "Desconocido"
    }
  }
];

const listaElem = document.getElementById("lista-personajes");
const mainDet = document.getElementById("detalle-main");
const tarjeta = document.getElementById("detalle-tarjeta").querySelector("tbody");


personajes.forEach(p => {
  const li = document.createElement("li");
  li.innerHTML = `<img src="${p.foto}" alt="${p.nombre}"><span>${p.nombre}</span>`;
  li.addEventListener("click", () => mostrar(p));
  listaElem.appendChild(li);
});

function mostrar(p) {
  mainDet.innerHTML = `
    <h1>${p.nombre}</h1>
    ${p.cita ? `<blockquote><p>${p.cita}</p><footer>– ${p.nombre}</footer></blockquote>` : ""}
    <p>${p.bio}</p>
  `;

  tarjeta.innerHTML = `
    <tr>
      <td colspan="2" style="text-align:center;">
        <img src="${p.foto}" alt="${p.nombre}" style="max-width:150px; height:auto;">
      </td>
    </tr>
  `;

  for (const key in p.stats) {
    tarjeta.innerHTML += `<tr><td>${key}</td><td>${p.stats[key]}</td></tr>`;
  }

  if (p.grupo) {
    tarjeta.innerHTML += `<tr><td>Grupo</td><td>${p.grupo}</td></tr>`;
  }
}
