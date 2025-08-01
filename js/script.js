const frases = [
  "Gracias por llegar a mi vida.",
  "Por enseñarme a amar mejor.",
  "Por hacerme reír en los días más grises.",
  "Por todo este primer año juntos.",
  "Y por los miles de dibujos que aún nos esperan."
];

let indice = 0;

function mostrarLinea() {
  const p = document.getElementById("linea-carta");
  if (indice < frases.length) {
    p.textContent = frases[indice];
    indice++;
  } else {
    p.textContent = "Te amo 💖";
    indice = 0;
  }
}

