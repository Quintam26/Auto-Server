const router = require('express').Router();
const Car = require('../models/car');

module.exports = router 

    .get('/', (req, res, next) => {
        Car.create(req.body)
            .then(car => res.json(car))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        Car.find({ id: req.params.id })
            .lean()
            .then(car => res.json(car))
            .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        Car.deleteOne({ id: req.params.id })
            .lean()
            .then(car => res.json({ removed: !! car }))
            .catch(next);
    })
    .post('/', (req, res, next) => {
        Car.create(req.body)
            .then(car => res.json(car))
            .catch(next);
    });