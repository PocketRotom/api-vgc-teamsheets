const abilities = require("../models/abilities.js");

module.exports = {
    getAll: async (req, res) => {
        try {
            let allAbilities = await abilities.getAllAbilities();
            return res.status(200).json({
                success: true,
                count: allAbilities.length,
                data: allAbilities,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    }
}