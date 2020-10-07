class NotificationBusiness {
    constructor({ NotificationRepository, PaymentRepository, PaymentBusiness, OrderRepository, OrderBusiness }) {
        this._notificationRepository = NotificationRepository;
        this._paymentRepository = PaymentRepository;
        this._paymentBusiness = PaymentBusiness;
        this._orderRepository = OrderRepository;
        this._orderBusiness = OrderBusiness;
    }

    async create(notification) {

        const notificationJson = JSON.parse(notification);

        const notificationToSave = notificationJson;
        notificationToSave.json = notification;

        const createdNotification = await this._notificationRepository.create(notificationToSave);

        if (notificationJson.type === 'payment') {
            const payment = await this._paymentBusiness.get(notificationJson.data.id);
            const paymentToSave = {
                id_mercadopago: notificationJson.data.id,
                json: JSON.stringify(payment)
            }
            const createdPayment = await this._paymentRepository.create(paymentToSave);
        }

        if (notificationJson.topic === 'merchant_order') {
            const orderId = notificationJson.resource.split('/').pop();
            const order = await this._orderBusiness.get(orderId);
            const orderToSave = {
                id_mercadopago: orderId,
                json: JSON.stringify(order)
            }
            const createdOrder = await this._orderRepository.create(orderToSave);
        }

        return createdNotification;
    }

    async getAll() {
        const notifications = await this._notificationRepository.getAll();
        return notifications;
    }

    async get(id) {
        const notification = await this._notificationRepository.get(id);
        if (!notification) return null;
        return notification;
    }

    async searchByFilter(filter) {
        const notification = await this._notificationRepository.searchByFilter(filter);
        if (!notification) return null;
        return notification;
    }

}

module.exports = NotificationBusiness;