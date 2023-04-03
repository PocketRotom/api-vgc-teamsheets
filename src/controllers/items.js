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
    },
    getByID: async (req, res) => {
        try {
            let id = req.query.id;
            let item = await items.getItemByID(id);
            return res.status(200).json({
                success: true,
                count: item.length,
                data: item,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error
            })
        }
    }
}