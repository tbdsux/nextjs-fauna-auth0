const { FAUNA_SECRET, getClient } = require('./fql.js');
const { handleSetupError } = require('./helpers.js');
const { createCollections, createIndex } = require('./collections.js');
const { createRole } = require('./roles.js');

async function setupDatabase() {
  if (!FAUNA_SECRET) {
    console.error(
      '\n [!] Please set the `FAUNADB_SECRET_KEY` in you .env or environment variables.\n'
    );
    process.exit(1);
  }

  // create collection
  await handleSetupError(createCollections(getClient(FAUNA_SECRET)), 'user collection').then(
    async (d) => {
      if (d) {
        await handleSetupError(createIndex(getClient(FAUNA_SECRET)), 'user index');
      }
    }
  );

  // create the role
  await handleSetupError(createRole(getClient(FAUNA_SECRET)), 'normal user role');
}

setupDatabase();
