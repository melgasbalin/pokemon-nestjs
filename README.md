<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">


# Gestion odontologica

1. Clonar proyecto
2. yarn install
3. Clonar el archivo .env.template y renombrarlo a .env
4. Cambiar las variables de entorno
5. Levantar la base de datos


docker-compose up -d


o si el env se llama .env.local


docker-compose --env-file .env.local up -d


6. Levantar: yarn start:dev