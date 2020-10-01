module.exports = {
    ENV: process.env.NODE_ENV, //production
    SEED: process.env.SEED_JWT,
    PORT: process.env.PORT,
    DB: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: 'mysql',
        logging: false
    },
    MERCADO_PAGO: {
        ACCESS_TOKEN: process.env.ACCESS_TOKEN,
        NOTIFICATION_URL: process.env.NOTIFICATION_URL
    }
};