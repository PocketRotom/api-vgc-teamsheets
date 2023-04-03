const pokemon = require("../models/pokemon.js");

module.exports = {
    getAll: async (req, res) => {
        try {
            let allPokemon = await pokemon.getAllPokemon();
            return res.status(200).json({
                success: true,
                count: allPokemon.length,
                data: allPokemon,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    },
    getByID: async (req, res) => {
        try {
            let id = req.query.id;
            let returnedPokemon = await pokemon.getPokemonByID(id);
            return res.status(200).json({
                success: true,
                count: returnedPokemon.length,
                data: returnedPokemon,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    }
}