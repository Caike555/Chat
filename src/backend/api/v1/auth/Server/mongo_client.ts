import mongodb from 'mongodb';
import config from '../../../../config/config';
const MongoClient = mongodb.MongoClient;
const assert = require('assert');

const client = new MongoClient(config.database.AUTH_DB_URL);
client.connect(function(err: any) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(config.database.AUTH_DB_NAME);
});

export default client;


