# Pokemon CRUD

Create a full server that can GET, POST and DELETE Pokemon using a separate `routes`, `controller`, and `models` folders and their corresponding files. 

## Setup the server

## Setup/Configure the pokemon routes in the routes folder

The routes should handle the following:

| Method | URL       | Code | Response         |
| ------ | --------- | ---- | ---------------- |
| GET    | /pokemon     | 200  | Array of objects |
| GET    | /pokemon/:id | 200  | Object           |
| POST   | /pokemon     | 201  | Created object   |
| DELETE | /pokemon/:id | 200  | Deleted object   |

## Setup/Configure the controller in the controllers folder

Setup the controller with the following functions:

- getAll
- getById
- create
- delete

## Setup/Configure the models in the models folder

Setup the model with the following functions:

- getAllPokemon
- getPokemonById
- createPokemon
- deletePokemon
