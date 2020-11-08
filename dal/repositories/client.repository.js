class Client {
    constructor({ db }) {
        this._db = db;
    }

    async getAll() {
        return this._db['Client'].findAndCountAll();
    }

    async get(id) {
        return this._db['Client'].findOne({ where: { id } });
    }

    async create(client) {
        return this._db['Client'].create(client);
    }

    async update(id, client) {
        const clientFounded = await this.get(id);
        if (!clientFounded) return null;
        return this._db['Client'].update(client, { where: { id } });
    }

    async delete(id) {
        return this._db['Client'].destroy({ where: { id } });
    }

    async buscarPorFiltro(filtro) {
        return this._db['Client'].findOne({ where: filtro });
    }

}

module.exports = Client;