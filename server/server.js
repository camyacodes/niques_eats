const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');  // Import Mongoose
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

async function startApolloServer() {
  const app = express();

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serve up static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

  await new Promise(resolve => app.listen({ port: 3001 }, resolve));
  console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();
