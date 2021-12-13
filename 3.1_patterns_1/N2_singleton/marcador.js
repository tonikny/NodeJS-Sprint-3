// Cached Singleton
// https://medium.com/swlh/node-js-and-singleton-pattern-7b08d11c726a

class Marcador {
  constructor() {
    this.puntuacions = [];
  }
}

module.exports = new Marcador();
