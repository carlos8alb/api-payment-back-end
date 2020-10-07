'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Item extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Item.init({
        category_id: { type: DataTypes.STRING },
        currency_id: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        title: { type: DataTypes.STRING },
        quantity: { type: DataTypes.FLOAT },
        unit_price: { type: DataTypes.FLOAT }
    }, {
        sequelize,
        modelName: 'Item',
        tableName: 'items',
        timestamps: false
    });

    return Item;
};