const { Router } = require('express');
const UserTable = require('./userTable.js');

const router = new Router();

router.get('/', (req, res, next) => {
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