const router = require('express').Router();
const User = require('../models/user');

module.exports = router

    .get('/', (req, res, next) => {
        User.create(req.body)
            .then(user => res.json(user))
            .catch(next);
    });