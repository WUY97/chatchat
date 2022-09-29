const jwt = require('jsonwebtoken');

const config = process.env;

const authSocket = (socket,next) => {
    const token = socket.handshake.auth?.token;

    try {
        const decoded = jwt.verify(token, config.REACT_APP_TOKEN_KEY);
        socket.user = decoded;
    } catch (err) {
        const socketError = new Error('NOT_AUTHORIZED');
        return next(socketError);
    }

    next();
}

module.exports = authSocket;