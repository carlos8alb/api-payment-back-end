class OrderRepository {
    constructor({ db }) {
        this._db = db;
    }

    async getAll() {
        return this._db['Order'].findAndCountAll();
    }

    async get(id) {
        return this._db['Order'].findOne({ where: { id } });
    }

    async create(order) {
        return this._db['Order'].create(order);
    }

    async searchByFilter(filter) {
        return this._db['Order'].findOne({ where: filter });
    }

}

module.exports = OrderRepository;