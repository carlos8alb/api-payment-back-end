class NotificationRepository {
    constructor({ db }) {
        this._db = db;
    }

    async getAll() {
        return this._db['Notification'].findAndCountAll();
    }

    async get(id) {
        return this._db['Notification'].findOne({ where: { id } });
    }

    async create(notification) {
        return this._db['Notification'].create(notification);
    }

    async searchByFilter(filter) {
        return this._db['Notification'].findOne({ where: filter });
    }

}

module.exports = NotificationRepository;