class PaymentTypeBusiness {
    constructor({ PaymentTypeRepository }) {
        this._paymentTypeRepository = PaymentTypeRepository;
    }
    async getAll() {
        const paymentTypes = await this._paymentTypeRepository.getAll();
        return paymentTypes;
    }

    async get(id) {
        const paymentType = await this._paymentTypeRepository.get(id);
        if (!paymentType) return null;
        return paymentType;
    }

    async create(paymentType) {
        const createdPaymentType = await this._paymentTypeRepository.create(paymentType);
        return createdPaymentType;
    }

    async update(id, paymentType) {
        paymentType.id = id;
        const updatedPaymentType = await this._paymentTypeRepository.update(id, paymentType);
        if (!updatedPaymentType) return null;
        return updatedPaymentType;
    }

    async delete(id) {
        return await this._paymentTypeRepository.delete(id);
    }

}

module.exports = PaymentTypeBusiness;