const { Router } = require('express');
const UserTable = require('./userTable.js');

const router = new Router();

router.post('/', (req, res, next) => {
        let { name, surname, groupid } = req.body;

        UserTable.addUser(name, surname, groupid)
                .then(() => res.json({ message: 'dodano' }))
                .catch(error => next(error));
});

router.get('/', (req, res, next) => {
        let { name, surname, groupid } = req.body;

        UserTable.getUser(name, surname, groupid)
                .then((user) => { res.json({ user }) })
                .catch(error => next(error));
});

router.get('/list', (req, res, next) => {
        let limit = req.query.limit;
        let from = req.query.from;
        let groupid = req.query.groupid;

        UserTable.getUsers({ howMany: limit, fromRecord: from, groupid: groupid })
                .then((users) => { res.json({ users }) })
                .catch(error => next(error));
});

router.get('/:groupid', (req, res, next) => {
        const { groupid } = req.params;

        UserTable.getUsersByGroup({ groupid })
                .then((users) => { res.json({ users }) })
                .catch(error => next(error));
});

module.exports = router;