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

docker run \
    --name postgres \
    -e POSTGRES_USER=kairolamarca \
    -e POSTGRES_PASSWORD=minhasenhasecreta \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

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