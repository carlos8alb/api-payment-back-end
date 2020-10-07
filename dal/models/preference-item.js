'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PreferenceItem extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    PreferenceItem.init({
        preferece_id: { type: DataTypes.TEXT },
        item_id: { type: DataTypes.TEXT }
    }, {
        sequelize,
        modelName: 'PreferenceItem',
        tableName: 'preference-item',
        timestamps: false
    });

    return PreferenceItem;
};