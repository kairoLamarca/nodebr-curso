const ICrud = require('./interfaces/interfaceCrud');
const Mongoose = require('mongoose');

class MongoDB extends ICrud {
    constructor() {
        super();
        this._herois = null;
        this._driver = null;
    }
    isConnected() {
        const state = connection.readyState;
    }
    defineModel() {
        this._herois = new Mongoose.Schema({
            nome: {
                type: String,
                required: true
            },
            poder: {
                type: String,
                required: true
            },
            insertedAt: {
                type: Date,
                default: new Date()
            }
        })
        const model = Mongoose.model('heroi', heroisSchema);
    }
    connect() {
        Mongoose.connect('mongodb://kairolamarca:minhasenhasecreta@localhost:27017/herois',
            { useNewUrlParser: true }, function (error) {
                if (!error) return;

                console.log('Falha na conexão!', error);
            });
        const connection = Mongoose.connection;
        connection.once('open', () => console.log('database rodando!!'));
    }
    create(item) {
        const resultCadastrar = await model.create({
            nome: 'Batman',
            poder: 'Dinheiro'
        })
        console.log('result cadastrar', resultCadastrar);
    }
}

module.exports = MongoDB;