// src: https://github.com/fauna-brecht/faunadb-auth-skeleton-with-auth0/blob/default/fauna-queries/helpers/errors.js

const handleSetupError = (promise, explanation) => {
  return promise
    .then((data) => {
      console.log(`   [ Executed ] '${explanation}'`);
      return data;
    })
    .catch((error) => {
      if (error && error.message === 'instance already exists') {
        console.warn(`   [ Skipped ] '${explanation}', it already exists`);
      } else {
        console.error(`   [ Failed  ] '${explanation}', with error:`, error);
      }
    });
};

module.exports = { handleSetupError };
