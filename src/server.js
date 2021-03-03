var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// var db = require('./config/db');
var mysql = require('./config/mysql');
var sequelize = require('./utils/database');

var example = require('./model/example.model');

sequelize.sync();
sequelize.sync({force:true});

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => {
    return 'Hello world!';
  },
};


var app = express();

//Khai báo API graphql
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// Khởi tạo server tại port 4000
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:3000/graphql');
