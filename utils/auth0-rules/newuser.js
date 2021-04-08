function newUser(user, context, callback) {
  const fauna = require('faunadb');

  const { query } = fauna;
  const { Create, Collection, If, Exists, Get, Match, Index, Select } = query;

  const client = new fauna.Client({
    domain: 'db.fauna.com',
    secret: configuration.FAUNA_SERVER_KEY
  });

  client.query(
    If(
      Exists(Match(Index('user_by_id'), user.user_id)),
      true,
      Create(Collection('users'), {
        data: {
          user: user.user_id,
          picture: user.picture,
          name: user.name,
          email: user.email
        }
      })
    )
  );

  return callback(null, user, context);
}
