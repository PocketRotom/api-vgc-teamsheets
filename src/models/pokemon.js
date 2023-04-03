const { connectDatabase } = require("../utils/database");

async function getAllPokemon() {
  const knex = await connectDatabase();

  let allPokemon = await knex("pokemon")
    .select("*");

  knex.destroy();

  return allPokemon;
}

async function getPokemonByID(id) {
  const knex = await connectDatabase();

  let pokemon = await knex("pokemon")
    .select("*").where({
      ID: id
    });

  knex.destroy();

  return pokemon;
}

module.exports = {
  getAllPokemon,
  getPokemonByID
};
