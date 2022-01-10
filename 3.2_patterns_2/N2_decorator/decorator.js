const canvis = require('./currency_conversions');

  const decorator_preu = function () {
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

module.exports = decorator_preu;
