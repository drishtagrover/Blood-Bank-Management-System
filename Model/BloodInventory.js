const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BloodInventory = sequelize.define('BloodInventory', {
    inventory_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    blood_group: {
        type: DataTypes.STRING,
        allowNull: false
    },
    units_available: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    last_updated: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    storage_location: {
        type: DataTypes.STRING
    },
    expiry_date: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = BloodInventory;