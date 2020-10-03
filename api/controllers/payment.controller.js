const { errorHandle } = require('../../utils');

class PaymentController {
    constructor({ PaymentService }) {
        this._paymentService = PaymentService;
    }

    async createPayment(req, res) {

        try {

            const payment = await this._paymentService.create({ json: JSON.stringify(body) });
            return res.status(201).json({
                success: true,
                data: payment,
                message: 'Pago creado con éxito'
            })

        } catch (error) {
            errorHandle(res, error);
        }
    }

    async getPayment(req, res) {
        try {
            const { id } = req.params;
            let payment = await this._paymentService.get(id);
            if (!payment) {
                return res.status(404).json({
                    success: false,
                    message: 'No existe el pago'
                })
            }
            return res.status(200).json({
                success: true,
                data: payment
            })
        } catch (error) {
            errorHandle(res, error);
        }
    }

    async getPayments(req, res) {
        try {
            let { limit, offset } = req.query;
            let params = { limit, offset };
            let payments = await this._paymentService.getAll(params);
            return res.status(200).json({
                success: true,
                data: payments
            })
        } catch (error) {
            errorHandle(res, error);
        }

    }

}

module.exports = PaymentController;