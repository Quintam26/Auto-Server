const { assert } = require('chai');
const User = require('../../lib/models/user');

describe('User model', () => {
    it('Validates User Model', () => {
        const data = {
            name: 'Mark Bell',
            email: 'test@gmail.com'
        };

        const user = new User(data);
        const json = user.toJSON();
        delete json._id;
        assert.deepEqual(json, data);
    });
});