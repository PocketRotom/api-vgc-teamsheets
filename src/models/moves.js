const { connectDatabase } = require("../utils/database");

async function getAllMoves() {
  const knex = await connectDatabase();

  let allMoves = await knex("moves")
    .select("*");

  knex.destroy();

  return allMoves;
}

module.exports = {
  getAllMoves,
};
