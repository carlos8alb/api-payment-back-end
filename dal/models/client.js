'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Client extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Client.init({
        id: {
            primaryKey: true,
            type: DataTypes.UUID
        },
        name: { type: DataTypes.STRING },
        mp_access_token: { type: DataTypes.STRING },
        mp_notification_url: { type: DataTypes.STRING }
    }, {
        sequelize,
        modelName: 'Client',
        tableName: 'clients',
        timestamps: false
    });

    return Client;
};