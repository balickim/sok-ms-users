let express = require("express");
let bodyParser = require("body-parser");
const userRouter = require('./api/user.js');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger/swagger');

let app = express();
app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));

module.exports = app;