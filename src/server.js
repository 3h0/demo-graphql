const { ApolloServer, gql } = require('apollo-server');

var sequelize = require('./utils/database');
var example = require('./model/example.model');

// sequelize.sync();
sequelize.sync({force:true}).then(function () {
  console.log('Okay');
}, function (err) {
  console.log('Error');
});

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(3000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
