const { connectDatabase } = require("../utils/database");

async function getAllItems() {
  const knex = await connectDatabase();

  let allItems = await knex("items")
    .select("*");

  knex.destroy();

  return allItems;
}

module.exports = {
  getAllItems,
};
