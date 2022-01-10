const Article = require('./articles');

const articles = [
  new Article('Martell', 8.50, 'USD'),
  new Article('Clau Anglesa 12"', 10.30, 'GBP'),
  new Article('Clau Fixa 14-15', 30, 'SVC'),
]

articles.forEach(art => {
  console.log('Nom:', art.nom, 'Preu:', art.preu, art.divisa);
  if (art.preuEUR) console.log('Nom:', art.nom, 'Preu:', art.preuEUR, 'EUR');
  console.log();
});

