import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';

const afterCallback = (req, res, session, state) => {
  // TODO: check if the user exists in the db
  return session;
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (e) {
      res.status(e.status || 500).end(e.message);
    }
  }
});
