*Mostrar os processos
docker ps

//iniciar
docker start name_container

//matar container
docker stop name_container -t 0

//excluir container
docker rm name_container

//excluir imagem
docker rmi name_image

## -----Postgres--------------------
docker run \
    --name postgres \
    -e POSTGRES_USER=kairolamarca \
    -e POSTGRES_PASSWORD=minhasenhasecreta \
    -e POSTGRES_DB=herois \
    -p 5432:5432 \
    -d \
    postgres

docker run --name postgres -e POSTGRES_USER=kairolamarca -e POSTGRES_PASSWORD=minhasenhasecreta -e POSTGRES_DB=heroes -p 5432:5432 -d postgres

//entrar no SO
docker exec -it postgres /bin/bash

//postgres
psql

---------------------------------------

docker run \
    --name adminer \ 
    -p 8080:8080 \
    --link postgres:postgres \
    -d
    adminer

docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer

## -----MongoDB---------------------------------

docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
    -d \
    mongo:4

docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin -d mongo:4

docker run \
    --name mongoClient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    mongoclient/mongoclient

docker run --name mongoClient -p 3000:3000 --link mongodb:mongodb mongoclient/mongoclient

docker exec -it mongodb \
    mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'kairolamarca', pwd: 'minhasenhasecreta', roles: [{role: 'readWrite', db: 'herois'}]})"

docker exec -it mongodb mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user: 'kairolamarca', pwd: 'minhasenhasecreta', roles: [{role: 'readWrite', db: 'herois'}]})"


docker run -d -p 3000:3000 mongoclient/mongoclient --name mongoClient --link mongodb:mongodb

## ------- ENV -----

npm i -g cross-env

cross-env NODE_ENV=prod npm t

## ------ HEROKU -----

npm i -g heroku