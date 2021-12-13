
const Jugador = require('./jugador');
const Joc = require('./joc');

const jug_1 = new Jugador('Tom');
const jug_2 = new Jugador('Jerry');
const jug_3 = new Jugador('Bunny');

const joc = new Joc('sessio1');
joc.afegir(jug_1);
joc.afegir(jug_2);
joc.afegir(jug_3);

joc.iniciarJoc();

console.log('Resultat:', joc.resultat());
console.log('Guanyador:', joc.guanyador(), '!!');
