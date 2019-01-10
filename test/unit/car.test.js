const { assert } = require('chai');
const Car = require('../../lib/models/car');

describe('Car model', () => {

    it('Validate Car model', () => {
        const data = {
            manufacturer: 'Nissan',
            model: 'Skyline',
            year: '1992',
            engine: 'V6',
            id: '123'
        };

        const car = new Car(data);
        const json = car.toJSON();
        delete json._id;
        assert.deepEqual(json, data);
    });
});