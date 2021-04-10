# NextJS - FaunaDB w/ Auth0

This is just a starter template for working with a fullstack app with Nextjs as a frontend, fauna as the database and auth0 as the main user authentication.

#### NOTE: I am not sure if this is the best way in configuring this app, if there is a better solution, you can push a `PR` and I will gladly accept it.

## Development

- Install required dependencies

  - The scripts folder contains a helper for setting up your database. It is not required or used by the main app and you should also install its dependencies

    ```
    cd scripts && yarn
    ```

  - Main app
    ```
    yarn install
    ```

- Clone and start the app
  ```
  yarn dev
  ```

### Setting Up the Database

The scripts fodler contains the setup code.

#### You need to set your `FAUNADB_SECRET_KEY` in your `.env.local` file or your process environment.

```
yarn setup:db
```

### Deps

- NextJS
- FaunaDB Driver
- nextjs-auth0 SDK

##

### &copy; TheBoringDude - 2021
