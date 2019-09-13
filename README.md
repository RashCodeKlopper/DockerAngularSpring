# Docker Angular Spring MySQL Application
Demo application with an Angular 8 frontend, Spring backend and MySQL database.
The frontend, backend and database are created as separate Docker container instances.
Docker compose is used to run all containers with a single command.

## Build Spring backend
mvn clean package

## Build Angular 8 frontend
- npm install
- npm build --prod --aot

## Start Docker containers
docker-compose up

## Stop Docker containers
docker-compose down

### Important notice
- On Angular 8 => Disable Ivy in tsconfig.app.json ("enableIvy": false) when using PrimeNG libraries!
- As of 13-09-2019 PrimeNG is not yet compatible with Ivy.