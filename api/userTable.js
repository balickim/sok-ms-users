const pool = require('../databasePool');

class UserTable {
    static addUser(name, surname, groupid) {
        return new Promise((resolve, reject) => {
            pool.query(
                `insert into users (name, surname, groupid) values ($1, $2, $3);`,
                [name, surname, groupid],
                (error, response) => {
                    if (error) return reject(error);

                    resolve();
                }
            )
        });
    }

    static getUser(name, surname, groupid) {
        return new Promise((resolve, reject) => {
            pool.query(
                `SELECT * from users 
                where name = $1 AND surname = $2 AND groupid = $3`,
                [name, surname, groupid],
                (error, response) => {
                    if (error) return reject(error);

                    resolve(response.rows);
                }
            )
        });
    }

    static getUsers({ limit, offset, groupid }) {
        return new Promise((resolve, reject) => {
            pool.query(
                `SELECT * from users
                WHERE groupid = $3
                LIMIT $1 OFFSET $2`,
                [limit, offset, groupid],
                (error, response) => {
                    if (error) return reject(error);

                    resolve(response.rows);
                }
            )
        });
    }

    static getUsersByGroup({ groupid }) {
        return new Promise((resolve, reject) => {
            pool.query(
                `SELECT * from users where groupid = $1`,
                [groupid],
                (error, response) => {
                    if (error) return reject(error);

                    resolve(response.rows);
                }
            )
        });
    }
}

module.exports = UserTable;