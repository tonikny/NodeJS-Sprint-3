const amqp = require('amqplib/callback_api');
const config = require('./rabbitMQ_config');

const queue = config.cua;
const msgs = [
  'Que la fuerza te acompañe',
  'Así muere la libertad, con un estruendoso aplauso',
  'Sin duda, maravillosa la mente de un niño es',
  'Concéntrate en el momento. Siente, no pienses, usa tu instinto',
  'Yo soy tu padre'
];

amqp.connect('amqp://' + config.ip, (error, connection) => {
  if (error) {
    throw error;
  }
  connection.createChannel((error1, channel) => {
    if (error1) throw error1;

    msgs.forEach((msg) => {
        channel.assertQueue(queue, { durable: false });
        channel.sendToQueue(queue, Buffer.from(msg));
        console.log('Enviat:', msg);
    });
  });

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
});