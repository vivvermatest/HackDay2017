const morgan = require('morgan');

exports.getAllMessage = (req, res) => {
    res.status(200).send({message: "Hello Message"});
}
exports.getAllUsers = (req, res) => {
    res.status(200).send({message: "Users list"});
}
exports.verifyToken = (req, res, next) => {
    const x = req.query.token;
    if (x === 'nexus') {
        next();
    } else {
        res.send(401).send({message: 'Invalid token'});
    }
}