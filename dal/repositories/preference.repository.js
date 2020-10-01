class PreferenceRepository {
    constructor({ db }) {
        this._db = db;
    }

    async getAll() {
        return this._db['Preference'].findAndCountAll();
    }

    async get(id) {
        return this._db['Preference'].findOne({ where: { id } });
    }

    async create(preference) {
        return this._db['Preference'].create(preference);
    }

    async searchByFilter(filter) {
        return this._db['Preference'].findOne({ where: filter });
    }

}

module.exports = PreferenceRepository;