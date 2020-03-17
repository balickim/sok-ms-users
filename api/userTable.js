const pool = require('../databasePool');

class UserTable {
    static getUsers() {
        return new Promise((resolve, reject) => {
            pool.query(
                `SELECT * from users`,
                (error, response) => {
                    if (error) return reject(error);

                    resolve(response.rows);
                }
            )
        });
    }
}

module.exports = UserTable;