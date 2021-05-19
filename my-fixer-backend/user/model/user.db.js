const crypto = require('crypto');

const db = require('../../db/db');
const User = require('./user');

const UserDB = {};

UserDB.getUserById = async (id) => {        
    const response = await db.query(`SELECT * FROM "user" WHERE id = ${id}`);
    if (!response.rowCount) {
        return { errorMessage: `User with id: ${id}, does not exist`};
    }

    const user = response.rows[0];

    return { user: new User(user).toResponse() };
}

UserDB.checkPassword = async (email, password) => {
    const response = await db.query(`SELECT * FROM "user" WHERE email = '${email}'`);

    if (!response.rowCount) {
        return { errorMessage: `User with email: ${email}, does not exist`};
    }

    const user = response.rows[0];

    // if (crypto.pbkdf2Sync(password, 'salt', 1000, 256, 'sha256').toString('hex') !== user.password) {
    //     return { errorMessage: 'Wrong password'};
    // }

    return { user: new User(user).toResponse() };
}

UserDB.updateUserById = async (userId, userData) => {

    const setQuery = new User(userData || {}).fields
        .filter((key) => {
            return (userData[key] !== undefined) && (key !== 'id');
        })
        .map((key) => {
            return `${key} = '${userData[key]}'`;   
        }).join(',');

    const response = await db.query(`UPDATE "user" SET ${setQuery} WHERE id = ${userId} RETURNING *`);
   
    if (!response.rowCount) {
        return { errorMessage: `Error during updete user`};
    }

    const user = response.rows[0];

    return { user: new User(user).toResponse() };
}


UserDB.deleteUserById = async (userId) => {
    const response = await db.query(`DELETE FROM "user" WHERE id = ${userId} RETURNING *`);
    
    console.log(response);

    if (!response.rowCount) {
        return { errorMessage: `Error during delete user`};
    }

    return { message: "Delete complete" };
}


UserDB.createUser = async (userData) => {

    const fields = new User(userData || {}).fields
        .filter((key) => {
            return (userData[key] !== undefined) && (key !== 'id');
        });
        
    const values = fields
        .map((key) => {
            return `'${userData[key]}'`;   
        });
    
    const query = `INSERT INTO "user" (${fields.join(',')}) VALUES (${values.join(',')})  RETURNING *`;

    console.log(query);

    const response = await db.query(query);
    
    console.log(response);

    if (!response.rowCount) {
        return { errorMessage: `Error during create user`};
    }

    const user = response.rows[0];

    return { user: new User(user).toResponse() };
}

module.exports = UserDB