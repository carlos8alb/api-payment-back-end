class NotificationBusiness {
    constructor({ NotificationRepository, PaymentRepository, PaymentBusiness }) {
        this._notificationRepository = NotificationRepository;
        this._paymentRepository = PaymentRepository;
        this._paymentBusiness = PaymentBusiness;
    }

    async create(notification) {

        const notificationJson = JSON.parse(notification);

        const notificationToSave = {
            topic: notificationJson.topic,
            type: notificationJson.type,
            json: notification
        }
        const createdNotification = await this._notificationRepository.create(notificationToSave);
        if (notificationJson.type === 'payment') {
            const payment = await this._paymentBusiness.get(notificationJson.data.id);
            const paymentToSave = {
                id_mercadopago: notificationJson.data.id,
                json: JSON.stringify(payment)
            }
            const createdPayment = await this._paymentRepository.create(paymentToSave);
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