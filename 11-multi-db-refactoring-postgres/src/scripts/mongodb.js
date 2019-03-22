docker ps
docker exec -it d2a15e9c3c7f mongo -u admin -p senhaadmin --authenticationDatabase herois
docker exec -it mongodb mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin

//databases
show dbs

//mudando o contexto para uma database
use herois

//mostrar tables (coleçoes)
show collections

db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1998-01-01'
})

db.herois.find()
db.herois.find().pretty()

for(let i = 0; i <= 50000; i++){
    db.herois.insert({
        nome: `Clone-${i}`,
        poder: 'Velocidade',
        dataNascimento: '1998-01-01'
    })
}

db.herois.count()
db.herois.findOne()
db.herois.find().limit(1000).sort({ nome: -1 })
db.herois.find({}, {poder: 1, _id: 0})

//create
db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1998-01-01'
})

//read
db.herois.find()

//update
// db.herois.update({ _id: ObjectId("5c7570348dade694796e2e3a") },
//                     {nome: 'Mulher Maravilha'}
// )

db.herois.update({ _id: ObjectId("5c7575dd8dade694796e2e4b") },
                { $set: {nome: 'Lanterna Verde'} }
)

db.herois.update({ poder: 'Velocidade' },
                { $set: {poder: 'Super Força'} }
)

//delete
db.herois.remove({nome: 'Mulher Maravilha'})

