const { Router } = require("express");

module.exports = function({ ClientController }) {
    const router = Router();

    router.get("/", ClientController.getClients.bind(ClientController));
    router.get("/:id", ClientController.getClient.bind(ClientController));
    router.post("/", ClientController.createClient.bind(ClientController));
    router.put("/:id", ClientController.updateClient.bind(ClientController));
    router.delete("/:id", ClientController.deleteClient.bind(ClientController));

    return router;
};