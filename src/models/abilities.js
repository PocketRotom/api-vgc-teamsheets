const { connectDatabase } = require("../utils/database");

async function getAllAbilities() {
  const knex = await connectDatabase();

  let allAbilities = await knex("abilities")
    .select("*");

  knex.destroy();

  return allAbilities;
}

async function getAbilityByID(id) {
  const knex = await connectDatabase();

  let ability = await knex("abilities")
    .select("*").where({
      ID: id
    });

  knex.destroy();

  return ability;
}

module.exports = {
  getAllAbilities,
  getAbilityByID
};
