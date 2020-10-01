const { errorHandle } = require('../../utils');

class PaymentTypeController {
    constructor({ PaymentTypeService }) {
        this._paymentTypeService = PaymentTypeService;
    }

    async getPaymentTypes(req, res) {
        try {
            let paymentTypes = await this._paymentTypeService.getAll();
            return res.status(200).json({
                success: true,
                data: paymentTypes
            })
        } catch (error) {
            errorHandle(res, error);
        }

    }

    async getPaymentType(req, res) {
        try {
            const { id } = req.params;
            let paymentType = await this._paymentTypeService.get(id);
            if (!paymentType) {
                return res.status(404).json({
                    success: false,
                    message: 'No existe el tipo de pago'
                })
            }
            return res.status(200).json({
                success: true,
                data: paymentType
            })
        } catch (error) {
            errorHandle(res, error);
        }
    }

    async createPaymentType(req, res) {
        try {
            const { body } = req;
            const paymentType = await this._paymentTypeService.create(body);
            return res.status(201).json({
                success: true,
                data: paymentType,
                message: 'Tipo de pago creado con éxito'
            })
        } catch (error) {
            errorHandle(res, error);
        }


    }

    async updatePaymentType(req, res) {
        try {
            const { body } = req;
            const { id } = req.params;

            const paymentType = await this._paymentTypeService.update(id, body);
            if (!paymentType) {
                return res.status(404).json({
                    success: false,
                    message: 'No existe el tipo de pago'
                })
            }
            return res.status(200).json({
                success: true,
                message: 'Tipo de pago actualizado con éxito'
            })
        } catch (error) {
            errorHandle(res, error);
        }

    }

    async deletePaymentType(req, res) {
        try {
            const { id } = req.params;
            const paymentType = await this._paymentTypeService.delete(id);
            if (!paymentType) {
                return res.status(404).json({
                    success: false,
                    message: 'No existe el tipo de pago'
                })
            }
            return res.status(200).json({
                success: true,
                message: 'Tipo de pago eliminado con éxito'
            })
        } catch (error) {
            errorHandle(res, error);
        }

    }


}

module.exports = PaymentTypeController;