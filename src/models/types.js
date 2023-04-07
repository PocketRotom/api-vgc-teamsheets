const { connectDatabase } = require("../utils/database");

async function getAllTypes() {
  const knex = await connectDatabase();

  let allTypes = await knex("types")
    .select("*");

  knex.destroy();

  return allTypes;
}

async function getTypesByID(id) {
  const knex = await connectDatabase();

  let type = await knex("types")
    .select("*").where({
      ID: id
    });

  knex.destroy();

  return type;
}

module.exports = {
  getAllTypes,
  getTypesByID
};
