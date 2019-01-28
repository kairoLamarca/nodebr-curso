*Mostrar os processos
docker ps

docker run \
    --name postgres \
    -e POSTGRES_USER=kairolamarca \
    -e POSTGRES_PASSWORD=postgres123 \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres