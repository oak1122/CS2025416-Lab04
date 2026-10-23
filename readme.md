1. สร้าง Volume สำหรับเก็บข้อมูล
docker volume create mysqlDB

2. สร้าง Network
docker network create webnetwork

3. รัน MySQL Database
docker run --rm --name db-mysql -e MYSQL_ROOT_PASSWORD=cs2025416 -p 3306:3306 --volume mysqlDB:/var/lib/mysql --network webnetwork -d mysql:latest

4. รัน phpMyAdmin
docker run --rm --name adminer --network webnetwork --link db-mysql:db -p 8080:8080 -d adminer:latest