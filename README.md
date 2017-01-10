## Quick0 - Easy Maintainable Auth0 Users

Develop easy maintainable auth0 users specially for developer. We created lot of test user for development purpose. 
In Auth0 its difficult to remove a user(s).

### Technology

1. Meteor (1.4)
2. ReactJS
3. MongoDB

### How To Run
```
meteor npm install
meteor --settings settings.json
```

Before run create _settings.json_ file in root project with to put Auth0 credential.
```
{
  "AUTH0": {
    "BASE_URL": " -- client auth0 domain -- ",
    "CLIENT_ID": " --client id-- ",
    "CLIENT_SECRET": " -- client secret id -- ",
    "CONNECTION": " -- connection name -- ",
    "GLOBAL_CLIENT_ID": " -- global client id -- ",
    "GLOBAL_CLIENT_SECRET": " -- global client secret --"
  },
  "public": {
    "AUTH0": {
      "BASE_URL": " -- client auth0 domain -- ",
    "CLIENT_ID": " --client id-- ",
    }
  }
}
```
