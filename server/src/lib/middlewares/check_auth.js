const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    console.log(req , res)
    try {
        const decoded = jwt.verify(req.headers.authorization.split(" ")[1], 'secret');
        req.userData = decoded;
        next();
    } catch(error) {
        return res.status(401).json({
            message: 'Auth failed!'
        });
    }
};
