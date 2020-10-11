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
        id: {
            type: DataTypes.STRING(256),
            primaryKey: true,
            allowNull: false,
            defaultValue: ''
        },
        additional_info: { type: DataTypes.TEXT },
        auto_return: { type: DataTypes.TEXT },
        binary_mode: { type: DataTypes.BOOLEAN },
        client_id: { type: DataTypes.TEXT },
        collector_id: { type: DataTypes.INTEGER },
        coupon_code: { type: DataTypes.TEXT },
        coupon_labels: { type: DataTypes.TEXT },
        date_created: { type: DataTypes.TEXT },
        date_of_expiration: { type: DataTypes.TEXT },
        expiration_date_from: { type: DataTypes.TEXT },
        expiration_date_to: { type: DataTypes.TEXT },
        expires: { type: DataTypes.BOOLEAN },
        external_reference: { type: DataTypes.TEXT },
        init_point: { type: DataTypes.TEXT },
        internal_metadata: { type: DataTypes.TEXT },
        marketplace: { type: DataTypes.TEXT },
        marketplace_fee: { type: DataTypes.FLOAT },
        notification_url: { type: DataTypes.TEXT },
        operation_type: { type: DataTypes.TEXT },
        processing_modes: { type: DataTypes.TEXT },
        product_id: { type: DataTypes.TEXT },
        sandbox_init_point: { type: DataTypes.TEXT },
        site_id: { type: DataTypes.TEXT },
        total_amount: { type: DataTypes.FLOAT },
        last_updated: { type: DataTypes.TEXT },
        back_urls: {
            type: DataTypes.TEXT,
            get: function() {
                return JSON.parse(this.getDataValue('back_urls'));
            },
            set: function(value) {
                return this.setDataValue('back_urls', JSON.stringify(value));
            }
        },
        items: {
            type: DataTypes.TEXT,
            get: function() {
                return JSON.parse(this.getDataValue('items'));
            },
            set: function(value) {
                return this.setDataValue('items', JSON.stringify(value));
            }
        },
        payer: {
            type: DataTypes.TEXT,
            get: function() {
                return JSON.parse(this.getDataValue('payer'));
            },
            set: function(value) {
                return this.setDataValue('payer', JSON.stringify(value));
            }
        },
        payment_methods: {
            type: DataTypes.TEXT,
            get: function() {
                return JSON.parse(this.getDataValue('payment_methods'));
            },
            set: function(value) {
                return this.setDataValue('payment_methods', JSON.stringify(value));
            }
        },
        redirect_urls: {
            type: DataTypes.TEXT,
            get: function() {
                return JSON.parse(this.getDataValue('redirect_urls'));
            },
            set: function(value) {
                return this.setDataValue('redirect_urls', JSON.stringify(value));
            }
        },
        shipments: {
            type: DataTypes.TEXT,
            get: function() {
                return JSON.parse(this.getDataValue('shipments'));
            },
            set: function(value) {
                return this.setDataValue('shipments', JSON.stringify(value));
            }
        },
        differential_pricing: {
            type: DataTypes.TEXT,
            get: function() {
                return JSON.parse(this.getDataValue('differential_pricing'));
            },
            set: function(value) {
                return this.setDataValue('differential_pricing', JSON.stringify(value));
            }
        },
        json: { type: DataTypes.TEXT }
    }, {
        sequelize,
        modelName: 'Preference',
        tableName: 'preferences',
        timestamps: false
    });

    return Preference;
};