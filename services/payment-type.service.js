class PaymentTypeService {
    constructor({ PaymentTypeBusiness }) {
        this._paymentTypeBusiness = PaymentTypeBusiness;
    }

    async getAll() {
        const paymentTypes = await this._paymentTypeBusiness.getAll();
        return paymentTypes;
    }

    async create(payment) {
        const createdPaymentType = await this._paymentTypeBusiness.create(payment);
        return createdPaymentType;
    }

    async get(id) {
        const payment = await this._paymentTypeBusiness.get(id);
        return payment;
    }

    async update(id, payment) {
        const updatedPaymentType = await this._paymentTypeBusiness.update(id, payment);
        return updatedPaymentType;
    }

    async delete(id) {
        const deletedPaymentType = await this._paymentTypeBusiness.delete(id);
        return deletedPaymentType;
    }

}

module.exports = PaymentTypeService;