const faunadb = require('faunadb');
const { CreateOrUpdateRole } = require('./fql.js');

const { Collection, Index } = faunadb.query;

const CreateNormalUserRole = CreateOrUpdateRole({
  name: 'NormalUser',
  privileges: [
    {
      resource: Collection('users'),
      actions: {
        read: true
      }
    },
    {
      resource: Index('user_by_id'),
      actions: {
        read: true
      }
    }
  ],
  membership: [
    {
      resource: Collection('users')
    }
  ]
});
async function createRole(client) {
  return await client.query(CreateNormalUserRole);
}

module.exports = {
  createRole
};
