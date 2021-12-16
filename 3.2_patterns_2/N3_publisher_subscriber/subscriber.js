const amqp = require('amqplib/callback_api');
const config = require('./rabbitMQ_config');

const queue = config.cua;

amqp.connect('amqp://' + config.ip, (error, connection) => {
  if (error) {
    throw error;
  }
  connection.createChannel((error1, channel) => {
    if (error1) throw error1;
    console.log('Esperant rebre missatges de la cua', queue);

    channel.assertQueue(queue, { durable: false });
    channel.consume(queue, (msg) => {
      console.log('Rebut:', msg.content.toString());
    }, {
      noAck: true
    });
  });
});