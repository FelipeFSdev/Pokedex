const express = require("express");
const { abrirPokedex, pokemonPage, trainerPage } = require("./controller/operator");

const route = express();

route.get("/pokedex", abrirPokedex);
route.get("/pokedex/pokemonPage/:identificador", pokemonPage);
route.get("/pokedex/trainerPage", trainerPage);

module.exports = route;