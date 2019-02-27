//npm install mongoose

const Mongoose = require('mongoose');
Mongoose.connect('mongodb://kairolamarca:minhasenhasecreta@localhost:27017/herois',
    { useNewUrlParser: true }, function (error) {
        if (!error) return;

        console.log('Falha na conexão!', error);
    });

const connection = Mongoose.connection;

connection.once('open', () => console.log('database rodando!!'));
setTimeout(() => {
    const state = connection.readyState;
    console.log('state', state);
}, 1000);

/*
    0: Desconectado
    1: Conectado
    2: Conectando
    3: Desconectando
 */