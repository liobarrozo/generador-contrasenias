const letras = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const longPass = 8;

function passGenerator() {
  let pass = [];

  for (let x = 0; x < longPass; x++) {
    let randomIndex = Math.floor(Math.random() * letras.length);
    pass.push(letras[randomIndex]);
  }

  return pass.join("");
}

const inputResultado = document.getElementById("contrasenia");
const botonGenerador = document.getElementById("generator_button");

botonGenerador.addEventListener("click", () => {
  inputResultado.value = passGenerator();
  console.log("clic");
});
