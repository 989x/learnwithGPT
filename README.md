# learn-node.js-mongoDB-IOsonoTAN

# ep 4

Create CRUD API with Node.js and connect to MongoDB (Mongoose) very easy!!

https://www.youtube.com/watch?v=bKAEXB7WReo&list=PLKu89HRrYLaqUetwXo9pKUUI1gXZenplJ&index=6

```bash
$ npm i -S fastify
```

```bash
$ npm i -D nodemon 
```

```bash
$ npm i -S mongoose 
```

```bash
$ npm i -S bcrypt 
```
 
## fig database mongodb

```bash
$ docker run --name mongo -p27017:27017 -d mongo
```

## insert mongodb

## post
```bash
$ curl -H "Content-Type: application/json" --data '{"username":"IOsonoTAN", "password": "12345", "name": "Krissade", "surname": "Boontrigratn"}' http://localhost:3000/users
```
## get
http://localhost:3000/users
## patch
```bash
$ curl --request PATCH -H "Content-Type: application/json" --data '{"name": "First Name", "surname": "Last Name", "userId": "617f9bc7617f2e1df04e9dd7"}' http://localhost:3000/users
```
## delete
```bash
$ curl --request DELETE -H "Content-Type: application/json" --data '{"userId": "617f9bc7617f2e1df04e9dd7"}' http://localhost:3000/users
```
 
# ep 5

Create API Login on Node.js that so easy! and get JWT Token to verify identity, How?

https://www.youtube.com/watch?v=knZBSIXoVLE&list=PLKu89HRrYLaqUetwXo9pKUUI1gXZenplJ&index=6  

```bash
$ curl --request POST -H "Content-Type: application/json" --data '{"username": "IOsonoTAN","password":"123456"}' http://localhost:3000/login
```

```bash
$ curl --request POST -H "Content-Type: application/json" --data '{"username": "IOsonoTAN","password":"123456", "name":"Krissada", "usrname":"Boontrigratn"}' http://localhost:3000/users
```

```bash
$ curl --request POST -H "Content-Type: application/json" --data '{"username": "IOsonoTAN","password":"123456", "name":"Krissada", "usrname":"Boontrigratn"}' http://localhost:3000/login
```

## JWT
```bash
$ npm i -S jsonwebtoken
```