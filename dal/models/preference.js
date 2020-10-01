'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Preference extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Preference.init({
        json: {
            type: DataTypes.TEXT
        }
    }, {
        sequelize,
        modelName: 'Preference',
        tableName: 'preferences',
        timestamps: false
    });

    return Preference;
};