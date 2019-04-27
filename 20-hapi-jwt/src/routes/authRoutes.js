const BaseRoute = require('./base/baseRoute');
const Joi = require('joi')
const Boom = require('boom');
const failAction = (request, headers, erro) => {
    throw erro
}