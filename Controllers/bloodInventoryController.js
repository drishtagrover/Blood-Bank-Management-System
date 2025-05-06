const BloodInventory = require('../Model/BloodInventory')
exports.getAllBloodInventory = async (req, res) => {
    try {
        const bloodInventory = await BloodInventory.findAll();
        res.json(bloodInventory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.searchBloodInventory = async (req, res) => {
    try {
        const { blood_group } = req.query;
        const results = await BloodInventory.findAll({
            where: { blood_group }
        });
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};