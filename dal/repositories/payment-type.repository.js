class PaymentTypeRepository {
    constructor({ db }) {
        this._db = db;
    }

    async getAll() {
        return this._db['PaymentType'].findAndCountAll();
    }

    async get(id) {
        return this._db['PaymentType'].findOne({ where: { id } });
    }

    async create(paymentType) {
        return this._db['PaymentType'].create(paymentType);
    }

    async update(id, paymentType) {
        const paymentTypeFounded = await this.get(id);
        if (!paymentTypeFounded) return null;
        return this._db['PaymentType'].update(paymentType, { where: { id } });
    }

    async delete(id) {
        return this._db['PaymentType'].destroy({ where: { id } });
    }

    async buscarPorFiltro(filtro) {
        return this._db['PaymentType'].findOne({ where: filtro });
    }

}

module.exports = PaymentTypeRepository;