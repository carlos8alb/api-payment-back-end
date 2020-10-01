const { asClass, createContainer, asFunction, asValue } = require('awilix');

// app start
const StartUp = require('./startup');
const Server = require('./server');
const config = require('../config/environments');

// middlewares
const {
    AuthMiddleware
} = require('../api/middlewares');

// routes
const Routes = require('../api/routes');
const OrderRoutes = require('../api/routes/order.routes');
const PaymentRoutes = require('../api/routes/payment.routes');
const PreferenceRoutes = require('../api/routes/preference.routes');
const PaymentTypeRoutes = require('../api/routes/payment-type.routes');
const NotificationRoutes = require('../api/routes/notification.routes');

// business
const {
    OrderBusiness,
    PaymentBusiness,
    PaymentTypeBusiness,
    PreferenceBusiness,
    NotificationBusiness
} = require('../domain');

// controllers
const {
    OrderController,
    PaymentController,
    PaymentTypeController,
    PreferenceController,
    NotificationController
} = require('../api/controllers');

// services
const {
    PaymentService,
    OrderService,
    PreferenceService,
    PaymentTypeService,
    NotificationService
} = require('../services');

// repositories
const {
    OrderRepository,
    PaymentRepository,
    PaymentTypeRepository,
    PreferenceRepository,
    NotificationRepository
} = require('../dal/repositories');

// db
const db = require('../dal/models');
const Auth = require('./middlewares/auth.middleware');

const container = createContainer();

container
    .register({
        config: asValue(config)
    })
    .register({
        db: asValue(db)
    })
    .register({
        app: asClass(StartUp).singleton(),
        router: asFunction(Routes).singleton(),
        server: asClass(Server).singleton(),
    })
    .register({
        AuthMiddleware: asClass(AuthMiddleware).singleton()
    })
    .register({
        OrderRoutes: asFunction(OrderRoutes).singleton(),
        PaymentRoutes: asFunction(PaymentRoutes).singleton(),
        PreferenceRoutes: asFunction(PreferenceRoutes).singleton(),
        PaymentTypeRoutes: asFunction(PaymentTypeRoutes).singleton(),
        NotificationRoutes: asFunction(NotificationRoutes).singleton()
    })
    .register({
        OrderController: asClass(OrderController).singleton(),
        PaymentController: asClass(PaymentController).singleton(),
        PaymentTypeController: asClass(PaymentTypeController).singleton(),
        PreferenceController: asClass(PreferenceController).singleton(),
        NotificationController: asClass(NotificationController).singleton()
    })
    .register({
        PaymentService: asClass(PaymentService).singleton(),
        OrderService: asClass(OrderService).singleton(),
        PaymentTypeService: asClass(PaymentTypeService).singleton(),
        PreferenceService: asClass(PreferenceService).singleton(),
        NotificationService: asClass(NotificationService).singleton()
    })
    .register({
        OrderBusiness: asClass(OrderBusiness).singleton(),
        PaymentBusiness: asClass(PaymentBusiness).singleton(),
        PaymentTypeBusiness: asClass(PaymentTypeBusiness).singleton(),
        PreferenceBusiness: asClass(PreferenceBusiness).singleton(),
        NotificationBusiness: asClass(NotificationBusiness).singleton()
    })
    .register({
        OrderRepository: asClass(OrderRepository).singleton(),
        PaymentRepository: asClass(PaymentRepository).singleton(),
        PaymentTypeRepository: asClass(PaymentTypeRepository).singleton(),
        PreferenceRepository: asClass(PreferenceRepository).singleton(),
        NotificationRepository: asClass(NotificationRepository).singleton()
    });

module.exports = container;