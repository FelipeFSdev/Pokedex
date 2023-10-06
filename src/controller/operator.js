const { listarPokemons, detalharPokemon } = require("utils-playground");
const trainers = require("../database");

const abrirPokedex = async (req, res) => {
    const { page } = req.query;
    const pokemons = await listarPokemons(page);
    if (!page) {
        res.status(400).json({
            message: "Insert a number page you're looking for."
        })
    }
    return res.json(pokemons.results);
};
const pokemonPage = async (req, res) => {
    const { identificador } = req.params;
    const pokemon = await detalharPokemon(identificador);
    const { id, name, height, weight,
        base_experience, forms, abilities, species
    } = pokemon;
    return res.status(200).json({
        id, name, height, weight,
        base_experience, forms, abilities, species
    });
};
const trainerPage = (req, res) => {
    const { page } = req.query;
    const findTrainer = trainers.find((id) => {
        return id.id === Number(page);
    })
    if (!page) {
        return res.json(trainers)
    }
    return res.json(findTrainer);
};

module.exports = {
    abrirPokedex,
    pokemonPage,
    trainerPage,
}