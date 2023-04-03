const { connectDatabase } = require("../utils/database");

async function getAllMoves() {
  const knex = await connectDatabase();

  let allMoves = await knex("moves")
    .select("*");

  knex.destroy();

  return allMoves;
}

async function getMoveByID(id) {
  const knex = await connectDatabase();

  let move = await knex("moves")
    .select("*").where({
      ID: id
    });

  knex.destroy();

  return move;
}

module.exports = {
  getAllMoves,
  getMoveByID
};
