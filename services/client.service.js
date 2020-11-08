class ClientService {

    constructor({ ClientBusiness }) {
        this._clientBusiness = ClientBusiness;
    }

    async create(client) {
        const createdClient = await this._clientBusiness.create(client);
        return createdClient;
    }

    async get(id) {
        const client = await this._clientBusiness.get(id);
        return client;
    }

    async getAll(params) {
        const clients = await this._clientBusiness.getAll(params);
        return clients;
    }

    async update(id, client) {
        const updatedPayment = await this._clientBusiness.update(id, client);
        return updatedPayment;
    }

    async delete(id) {
        const deletedPayment = await this._clientBusiness.delete(id);
        return deletedPayment;
    }

}

module.exports = ClientService;