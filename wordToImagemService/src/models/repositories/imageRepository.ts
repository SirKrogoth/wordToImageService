const database = require('../../configs/database');

import iImage from "../interfaces/iImage";

async function insertOneImage(image: iImage) {
    const db = await database.connect();

    const result = await db.collection(process.env.COLLECTION_PICTURES_NAME).insertOne(image);

    database.disconnect();

    return result;
}


export default {
    insertOneImage
}