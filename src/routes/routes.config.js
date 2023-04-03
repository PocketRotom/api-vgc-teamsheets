const express = require("express");
const router = express.Router();
const pokemon = require("../controllers/pokemon.js");
const moves = require("../controllers/moves.js");
const items = require("../controllers/items.js");
const abilities = require("../controllers/abilities.js");

router.get("/allPokemon", pokemon.getAll);

router.get("/allMoves", moves.getAll);

router.get("/allAbilities", abilities.getAll);

router.get("/allItems", items.getAll);

module.exports = router;
