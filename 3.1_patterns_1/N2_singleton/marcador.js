// Cached Singleton
// https://medium.com/swlh/node-js-and-singleton-pattern-7b08d11c726a

// Degut al sistema de caché dels mòduls NodeJS sempre importarem la mateixa instància del marcador.
// S'ha de anar en compte de no importar el marcador des d'arxius amb nom diferent perque no funcionaria el Cached Singleton

class Marcador {
  constructor() {
    this.puntuacions = [];
  }
}

module.exports = new Marcador();  // s'ha d'exportar l'objecte, no la classe
