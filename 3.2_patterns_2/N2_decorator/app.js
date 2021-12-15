const Article = require('./articles');
const D_Article = require('./decorator');

const articles = [
  new Article('Martell', 8.50, 'USD'),
  new Article('Clau Anglesa 12"', 10.30, 'GBP'),
  new Article('Clau Fixa 14-15', 30, 'SVC'),
]

articles.forEach(art => {
  console.log('Nom:', art.nom, 'Preu:', art.preu, art.divisa);
  const d_art = new D_Article(art);
  const preuEUR = d_art.preu_EUR()
  if (preuEUR) console.log('Nom:', d_art.nom, 'Preu:', preuEUR, 'EUR');
  console.log();
});

