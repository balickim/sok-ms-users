const { Router } = require('express');
const UserTable = require('./userTable.js');

const router = new Router();

/**
* @swagger
* /users:
*   post:
*     tags:
*     - "users"
*     summary: "Add user"
*     description: ""
*     operationId: "addUser"
*     consumes:
*     - "application/json"
*     - "application/xml"
*     produces:
*     - "application/xml"
*     - "application/json"
*     parameters:
*     - in: "body"
*       name: "body"
*       description: "Pet object that needs to be added to the store"
*       required: true
*     responses:
*       405:
*         description: "Invalid input"
*     security:
*     - petstore_auth:
*       - "write:pets"
*       - "read:pets"
*/

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

/**
* @swagger
* /users/{groupid}:
*   get:
*     tags:
*     - "users"
*     summary: "Get users with specific group id"
*     description: ""
*     operationId: "getUsersByGroup"
*     consumes:
*     - "application/json"
*     - "application/xml"
*     produces:
*     - "application/xml"
*     - "application/json"
*     parameters:
*     - in: "path"
*       name: "groupid"
*       type: "integer"
*       format: "int64"
*       description: "Group ID of user"
*       required: true
*     responses:
*       405:
*         description: "Invalid input"
*     security:
*     - petstore_auth:
*       - "write:pets"
*       - "read:pets"
*/

router.get('/:groupid', (req, res, next) => {
        const { groupid } = req.params;

        UserTable.getUsersByGroup({ groupid })
                .then((users) => { res.json({ users }) })
                .catch(error => next(error));
});

module.exports = router;