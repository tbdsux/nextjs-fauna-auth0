<h1 style="text-align:center;">
NextJS - FaunaDB w/ Auth0
</h1>

This is just a starter template for working with a fullstack app with `Nextjs` as a frontend, `FaunaDB` as the database and `Auth0` as the main user authentication.

#### NOTE: I am not sure if this is the best way in configuring this app, if there is a better solution, you can push a `PR` and I will gladly accept it.

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FTheBoringDude%2Fnextjs-fauna-auth0.git&env=AUTH0_SECRET,AUTH0_BASE_URL,AUTH0_ISSUER_BASE_URL,AUTH0_CLIENT_ID,AUTH0_CLIENT_SECRET,FAUNADB_SECRET_KEY)

## Development

- Install required dependencies

  ```
  yarn
  ```

- Start the development server

  ```
  yarn dev
  ```

### Setting Up the Database

The scripts folder contains the setup code.

### Auth0 Configuration

The `utils/auth0-rules` is a rule for `Auth0` that you can configure so that new users can be automatically registered or created to the database.

- Create an empty rule in your `Auth0` app.
- Copy and paste the contents ([/utils/auth0-rules/newuser.js](./utils/auth0-rules/newuser.js)) to the provided editor and save.
- You can configure it the way you want.

#### You need to set your `FAUNADB_SECRET_KEY` in your `.env.local` file or your process environment.

```
yarn setup:db
```

### Cypress Testing

- Create a Test User in your app and the following to your `Environment Variables`

  ```
  TEST_USER_EMAIL= #testusermail
  TEST_USER_PASSWORD= #testuserpassword
  ```

- You can see the sample workflow for basis in integrating with `Github Workflows`

### Deps

- NextJS
- FaunaDB Driver
- Nextjs-Auth0 SDK
- Prettier
- ESLint

##

### &copy; TheBoringDude - 2021
