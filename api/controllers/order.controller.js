const { errorHandle } = require('../../utils');

class OrderController {
    constructor({ OrderService }) {
        this._orderService = OrderService;
    }

    async createOrder(req, res) {
        try {

            const order = await this._orderService.create({ json: JSON.stringify(body) });
            return res.status(201).json({
                success: true,
                data: order,
                message: 'Orden creada con éxito'
            })

        } catch (error) {
            errorHandle(res, error);
        }
    }

    async getOrder(req, res) {
        try {
            const { id } = req.params;
            let order = await this._orderService.get(id);
            if (!order) {
                return res.status(404).json({
                    success: false,
                    message: 'No existe la orden'
                })
            }
            return res.status(200).json({
                success: true,
                data: order
            })
        } catch (error) {
            errorHandle(res, error);
        }
    }

    async getOrders(req, res) {
        try {
            let { limit, offset } = req.query;
            let params = { limit, offset };
            let orders = await this._orderService.getAll(params);
            return res.status(200).json({
                success: true,
                data: orders
            })
        } catch (error) {
            errorHandle(res, error);
        }

    }

}

module.exports = OrderController;