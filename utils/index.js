const { createLogger, format, transports } = require('winston');

function removeWhitespace(str) {
    return str.split(/\s+/).join(' ').trim();
}

function errorHandle(res, error) {
    let errorMessage = 'Ocurrió un error. Intente nuevamente';
    if (typeof error.errors !== 'undefined') {
        errorMessage = error.errors.map((error) => { return { 'field': error.path, 'message': error.message } })
    }

    loggerError.error(`message: ${errorMessage}`);
    loggerError.error(`error: ${error.message}`);
    loggerError.error(`url: ${res.req.originalUrl}`);
    loggerError.error(`params: ${JSON.stringify(res.req.params)}`);

    return res.status(400).json({
        success: false,
        message: errorMessage,
        error: error.message
    })
}

const loggerInfo = createLogger({
    level: 'info',
    format: format.combine(
        format.simple(),
        format.timestamp(),
        format.printf(info => `[${ info.timestamp}] ${info.message }`)
    ),
    transports: [
        new transports.File({
            maxsize: 5120000,
            minsize: 5,
            filename: 'logs/logs.log',
        }),
        new transports.Console({
            level: 'debug'
        })
    ]
});

const loggerError = createLogger({
    level: 'error',
    format: format.combine(
        format.simple(),
        format.timestamp(),
        format.printf(info => `[${ info.timestamp}] ${info.message }`)
    ),
    transports: [
        new transports.File({
            maxsize: 5120000,
            minsize: 5,
            filename: 'logs/logs-error.log',
        }),
        new transports.Console({
            level: 'debug'
        })
    ]
});

module.exports = {
    removeWhitespace,
    errorHandle,
    loggerInfo,
    loggerError
}