import { handleAuth } from '@auth0/nextjs-auth0';

export default handleAuth();

/*
--> new users will be automatically registered to the db using the auth0 rule
*/
