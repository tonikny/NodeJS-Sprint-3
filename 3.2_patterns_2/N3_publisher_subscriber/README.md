# Publisher - Subscriber

## Configuració del servidor:
* rabbitMQ_config.json:
  * **ip:** ip del servidor rabbitMQ
  * **cua:** nom de la cua

## Terminal 1:
    
    node publisher.js

Sortida esperada:

    Enviat: Que la fuerza te acompañe
    Enviat: Así muere la libertad, con un estruendoso aplauso
    Enviat: Sin duda, maravillosa la mente de un niño es
    Enviat: Concéntrate en el momento. Siente, no pienses, usa tu instinto
    Enviat: Yo soy tu padre
    

## Terminal 2:

    node subscriber.js

Sortida esperada:

    Esperant rebre missatges de la cua it-academy
    Rebut: Que la fuerza te acompañe
    Rebut: Así muere la libertad, con un estruendoso aplauso
    Rebut: Sin duda, maravillosa la mente de un niño es
    Rebut: Concéntrate en el momento. Siente, no pienses, usa tu instinto
    Rebut: Yo soy tu padre
