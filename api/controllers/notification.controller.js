const { errorHandle } = require('../../utils');

class NotificationController {
    constructor({ NotificationService }) {
        this._notificationService = NotificationService;
    }

    async createNotification(req, res) {
        try {
            const body = JSON.stringify(req.body);
            await this._notificationService.create(body);
            return res.status(201).json({
                success: true
            })
        } catch (error) {
            errorHandle(res, error);
        }
    }

    async getNotifications(req, res) {
        try {
            let notifications = await this._notificationService.getAll();
            return res.status(200).json({
                success: true,
                data: notifications
            })
        } catch (error) {
            errorHandle(res, error);
        }

    }

    async getNotification(req, res) {
        try {
            const { id } = req.params;
            let notification = await this._notificationService.get(id);
            if (!notification) {
                return res.status(404).json({
                    success: false,
                    message: 'No existe la notificación'
                })
            }
            return res.status(200).json({
                success: true,
                data: notification
            })
        } catch (error) {
            errorHandle(res, error);
        }
    }


}

module.exports = NotificationController;