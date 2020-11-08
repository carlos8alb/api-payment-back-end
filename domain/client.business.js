class ClientBusiness {
    constructor({ ClientRepository }) {
        this._clientRepository = ClientRepository;
    }
    async getAll() {
        const clients = await this._clientRepository.getAll();
        return clients;
    }

    async get(id) {
        const client = await this._clientRepository.get(id);
        if (!client) return null;
        return client;
    }

    async create(client) {
        const createdClient = await this._clientRepository.create(client);
        return createdClient;
    }

    async update(id, client) {
        client.id = id;
        const updatedClient = await this._clientRepository.update(id, client);
        if (!updatedClient) return null;
        return updatedClient;
    }

    async delete(id) {
        return await this._clientRepository.delete(id);
    }

}

module.exports = ClientBusiness;