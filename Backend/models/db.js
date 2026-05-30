import { MongoClient } from 'mongodb';
import { MONGO_URI, DB_NAME, COLLECTION_NAME } from '../config/index.js';

export async function getMongoCollection(collectionName = COLLECTION_NAME) {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db(DB_NAME);
  const collection = db.collection(collectionName);
  return { client, collection };
}
