const decorator_preu = require('./decorator');

class Article {

  constructor(nom, preu, divisa) {
    this.nom = nom;
    this.preu = preu;
    this.divisa = divisa;
    this.preuEUR = decorator_preu(this);
  }

}

module.exports = Article;