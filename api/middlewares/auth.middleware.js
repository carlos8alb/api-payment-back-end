const jwt = require('jsonwebtoken');
const { errorHandle } = require('../../utils');

class AuthMiddleware {

    constructor({ config }) {
        this._config = config;
    }

    verifyToken = (req, res, next) => {

        const token = req.headers.authorization.split(' ')[1];
        const SEED = this._config.SEED;

        try {
            const decoded = jwt.verify(token, 'SEED');
            console.log(decoded);
            next();
        } catch (error) {
            errorHandle(res, error);
        }

    }

}


module.exports = AuthMiddleware;