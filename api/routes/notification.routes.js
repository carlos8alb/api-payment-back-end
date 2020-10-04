const { Router } = require("express");

module.exports = function({ NotificationController }) {
    const router = Router();

    router.post("/", NotificationController.createNotification.bind(NotificationController));
    router.get("/", NotificationController.getNotifications.bind(NotificationController));
    // router.get("/:id", NotificationController.getNotification.bind(NotificationController));
    // router.put("/:id", NotificationController.updateNotification.bind(NotificationController));
    // router.delete("/:id", NotificationController.deleteNotification.bind(NotificationController));

    return router;
};