class PaymentRepository {
    constructor({ db }) {
        this._db = db;
    }

    async getAll() {
        return this._db['Payment'].findAndCountAll();
    }

    async get(id) {
        return this._db['Payment'].findOne({ where: { id } });
    }

    async create(payment) {
        return this._db['Payment'].create(payment);
    }

    async searchByFilter(filter) {
        return this._db['Payment'].findOne({ where: filter });
    }

}

module.exports = PaymentRepository;