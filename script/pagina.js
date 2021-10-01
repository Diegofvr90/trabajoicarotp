let bottom = document.getElementById("bottom");
let personajes = document.getElementById("personaje");

function getcharacter() {
  fetch(`https://rickandmortyapi.com/api/character/${bottom.value}`)
    .then((Response) => Response.json())
    .then((data) => imagen(data));
}

bottom.addEventListener("change", getcharacter);

function imagen(animacion) {
  let imagen = document.createElement("img");
  let nombre = document.createElement("h3");
  let especie = document.createElement("h2");
  console.log(animacion);

  imagen.src = animacion.image;
  nombre.innerText = animacion.name;
  especie.innerText = animacion.species;

  personajes.appendChild(nombre);
  personajes.appendChild(imagen);
  personajes.appendChild(especie);
}
