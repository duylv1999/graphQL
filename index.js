const { ApolloServer } = require('apollo-server-express');
var express = require('express');


var app = express();
var mysql = require('mysql2');


// Load schema & resolvers
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

// server.applyMiddleware({app})

const server = new ApolloServer({
  typeDefs,
  resolvers 
})

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "duy123",
  database: "orange_update"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!!!")
});

server.start().then(res => {
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () =>
      console.log('Now browse to http://localhost:4000' + server.graphqlPath)
  )
})


