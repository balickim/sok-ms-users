const pool = require('../databasePool');

class UserTable {
    static getUsers({ howMany, fromRecord }) {
        return new Promise((resolve, reject) => {
            pool.query(
                `SELECT * from users LIMIT $1 OFFSET $2`,
                [howMany, fromRecord],
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