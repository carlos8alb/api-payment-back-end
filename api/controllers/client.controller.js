const { errorHandle } = require('../../utils');

class ClientController {
    constructor({ ClientService }) {
        this._clientService = ClientService;
    }

    async getClients(req, res) {
        try {
            let clients = await this._clientService.getAll();
            return res.status(200).json({
                success: true,
                data: clients
            })
        } catch (error) {
            errorHandle(res, error);
        }

    }

    async getClient(req, res) {
        try {
            const { id } = req.params;
            let client = await this._clientService.get(id);
            if (!client) {
                return res.status(404).json({
                    success: false,
                    message: 'No existe el cliente'
                })
            }
            return res.status(200).json({
                success: true,
                data: client
            })
        } catch (error) {
            errorHandle(res, error);
        }
    }

    async createClient(req, res) {
        try {
            const { body } = req;
            const client = await this._clientService.create(body);
            return res.status(201).json({
                success: true,
                data: client,
                message: 'Cliente creado con éxito'
            })
        } catch (error) {
            errorHandle(res, error);
        }


    }

    async updateClient(req, res) {
        try {
            const { body } = req;
            const { id } = req.params;

            const client = await this._clientService.update(id, body);
            if (!client) {
                return res.status(404).json({
                    success: false,
                    message: 'No existe el cliente'
                })
            }
            return res.status(200).json({
                success: true,
                message: 'Cliente actualizado con éxito'
            })
        } catch (error) {
            errorHandle(res, error);
        }

    }

    async deleteClient(req, res) {
        try {
            const { id } = req.params;
            const client = await this._clientService.delete(id);
            if (!client) {
                return res.status(404).json({
                    success: false,
                    message: 'No existe el cliente'
                })
            }
            return res.status(200).json({
                success: true,
                message: 'Cliente eliminado con éxito'
            })
        } catch (error) {
            errorHandle(res, error);
        }

    }


}

module.exports = ClientController;