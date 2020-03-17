let express = require("express");
let bodyParser = require("body-parser");
const userRouter = require('./api/user.js');

let app = express();
app.use(bodyParser.json());

app.use('/user', userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));

module.exports = app;