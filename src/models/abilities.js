const { connectDatabase } = require("../utils/database");

async function getAllAbilities() {
  const knex = await connectDatabase();

  let allAbilities = await knex("abilities")
    .select("*");

  knex.destroy();

  return allAbilities;
}

module.exports = {
  getAllAbilities,
};
