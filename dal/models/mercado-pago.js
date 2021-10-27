'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class MercadoPago extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    MercadoPago.init({
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: { args: true, msg: 'Error al ingresar el id del cliente' }
        },
        mp_access_token: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: { args: true, msg: 'Error al ingresar access token' }
        },
        mp_notification_url: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: { args: true, msg: 'Error al ingresar url notificación' }
        }
    }, {
        sequelize,
        modelName: 'MercadoPago',
        tableName: 'mercado-pago',
        timestamps: false
    });

    return MercadoPago;
};