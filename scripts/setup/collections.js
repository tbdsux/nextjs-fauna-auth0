const faunadb = require('faunadb');

const { Collection, CreateIndex, CreateCollection, Index, If, Exists } = faunadb.query;

// Create `user_by_id` index
const CreateUsersByIdIndex = CreateIndex({
  name: 'user_by_id',
  unique: true,
  serialized: true,
  source: Collection('users'),
  terms: [
    {
      field: ['data', 'user']
    }
  ]
});
async function createIndex(client) {
  return await client.query(If(Exists(Index('user_by_id')), false, CreateUsersByIdIndex));
}

// Create the `users` collection
const CreateUsersCollection = CreateCollection({ name: 'users' });
async function createCollections(client) {
  return await client.query(If(Exists(Collection('users')), false, CreateUsersCollection));
}

module.exports = {
  createIndex,
  createCollections
};
