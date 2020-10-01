const axios = require('axios').default;

class PreferenceBusiness {
    constructor({ PreferenceRepository, config }) {
        this._preferenceRepository = PreferenceRepository;
        this._config = config;
        this.ACCESS_TOKEN = this._config.MERCADO_PAGO.ACCESS_TOKEN;
        this.NOTIFICATION_URL = this._config.MERCADO_PAGO.NOTIFICATION_URL;
    }

    async create(preference) {

        const body = preference;

        const mercadopago = require('mercadopago');

        mercadopago.configure({
            access_token: this.ACCESS_TOKEN
        });

        body.notification_url = this.NOTIFICATION_URL;
        // preference.back_urls.success = 'https://www.google.com/success';
        // preference.back_urls.pending = 'https://www.google.com/pending';
        // preference.back_urls.failure = 'https://www.google.com/failure';

        body['back_urls'] = {
            success: 'https://www.google.com/success',
            pending: 'https://www.google.com/pending',
            failure: 'https://www.google.com/failure'
        }

        const resultMercadoPago = await mercadopago.preferences.create(body);
        if (!resultMercadoPago) return null;
        const bodyPreferenceStr = JSON.stringify(resultMercadoPago.body);
        await this._preferenceRepository.create({ json: bodyPreferenceStr });
        return resultMercadoPago;

    }

    async get(id) {
        const preference = await axios.get(`https://api.mercadopago.com/checkout/preferences/${ id }`, {
            params: {
                access_token: this.ACCESS_TOKEN
            }
        });
        if (!preference) return null;
        return preference.data;
    }

    async getAll(params) {
        const preferences = await axios.get(`https://api.mercadopago.com/checkout/preferences/search`, {
            params: {
                access_token: this.ACCESS_TOKEN,
                limit: params.limit || 0,
                offset: params.offset || 0
            }
        });
        if (!preferences) return null;
        return preferences.data;
    }

    async searchByFilter(filter) {
        const preference = await this._preferenceRepository.searchByFilter(filter);
        if (!preference) return null;
        return preference;
    }

}

module.exports = PreferenceBusiness;