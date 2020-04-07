const swaggerJsdoc = require('swagger-jsdoc');
const options = {
    swaggerDefinition: {
        swagger: '2.0',
        info: {
            description: 'microservice for managing users',
            swagger: '2.0',
            title: 'Users - Zawodnicy',
            version: '0.2.0',
            contact: {
                "email": "michal.balicki@onet.pl"
            },
        },
        securityDefinitions: {
            ApiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization'
            }
        }
    },
    apis: ['api/*.js'],
};
const specs = swaggerJsdoc(options);
module.exports = specs;