const dotenv = require('dotenv');
dotenv.config({ path: './.env.local' });

const faunadb = require('faunadb');
const { If, Exists, Role, Update, CreateRole } = faunadb.query;

// Get the SECRET from the process.env
const FAUNA_SECRET = process.env.FAUNADB_SECRET_KEY;

// Create a New Client
const getClient = (secret) => {
  return new faunadb.Client({ secret });
};

// A convenience function to either create or update a function.
function CreateOrUpdateRole(obj) {
  return If(
    Exists(Role(obj.name)),
    Update(Role(obj.name), { membership: obj.membership, privileges: obj.privileges }),
    CreateRole(obj)
  );
}

module.exports = {
  FAUNA_SECRET,
  getClient,
  CreateOrUpdateRole
};
