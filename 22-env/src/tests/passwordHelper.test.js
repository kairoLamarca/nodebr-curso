const assert = require('assert');
const PasswordHelper = require('../helpers/passwordHelper');

const SENHA = 'Kairo@32123123';
const HASH = '$2b$04$IpvyZddag2nhAz4wTO/yfO3gk0bd5tUOwMA0Grs74zxWn9bjRTNve'

describe('UserHelper test suite', function () {
    it('deve gerar um hash a partir de uma senha', async () => {
        const result = await PasswordHelper.hashPassword(SENHA);

        assert.ok(result.length > 10)
    })

    it('deve vcomparar uma senha e seu hash', async () => {
        const result = await PasswordHelper.comparePassword(SENHA, HASH);

        assert.ok(result);
    })
})