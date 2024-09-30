import mongoose from 'mongoose';
import { env } from '../utils/env.js';
export const initMongoConnection = async () => {
  try {
    const user = env('MONGO_USER');
    const password = env('MONGO_PASSWORD');
    const url = env('MONGO_URL');
    const db = env('MONGO_DB');

    await mongoose.connect(`mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0
`);

    console.log('Mongo connection successfully established!');
  } catch (err) {
    console.log('Error while setting up mongo connection', err);
    throw err;
  }
};
