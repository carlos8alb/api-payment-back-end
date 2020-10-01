class NotificationService {

    constructor({ NotificationBusiness }) {
        this._notificationBusiness = NotificationBusiness;
    }

    async getAll() {
        const notifications = await this._notificationBusiness.getAll();
        return notifications;
    }

    async create(notification) {
        const createdNotification = await this._notificationBusiness.create(notification);
        return createdNotification;
    }

    async get(id) {
        const notification = await this._notificationBusiness.get(id);
        return notification;
    }

}

module.exports = NotificationService;