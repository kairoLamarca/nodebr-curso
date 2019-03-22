const Hapi = require('hapi');
const Context = require('./db/strategies/mongodb/mongodb');
const HeroiSchema = require('./db/strategies/mongodb/schemas/heroisSchema');
const app = new Hapi.Server({
    port: 5000
})

async function main() {
    app.route({
        path: '/herois',
        method: 'GET',
        handler: (request, head) => {

        }
    })
}
main();