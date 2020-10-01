class PreferenceService {

    constructor({ PreferenceBusiness }) {
        this._preferenceBusiness = PreferenceBusiness;
    }

    async create(preference) {
        const createdEntity = await this._preferenceBusiness.create(preference);
        return createdEntity;
    }

    async get(id) {
        const preference = await this._preferenceBusiness.get(id);
        return preference;
    }

    async getAll(params) {
        const preferences = await this._preferenceBusiness.getAll(params);
        return preferences;
    }

}

module.exports = PreferenceService;