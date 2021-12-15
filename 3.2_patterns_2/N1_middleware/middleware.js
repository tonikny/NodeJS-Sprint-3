class Middleware {

  constructor() {
    this.middlewares = [];
  }

  use(func) {
    this.middlewares.push(func);
  }

  run(index) {
    if (index < this.middlewares.length) {
      this.middlewares[index].call(null, () => this.run(index + 1));
    }
  };
  
  get() {
    this.run(0);
  };

}

module.exports = Middleware;