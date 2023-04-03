const { connectDatabase } = require("../utils/database");

async function getAllPokemon() {
  const knex = await connectDatabase();

  let allPokemon = await knex("pokemon")
    .select("*");

  knex.destroy();

  return allPokemon;
}

module.exports = {
  getAllPokemon,
};
