const { Router } = require("express");

module.exports = function({ PaymentTypeController }) {
    const router = Router();

    router.get("/", PaymentTypeController.getPaymentTypes.bind(PaymentTypeController));
    router.get("/:id", PaymentTypeController.getPaymentType.bind(PaymentTypeController));
    router.post("/", PaymentTypeController.createPaymentType.bind(PaymentTypeController));
    router.put("/:id", PaymentTypeController.updatePaymentType.bind(PaymentTypeController));
    router.delete("/:id", PaymentTypeController.deletePaymentType.bind(PaymentTypeController));

    return router;
};