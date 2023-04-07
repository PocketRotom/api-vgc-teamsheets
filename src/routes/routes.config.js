const express = require("express");
const router = express.Router();
const pokemon = require("../controllers/pokemon.js");
const moves = require("../controllers/moves.js");
const items = require("../controllers/items.js");
const abilities = require("../controllers/abilities.js");
const types = require("../controllers/types.js.js");

router.get("/allPokemon", pokemon.getAll);
router.get("/allMoves", moves.getAll);
router.get("/allAbilities", abilities.getAll);
router.get("/allItems", items.getAll);
router.get("/allTypes", types.getAll);

router.get("/ability", abilities.getByID);
router.get("/item", items.getByID);
router.get("/move", moves.getByID);
router.get("/pokemon", pokemon.getByID);
router.get("/type", types.getByID);

module.exports = router;
