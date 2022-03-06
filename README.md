# jwt_auth

## How to run project:
npm install
----
- cd server
- npm start
----
- cd client
- npm start

## About this project:
In this project, I'm using MERN stack and Json Web Token (JWT for short) for user authentication.

There are 4 main roles:
- default
- management
- admin
----
- default users can find and add data to MongoDB.
- management users can find, add and update data in MongoDB.
- admin users can find, add, update and delete data in MongoDB.

You can only register as a default user

To get access to admin or management privileges , view project homepage for more information.

## DB structure
There are 4 main OU's (organisational units):
- hardware review
- news management
- opinion publishing
- software review

Each OU contains divisions e.g. IT, development, finances, credential_repository(username), password, admin, management etc...
For testing purposes, we are only working with the username, password, admin, management, the rest are sample data.

In terms of Database structure, the 4 OU's are the collections and the divisions contained by the OU's are the documents

