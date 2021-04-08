/*
	THIS IS A BASE TEMPLATE FOR CREATING AN API ENDPOINT
*/

import { UserModel } from '@lib/models/user-model';
import type { NextApiRequest, NextApiResponse } from 'next';

const api = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.query;

  const u = new UserModel();
  const e = u.invalidateFaunaDBToken(token);

  res.end('invalidated');
};

export default api;
