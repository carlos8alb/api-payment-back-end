require('dotenv').config();

const { NODE_ENV } = process.env;

let currentEnv;

switch (NODE_ENV) {
    case 'production':
        const PRODUCTION = require('./production');
        currentEnv = PRODUCTION;
        break;

    case 'qa':
        const QA = require('./qa');
        currentEnv = QA;
        break;

    default:
        const DEVELOPMENT = require('./development');
        currentEnv = DEVELOPMENT;
        break;
}

module.exports = currentEnv;