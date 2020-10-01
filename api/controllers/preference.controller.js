const { errorHandle } = require('../../utils');

class PreferenceController {
    constructor({ PreferenceService }) {
        this._preferenceService = PreferenceService;
    }

    async createPreference(req, res) {
        try {
            const { body } = req;
            const preference = await this._preferenceService.create(body);
            return res.status(201).json({
                success: true,
                init_point: preference.body.init_point
            })
        } catch (error) {
            errorHandle(res, error);
        }
    }

    async getPreference(req, res) {
        try {
            const { id } = req.params;
            let preference = await this._preferenceService.get(id);
            if (!preference) {
                return res.status(404).json({
                    success: false,
                    message: 'No existe la preferencia'
                })
            }
            return res.status(200).json({
                success: true,
                data: preference
            })
        } catch (error) {
            errorHandle(res, error);
        }
    }

    async getPreferences(req, res) {
        try {
            let { limit, offset } = req.query;
            let params = { limit, offset };
            let preferences = await this._preferenceService.getAll(params);
            return res.status(200).json({
                success: true,
                data: preferences
            })
        } catch (error) {
            errorHandle(res, error);
        }

    }

}

module.exports = PreferenceController;