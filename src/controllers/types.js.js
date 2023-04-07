const types = require("../models/types.js");

module.exports = {
    getAll: async (req, res) => {
        try {
            let allTypes = await types.getAllTypes();
            return res.status(200).json({
                success: true,
                count: allTypes.length,
                data: allTypes,
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
            let returnedType = await types.getTypesByID(id);
            return res.status(200).json({
                success: true,
                count: returnedType.length,
                data: returnedType,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    }
}