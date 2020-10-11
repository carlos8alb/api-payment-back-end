const container = require('./api/container');
const application = container.resolve('app');
const db = container.resolve('db');
const config = container.resolve('config');
const { loggerInfo, loggerError } = require('./utils');

application
    .start()
    .then(async() => {
        // if (config.ENV === 'development') { await db.sequelize.sync({ force: false }) };
        await db.sequelize.sync({ force: false, alter: true });
        loggerInfo.info(`Environment: ${ config.ENV }`);
        await db.sequelize.authenticate();
        loggerInfo.info(`Connected to ${ config.DB.database } database`);
    })
    .catch(err => {
        loggerError.error(JSON.stringify(err));
        process.exit();
    });