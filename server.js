let express = require("express");
let bodyParser = require("body-parser");
const userRouter = require('./api/user.js');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger/specs');

let app = express();
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

app.use('/users', userRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));

module.exports = app;