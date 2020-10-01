const { errorHandle } = require('../../utils');

class OrderController {
    constructor({ OrderService }) {
        this._orderService = OrderService;
    }

    async getOrders(req, res) {
        try {
            let orderes = await this._orderService.getAll();
            return res.status(200).json({
                success: true,
                data: orderes
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

}

module.exports = OrderController;