const { connectDatabase } = require("../utils/database");

async function getAllItems() {
  const knex = await connectDatabase();

  let allItems = await knex("items")
    .select("*");

  knex.destroy();

  return allItems;
}

async function getItemByID(id) {
  const knex = await connectDatabase();

  let item = await knex("items")
    .select("*").where({
      ID: id
    });

  knex.destroy();

  return item;
}

module.exports = {
  getAllItems,
  getItemByID
};
