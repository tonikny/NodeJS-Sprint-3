const canvis = require('./currency_conversions');

class D_Article {

  constructor(article) {
    this.nom = article.nom;
    this.preu = article.preu;
    this.divisa = article.divisa;
  }

  preu_EUR() {
    if (this.divisa !== 'EUR') {
      for (const divisa in canvis) {
        if (divisa.substring(0, 3) === this.divisa) {
          return this.preu * canvis[divisa];
        }
      }
      console.log('No existeix canvi per a la divisa', this.divisa);
    } else {
      return this.preu;
    }
  }

}

module.exports = D_Article;