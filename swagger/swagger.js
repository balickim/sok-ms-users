const swaggerJsdoc = require('swagger-jsdoc');
const options = {
    apis: ['api/*.js'],
    swaggerDefinition: {
        info: {
            description: 'microservice for managing users',
            swagger: '2.0',
            title: 'Users - Zawodnicy',
            version: '1.0.0',
        },
    },
};
const specs = swaggerJsdoc(options);
module.exports = specs;