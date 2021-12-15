
const Middleware = require("./middleware");
const app = new Middleware();

const calc = {
  suma: (operands) => operands.x + operands.y,
  resta: (operands) => operands.x - operands.y,
  multiplica: (operands) => operands.x * operands.y
}

const operands = { x: 3, y: 2 };
console.log('Operands:', operands);

for (const op in calc) {
    const op_func = calc[op];

    app.use((next) => {
      const resultats = { x: operands.x ** 2, y: operands.y ** 2 };
      console.log('\n' + op, 'quadrats:', resultats, '=', op_func(resultats));
      next();
    });

    app.use((next) => {
      const resultats = { x: operands.x ** 3, y: operands.y ** 3 };
      console.log(op, 'cubs:    ', resultats, '=', op_func(resultats));
      next();
    });

    app.use((next) => {
      const resultats = { x: operands.x / 2, y: operands.y / 2 };
      console.log(op, 'meitats: ', resultats, '=', op_func(resultats));
      next();
    });
}

app.get();
