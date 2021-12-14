class Usuari {

  constructor(nom) {
    this.nom = nom;
  }

  reacciona(comentari) {
    // S'avisa als usuaris subcrits menys a l'autor del comentari
    if (this.nom !== comentari.usuari.nom)
      console.log('[Avis a ' + this.nom + ']', comentari.usuari.nom, 'ha comentat:', comentari.missatge);
  }

}

module.exports = Usuari;