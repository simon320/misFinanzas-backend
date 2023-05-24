<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```

3. Tener Nest CLI instalado
```
npm i -g @nest/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. clonar el archivo __.env.template__ y renombrar la copia a __.env__

6. llenar las variables de entorno definidas en el archivo __.env__

7. Levantar la App
```
yarn start:dev
```

8. Guardar cambios en Heroku
```
git push heroku main
```

## Stack usado
* MongoDB
* Nest

### Al crear proyecto desde cero:
```
npm i --save @nestjs/config
yarn add mongoose
yarn add @nestjs/mongoose
yarn add class-transformer class-validator
```