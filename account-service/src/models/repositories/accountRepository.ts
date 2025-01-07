const database = require('../../configs/database');

import iAccount from "../interfaces/iAccount";
import iAccountCompare from "../interfaces/iAccountCompare";

async function insertOneAccount(account: iAccount){
    const db = await database.connect();

    const result = await db.collection(process.env.COLLECTION_USER_NAME).insertOne(account);

    database.disconnect();

    return result;
}

async function findByUser(user: string){
    const db = await database.connect();

    const result = await db.collection(process.env.COLLECTION_USER_NAME).findOne({user: user});

    database.disconnect();

    return result;
}


export default {
    insertOneAccount,
    findByUser
}