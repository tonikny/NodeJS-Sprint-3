const Usuari = require('./usuari');
const Tema = require('./tema');


const us_1 = new Usuari('Piolin');
const us_2 = new Usuari('Tom');
const us_3 = new Usuari('Jerry');

const tema_1 = new Tema('Necrologiques');
const tema_2 = new Tema('Gastronomia');

tema_1.subscriu(us_1);
tema_1.comentat(us_1, 'Malditos roedores!');

console.log('');

tema_2.subscriu(us_2);
tema_2.subscriu(us_3);
console.log('');
tema_2.comentat(us_3, 'Este queso está de muerte!');
tema_2.comentat(us_2, 'Y que lo digas :P');

