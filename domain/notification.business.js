class NotificationBusiness {
    constructor({ NotificationRepository }) {
        this._notificationRepository = NotificationRepository;
    }

    async create(notification) {

        const notificationJson = JSON.parse(notification);

        const notificationToSave = {
            topic: notificationJson.topic,
            type: notificationJson.type,
            json: notification
        }
        const createdNotification = await this._notificationRepository.create(notificationToSave);
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