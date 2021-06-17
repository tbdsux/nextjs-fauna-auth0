import { getSession, handleAuth, handleCallback, handleLogout, Session } from '@auth0/nextjs-auth0';
import { AfterCallback } from '@auth0/nextjs-auth0/dist/auth0-session';
import { UserModel } from '@fauna/models/user-model';
import { NextApiRequest, NextApiResponse } from 'next';

/* --> ALTERNATIVE w/out using Auth0 Rules
const afterCallback = async (req: NextApiRequest, res: NextApiResponse, session, state) => {
  return await CreateUserIfNotExists(session.user).then(async () => {
    const token = await obtainFaunaDBToken(session.user.sub);
    session.user.token = token;
    return session;
  });
};
*/

const afterCallback: AfterCallback = async (
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  state
) => {
  const user = new UserModel();
  const token = await user.obtainFaunaDBToken(session.user.sub);

  session.user.token = token;
  return session;
};

export default handleAuth({
  async callback(req: NextApiRequest, res: NextApiResponse) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
  async logout(req: NextApiRequest, res: NextApiResponse) {
    try {
      // NOTE: I am not sure about this process, if this is right
      // invalidate token first
      const { user } = getSession(req, res);
      const u = new UserModel();

      await u.invalidateFaunaDBToken(user.token);

      // then, logout
      await handleLogout(req, res);
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  }
});

/*
--> new users will be automatically registered to the db using the auth0 rule
*/

/*
  NOTE: /api/auth/[...auth] -> nextjs-auth0 api router handler
*/
