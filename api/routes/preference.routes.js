const { Router } = require("express");

module.exports = function({ PreferenceController }) {
    const router = Router();

    router.get("/", PreferenceController.getPreferences.bind(PreferenceController));
    router.get("/:id", PreferenceController.getPreference.bind(PreferenceController));
    router.post("/", PreferenceController.createPreference.bind(PreferenceController));
    // router.put("/:id", PreferenceController.updatePreference.bind(PreferenceController));
    // router.delete("/:id", PreferenceController.deletePreference.bind(PreferenceController));

    return router;
};