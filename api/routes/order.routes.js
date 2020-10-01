const { Router } = require("express");

module.exports = function({ OrderController }) {
    const router = Router();

    router.get("/", OrderController.getOrders.bind(OrderController));
    router.get("/:id", OrderController.getOrder.bind(OrderController));
    // router.post("/", OrderController.createOrder.bind(OrderController));
    // router.put("/:id", OrderController.updateOrder.bind(OrderController));
    // router.delete("/:id", OrderController.deleteOrder.bind(OrderController));

    return router;
};