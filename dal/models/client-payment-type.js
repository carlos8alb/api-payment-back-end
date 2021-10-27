'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ClientPaymentType extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    ClientPaymentType.init({
        client_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: { args: true, msg: 'Error al ingresar el id del cliente' }
        },
        payment_type_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: { args: true, msg: 'Error al ingresar el id del tipo de pago' }
        }
    }, {
        sequelize,
        modelName: 'ClientPaymentType',
        tableName: 'clients-payments-type',
        timestamps: false,
        indexes: [{
            unique: true,
            fields: ['client_id', 'payment_type_id']
        }]
    });

    return ClientPaymentType;
};