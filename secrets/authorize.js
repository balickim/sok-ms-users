const APIKEY = 'R6r@pWav@h2*TY5V%J_2';

const authorize = (Authorization) => {
    return new Promise((resolve, reject) => {
        if (APIKEY === Authorization) {
            return resolve();
        } else {
            const error = 'ERROR! - Incorrect apikey';

            return reject(error);
        }
    });
};

module.exports = { authorize };