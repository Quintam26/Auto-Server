const router = require('express').Router();
const Car = require('../models/car');

module.exports = router 

    .get('/', (req, res, next) => {
        Car.create(req.body)
            .then(car => res.json(car))
            .catch(next);
    });