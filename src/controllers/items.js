const items = require("../models/items.js");

module.exports = {
    getAll: async (req, res) => {
        try {
            let allItems = await items.getAllItems();
            return res.status(200).json({
                success: true,
                count: allItems.length,
                data: allItems,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    }
}