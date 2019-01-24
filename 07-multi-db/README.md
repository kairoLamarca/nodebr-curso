*Mostrar os processos
docker ps

docker run \
    --name postgress \
    -e POSTGRES_USER=erickWendel \
    -e POSTGRES_PASSWORD=minhasenha \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres