# Pokemon CRUD

Create a full server that can GET, PUT and DELETE Pokemon using a separate `routes` and `controller` folders and corresponding files. 

## Setup the server

## Setup/Configure the pokemon routes in the routes folder

The routes should handle the following:

| Method | URL       | Code | Response         |
| ------ | --------- | ---- | ---------------- |
| GET    | /pokemon     | 200  | Array of objects |
| GET    | /pokemon/:id | 200  | Object           |
| POST   | /pokemon     | 201  | Created object   |
| PUT    | /pokemon/:id | 200  | Updated object   |
| DELETE | /pokemon/:id | 200  | Deleted object   |

## Setup/Configure the controller in the controllers folder

Setup the controller with the following functions:

- getAll
- getById
- create
- update
- delete

## Setup/Configure the models in the models folder

Setup the model with the following functions:

- getAllPokemon
- getPokemonById
- createPokemon
- updatePokemon
- deletePokemon
