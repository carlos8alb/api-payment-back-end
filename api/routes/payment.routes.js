const { Router } = require("express");

module.exports = function({ PaymentController }) {
    const router = Router();

    router.get("/", PaymentController.getPayments.bind(PaymentController));
    router.get("/:id", PaymentController.getPayment.bind(PaymentController));
    router.post("/", PaymentController.createPayment.bind(PaymentController));
    // router.put("/:id", PaymentController.updatePayment.bind(PaymentController));
    // router.delete("/:id", PaymentController.deletePayment.bind(PaymentController));

    return router;
};