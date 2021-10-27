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
        }
    }, {
        sequelize,
        modelName: 'Client',
        tableName: 'clients',
        timestamps: false
    });

    Client.associate = function(models) {

        Client.belongsToMany(models.PaymentType, {
            through: 'ClientPaymentType',
            as: 'client_payment_type',
            foreignKey: 'client_id'
        });

        Client.hasOne(models.MercadoPago, {
            as: 'client_mercado_pago',
            foreignKey: 'client_id'
        });

    };

    return Client;
};