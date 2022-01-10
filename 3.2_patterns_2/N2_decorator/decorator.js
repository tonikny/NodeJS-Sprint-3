const canvis = require('./currency_conversions');

  const decorator_preu = function preu_EUR(art) {
    if (art.divisa !== 'EUR') {
      for (const divisa in canvis) {
        if (divisa.substring(0, 3) === art.divisa) {
          return art.preu * canvis[divisa];
        }
      }
      console.log('No existeix canvi per a la divisa', art.divisa);
    } else {
      return art.preu;
    }
  }

module.exports = decorator_preu;
