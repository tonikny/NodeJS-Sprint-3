const Marcador = require("./marcador");

class Joc {
  constructor(titol) {
    this.titol = titol;
    this.marcador = Marcador;
    this.jugadors = [];
    this.min = -5;
    this.max = 10;
  }

  afegir(jugador) {
    this.jugadors.push(jugador);
    this.marcador.puntuacions.push({ nom: jugador.nom, punts: 0 });
  }

  // A cada volta s'actualitza la puntuació de cada jugador
  // amb un nombre aleatori entre min i max.
  volta() {
    this.jugadors.forEach(jugador => {
      this.marcador.puntuacions.find((j, i) => {
        if (j.nom === jugador.nom) {
          this.marcador.puntuacions[i].punts += jugador.juga(this.min, this.max);
          return true;
        }
      });
    });
  }

  iniciarJoc() {
    let n = 0;
    while (n < 10) {  // 10 voltes de joc
      n++;
      this.volta();
    }
  }

  resultat() {
    return this.marcador.puntuacions;
  }

  guanyador() {
    this.marcador.puntuacions.sort((a, b) => b.punts - a.punts);
    return this.marcador.puntuacions[0].nom;
  }

}

module.exports = Joc;