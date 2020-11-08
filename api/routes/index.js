const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

module.exports = function({
    PaymentRoutes,
    OrderRoutes,
    PreferenceRoutes,
    PaymentTypeRoutes,
    NotificationRoutes,
    ClientRoutes
}) {
    const router = Router();
    const apiRoute = Router();

    apiRoute
        .use(cors())
        .use(bodyParser.json())
        .use(compression());

    apiRoute.use('/order', OrderRoutes);
    apiRoute.use('/payment', PaymentRoutes);
    apiRoute.use('/preference', PreferenceRoutes);
    apiRoute.use('/payment-type', PaymentTypeRoutes);
    apiRoute.use('/notification', NotificationRoutes);
    apiRoute.use('/client', ClientRoutes);

    router.use('/api', apiRoute);

    return router;
};