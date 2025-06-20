const personajes = [
  {
    nombre:"Joel Miller",
    foto:"joel.jpg",
    cita:"No sé lo que escuchaste, pero deberías ver la ciudad... lo estamos haciendo.",
    bio:"Joel es un padre endurecido tras la muerte de su hija Sarah durante el brote. Trabaja como contrabandista en Boston y con el tiempo se vuelve un sobreviviente brutal y competente." ,
    stats:{
      "Otros nombres":"“Joel”",
      "Origen":"Texas",
      "Rol":"Protector, padre",
      "Aparece en":"The Last of Us Parte I & II"
    }
  },
  {
    nombre:"Tommy Miller",
    foto:"tommy.jpg",
    cita:"Tenemos cosechas y ganado. Lo estamos haciendo.",
    bio:"Hermano menor de Joel. Luchó como Firefly, pero luego fundó una comunidad autosuficiente en Jackson, Wyoming, junto a su esposa María." ,
    stats:{
      "Otros nombres":"“Tommy”",
      "Rol":"Fundador de Jackson",
      "Aparece en":"The Last of Us I & II"
    }
  },
  {
    nombre:"Dina",
    foto:"dina.jpg",
    cita:"(sin frase destacada)",
    bio:"Compañera y apoyo emocional de Ellie. Tiene una relación cercana con Jesse y comparte un profundo vínculo con él y Ellie." ,
    stats:{
      "Rol":"Comunidad Jackson",
      "Aparece en":"The Last of Us Parte II"
    }
  },
  {
    nombre:"Jesse",
    foto:"jesse.jpg",
    cita:"(sin frase destacada)",
    bio:"Amigo de Ellie, exnovio de Dina. Se dedica a mantener segura a la comunidad de Jackson." ,
    stats:{
      "Rol":"Comunidad Jackson",
      "Aparece en":"The Last of Us Parte II"
    }
  },
  {
    nombre:"María Miller",
    foto:"maria.jpg",
    cita:"(sin frase destacada)",
    bio:"Esposa de Tommy y líder de Jackson. Exfiscal, aporta serenidad y justicia dentro de la comunidad." ,
    stats:{
      "Rol":"Líder de Jackson",
      "Aparece en":"The Last of Us Parte I & II"
    }
  },
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
  for (const key in p.stats) {
    tarjeta.innerHTML += `<tr><td>${key}</td><td>${p.stats[key]}</td></tr>`;
  }
}
