const personajes = [
  {
    nombre: "Ellie",
    foto: "../img/Part_II_Ellie_infobox.jpg",
    cita: "Protagonista de la segunda entrega. Valiente, decidida y marcada por la tragedia. Su viaje está motivado por el deseo de justicia tras una pérdida devastadora.",
    bio: "Ellie es una joven inmune al Cordyceps y pieza clave en la búsqueda de una cura. Tras vivir eventos traumáticos y perder personas importantes, su vida queda marcada por el dolor, el deseo de justicia y la necesidad de encontrar sentido en un mundo destruido.",
    stats: {
      "Otros nombres": "“Kiddo”, “Ell”",
      "Origen": "Zona de cuarentena de Boston",
      "Rol": "Protagonista, sobreviviente",
      "Aparece en": "The Last of Us Parte I & II"
    }
  },
  {
    nombre: "Joel",
    foto: "../img/Part_II_Joel_infobox.jpg",
    cita: "Protector de Ellie y figura paternal. Su pasado como contrabandista y las decisiones difíciles que toma marcan el rumbo de la historia.",
    bio: "Joel es un sobreviviente endurecido por la muerte de su hija Sarah al inicio del brote. Años después se convierte en una figura paternal para Ellie, protegiéndola en su viaje por Estados Unidos. Sus acciones desencadenan consecuencias que afectan a todos a su alrededor.",
    stats: {
      "Otros nombres": "Joel Miller",
      "Origen": "Austin, Texas",
      "Rol": "Contrabandista, protector",
      "Aparece en": "The Last of Us Parte I & II"
    }
  },
  {
    nombre: "Abby",
    foto: "../img/Abby_TLOU2_remaster.PNG.jpg",
    cita: "Miembro de los Lobos. Su historia se entrelaza con la de Ellie, mostrando otro lado del conflicto y desafiando la percepción del jugador sobre justicia y venganza.",
    bio: "Abby es una soldado del grupo WLF, cuya vida queda marcada por la muerte de su padre a manos de Joel. Su historia ofrece una perspectiva distinta del conflicto, donde el deseo de venganza y la búsqueda de redención se entrelazan en su camino.",
    stats: {
      "Otros nombres": "Abigail Anderson",
      "Origen": "Salt Lake City, Utah",
      "Rol": "Soldado WLF, coprotagonista",
      "Aparece en": "The Last of Us Parte II"
    }
  },
  {
    nombre: "Dina",
    foto: "../img/Part_II_Dina_infobox.jpg",
    cita: "Compañera de Ellie y figura clave en su viaje emocional. Proporciona apoyo y humanidad en medio del caos.",
    bio: "Dina es una joven fuerte, empática y protectora. Tiene una relación romántica con Ellie y la acompaña durante su viaje. Su presencia representa un ancla emocional en un mundo que constantemente pone a prueba la esperanza.",
    stats: {
      "Otros nombres": "—",
      "Origen": "Jackson, Wyoming",
      "Rol": "Apoyo emocional, pareja de Ellie",
      "Aparece en": "The Last of Us Parte II"
    }
  },
  {
    nombre: "Tommy",
    foto: "../img/Part_II_Tommy_infobox.jpg",
    cita: "Hermano menor de Joel. Un personaje impulsado por la venganza, con un rol crucial en la historia de Ellie.",
    bio: "Tommy es el hermano menor de Joel, exmiembro de los Luciérnagas y fundador de la comunidad de Jackson. Aunque busca justicia por su hermano, su cruzada por la venganza lo consume y afecta su salud física y emocional.",
    stats: {
      "Otros nombres": "Tommy Miller",
      "Origen": "Austin, Texas",
      "Rol": "Líder de comunidad, francotirador",
      "Aparece en": "The Last of Us Parte I & II"
    }
  },
  {
    nombre: "Lev",
    foto: "../img/Part_II_Lev_infobox.jpg",
    cita: "Un joven miembro de los Serafitas que huye de su grupo. Forma un vínculo fuerte con Abby.",
    bio: "Lev es un joven transgénero que escapa de los Serafitas tras ser perseguido por su identidad. Su valentía, compasión y vínculo con Abby lo convierten en una figura clave de resistencia contra el fanatismo.",
    stats: {
      "Otros nombres": "Lily (nombre asignado al nacer)",
      "Origen": "Territorio Serafita",
      "Rol": "Aliado de Abby, ex-Serafita",
      "Aparece en": "The Last of Us Parte II"
    }
  },
  {
    nombre: "Yara",
    foto: "../img/Part_II_Yara_infobox.jpg",
    cita: "Hermana mayor de Lev. Valiente y protectora, ayuda a Abby durante su tiempo con los Serafitas.",
    bio: "Yara es la hermana mayor de Lev. También escapa de los Serafitas tras defender a su hermano. Su sacrificio y determinación la convierten en un símbolo de resistencia familiar.",
    stats: {
      "Otros nombres": "—",
      "Origen": "Territorio Serafita",
      "Rol": "Protectora de Lev",
      "Aparece en": "The Last of Us Parte II"
    }
  },
  {
    nombre: "Isaac",
    foto: "../img/Part_II_Isaac_infobox.jpg",
    cita: "Líder de los Lobos (WLF). Exmilitar, dirige con mano firme y es responsable de la guerra contra los Serafitas.",
    bio: "Isaac Dixon es el comandante de los WLF en Seattle. Es un líder autoritario y calculador que prioriza la victoria sobre la moralidad, llevando a su gente a un conflicto sangriento contra los Serafitas.",
    stats: {
      "Otros nombres": "Isaac Dixon",
      "Origen": "Seattle",
      "Rol": "Líder militar (WLF)",
      "Aparece en": "The Last of Us Parte II"
    }
  },
  {
    nombre: "Emily",
    foto: "../img/Emily_shoulder_infobox.jpg",
    cita: "Miembro fanático de los Serafitas. Representa el extremismo dentro del grupo y su hostilidad hacia los desertores.",
    bio: "Emily es una fiel seguidora del dogma Serafita. Participa activamente en la persecución de desertores como Lev y Yara. Su actitud refleja el fanatismo inquebrantable del culto.",
    stats: {
      "Otros nombres": "—",
      "Origen": "Territorio Serafita",
      "Rol": "Miembro radical Serafita",
      "Aparece en": "The Last of Us Parte II"
    }
  },
  {
    nombre: "Jesse",
    foto: "../img/Part_II_Jesse_infobox.jpg",
    cita: "Amigo cercano de Ellie y exnovio de Dina. Un miembro responsable de la comunidad de Jackson que acompaña a Ellie en parte de su viaje.",
    bio: "Jesse es un joven valiente y leal que forma parte de la patrulla de Jackson. Su compromiso con la comunidad y su deseo de proteger a sus seres queridos lo llevan a acompañar a Ellie en su misión.",
    stats: {
      "Otros nombres": "—",
      "Origen": "Jackson, Wyoming",
      "Rol": "Miembro de patrulla",
      "Aparece en": "The Last of Us Parte II"
    }
  },
  {
    nombre: "María",
    foto: "../img/Part_II_Maria_infobox.jpg",
    cita: "Esposa de Tommy y líder de la comunidad de Jackson. Es sensata, firme y se encarga de proteger a los suyos, incluyendo a Ellie y Dina.",
    bio: "María es la esposa de Tommy y una figura central en la comunidad de Jackson. Antiguamente fiscal, ahora actúa como líder organizativa y defensora del bienestar común.",
    stats: {
      "Otros nombres": "María Miller",
      "Origen": "Wyoming",
      "Rol": "Líder comunitaria",
      "Aparece en": "The Last of Us Parte I & II"
    }
  }
];

const listaElem = document.getElementById("lista-personajes");
const mainDet = document.getElementById("detalle-main");
const tarjeta = document.getElementById("detalle-tarjeta").querySelector("tbody");

// Pinta la sidebar
personajes.forEach(p => {
  const li = document.createElement("li");
  li.innerHTML = `<img src="${p.foto}" alt="${p.nombre}"><span>${p.nombre}</span>`;
  li.addEventListener("click", () => mostrar(p));
  listaElem.appendChild(li);
});

function mostrar(p) {
  // contenido principal
  mainDet.innerHTML = `
    <h1>${p.nombre}</h1>
    ${p.cita ? `<blockquote><p>${p.cita}</p><footer>– ${p.nombre}</footer></blockquote>` : ""}
    <p>${p.bio}</p>
  `;
  
  // tabla
  tarjeta.innerHTML = "";

  // Fila con imagen antes de las estadísticas
  tarjeta.innerHTML += `
    <tr>
      <td colspan="2" style="text-align:center;">
        <img src="${p.foto}" alt="${p.nombre}" style="max-width:150px; height:auto;">
      </td>
    </tr>
  `;

  // filas con estadísticas
  for (const key in p.stats) {
    tarjeta.innerHTML += `<tr><td>${key}</td><td>${p.stats[key]}</td></tr>`;
  }
}
