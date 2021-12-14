const events = require('events');
const Comentari = require('./comentari');

class Tema {

  constructor(nom) {
    this.nom = nom;
    this.comentaris = [];
    this.eventEmitter = new events.EventEmitter();  // cada tema té el seu eventEmitter

  }

  subscriu(usuari) {
    // amb l'arrow function preservem el context al mètode reacciona de l'usuari
    this.eventEmitter.on('avis', (com) => usuari.reacciona(com));
    console.log('Usuari', usuari.nom, 'subscrit a', this.nom);
    console.log("Nombre d'usuaris subscrits a", this.nom, ':', this.eventEmitter.listenerCount('avis'));
  }

  comentat(usuari, missatge) {
    const com = new Comentari(usuari, missatge);
    this.comentaris.push(com);
    this.eventEmitter.emit('avis', com);
  }

}

module.exports = Tema;