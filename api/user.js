const { authorize } = require('../secrets/authorize');
const { Router } = require('express');
const UserTable = require('./userTable.js');

const router = new Router();

/**
* @swagger
* /users:
*   post:
*     tags:
*     - users
*     summary: Add user
*     security:
*     - ApiKeyAuth: []
*     operationId: addUser
*     consumes:
*     - application/json
*     parameters:
*     - name: user
*       in: body
*       schema:
*         type: object
*         properties:
*           name:
*             type: string
*           surname:
*             type: string
*           groupid:
*             type: integer
*     responses:
*       200:
*         description: Ok
*/

router.post('/', (req, res, next) => {
        let { name, surname, groupid } = req.body;

        authorize(req.headers.authorization)
                .then(() => {
                        console.log(name, surname, groupid);
                        return UserTable.addUser(name, surname, groupid)
                })
                .then(() => res.json({ message: 'user added' }))
                .catch(error => next(error));
});

router.get('/', (req, res, next) => {
        let { name, surname, groupid } = req.body;

        authorize(req.headers.authorization)
                .then(() => {
                        return UserTable.getUser(name, surname, groupid)
                })
                .then((user) => { res.json({ user }) })
                .catch(error => next(error));
});

/**
* @swagger
* /users/list:
*   get:
*     tags:
*     - "users"
*     summary: "Get for pagination"
*     security:
*     - ApiKeyAuth: []
*     operationId: "getUsersForPagination"
*     consumes:
*     - "application/json"
*     produces:
*     - "application/json"
*     parameters:
*     - in: "query"
*       name: limit
*       type: "integer"
*       format: "int64"
*       required: true
*       description: The numbers of items to return.
*     - in: "query"
*       name: offset
*       type: "integer"
*       format: "int64"
*       required: true
*       description: The number of items to skip before starting to collect the result set.
*     - in: "query"
*       name: groupid
*       type: "integer"
*       format: "int64"
*       required: true
*       description: The numbers of items to return.
*     responses:
*       200:
*         description: "Ok"
*/

router.get('/list', (req, res, next) => {
        const limit = req.query.limit;
        const offset = req.query.offset;
        const groupid = req.query.groupid;
        authorize(req.headers.authorization)
                .then(() => {
                        return UserTable.getUsers({ limit: limit, offset: offset, groupid: groupid })
                })
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
*     security:
*     - ApiKeyAuth: []
*     operationId: "getUsersByGroup"
*     consumes:
*     - "application/json"
*     produces:
*     - "application/json"
*     parameters:
*     - in: "path"
*       name: "groupid"
*       type: "integer"
*       format: "int64"
*       description: "Group ID of user"
*       required: true
*     responses:
*       200:
*         description: "Ok"
*/

router.get('/:groupid', (req, res, next) => {
        const { groupid } = req.params;
        console.log(groupid);
        authorize(req.headers.authorization)
                .then(() => {
                        return UserTable.getUsersByGroup({ groupid })
                })
                .then((users) => { res.json({ users }) })
                .catch(error => next(error));
});

module.exports = router;