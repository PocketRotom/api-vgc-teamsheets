const moves = require("../models/moves.js");

module.exports = {
    getAll: async (req, res) => {
        try {
            let allMoves = await moves.getAllMoves();
            return res.status(200).json({
                success: true,
                count: allMoves.length,
                data: allMoves,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    }
}