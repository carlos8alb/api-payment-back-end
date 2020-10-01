const container = require('./api/container');
const application = container.resolve('app');
const db = container.resolve('db');
const config = container.resolve('config');

application
    .start()
    .then(async() => {
        // if (config.ENV === 'development') { await db.sequelize.sync({ force: false }) };
        await db.sequelize.sync({ force: false, alter: true });
        console.log('Environment:', config.ENV);
        await db.sequelize.authenticate();
        console.log('Connected to', config.DB.database, 'database');
    })
    .catch(err => {
        console.log(err);
        process.exit();
    });