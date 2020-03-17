const { Router } = require('express');
const UserTable = require('./userTable.js');

const router = new Router();

router.get('/', (req, res, next) => {
        return UserTable.getUsers()
        .then((users) => { res.json({ users }) })
        .catch(error => next(error));
});

module.exports = router;