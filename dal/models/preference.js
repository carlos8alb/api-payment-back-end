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
        id: { type: DataTypes.UUID, primaryKey: true },
        json: { type: DataTypes.TEXT },
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
        marketplace_fee: { type: DataTypes.INTEGER },
        notification_url: { type: DataTypes.TEXT },
        operation_type: { type: DataTypes.TEXT },
        processing_modes: { type: DataTypes.TEXT },
        product_id: { type: DataTypes.TEXT },
        sandbox_init_point: { type: DataTypes.TEXT },
        site_id: { type: DataTypes.TEXT },
        total_amount: { type: DataTypes.TEXT },
        last_updated: { type: DataTypes.TEXT }
    }, {
        sequelize,
        modelName: 'Preference',
        tableName: 'preferences',
        timestamps: false
    });

    return Preference;
};