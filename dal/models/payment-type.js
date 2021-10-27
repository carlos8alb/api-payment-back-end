'use strict';
const { Model } = require('sequelize');
const { removeWhitespace } = require('../../utils');

module.exports = (sequelize, DataTypes) => {
    class PaymentType extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    PaymentType.init({
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            validate: {
                notEmpty: { args: false, msg: 'La descripción no puede ser vacia' }
            },
            unique: { args: true, msg: 'Ya existe el tipo de pago ingresado' }
        }
    }, {
        sequelize,
        modelName: 'PaymentType',
        tableName: 'payment-types',
        timestamps: false
    });

    PaymentType.addHook('afterValidate', (paymentType, options) => {
        paymentType.description = removeWhitespace(paymentType.getDataValue('description'));
    });

    PaymentType.associate = function(models) {
        PaymentType.belongsToMany(models.Client, {
            through: 'ClientPaymentType',
            as: 'payment-type',
            foreignKey: 'payment_type_id'
        });
    };

    return PaymentType;
};