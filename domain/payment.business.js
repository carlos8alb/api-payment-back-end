class PaymentBusiness {

    constructor({ PaymentRepository }) {
        this._paymentRepository = PaymentRepository;
    }

    async create(payment) {
        const createdPayment = await this._paymentRepository.create(payment);
        return createdPayment;
    }

    async getAll() {
        const payments = await this._paymentRepository.getAll();
        return payments;
    }

    async get(id) {
        const payment = await this._paymentRepository.get(id);
        if (!payment) return null;
        return payment;
    }

    async searchByFilter(filter) {
        const payment = await this._paymentRepository.searchByFilter(filter);
        if (!payment) return null;
        return payment;
    }

}

module.exports = PaymentBusiness;