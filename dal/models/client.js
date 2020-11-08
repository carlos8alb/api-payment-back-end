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
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            unique: { args: true, msg: 'Error al generar id único' }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: { args: true, msg: 'Error al ingresar el nombre del cliente' }
        },
        seed_jwt: { type: DataTypes.STRING, allowNull: false },
        mp_access_token: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: { args: true, msg: 'Error al ingresar el token' }
        },
        mp_notification_url: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: { args: true, msg: 'Error al ingresar la url de notificación' }
        }
    }, {
        sequelize,
        modelName: 'Client',
        tableName: 'clients',
        timestamps: false
    });

    return Client;
};