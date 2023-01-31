// bringing in express, a node.js web application framework that facilitates in managing servers and routes
// node.js is a run time environment used to build scalable server-side network applications
const express = require('express');
// an express package that connects the GrapchQL server to an existing Express server
const { ApolloServer } = require('apollo-server-express');
const path = require('path')

// bringing in typedefs/resolvers from the schema file
const {typedefs, resolvers} = require('./schemas');
// bringing in the mongoose connection/MongoDB database
const db = require('./config/connection')

// creating a port for the server to listen for
const PORT = process.env.PORT || 3001;
// 
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

// middleware are request handlers with access to the applications requests/responses
// middleware can modify req/res objects for parsing

// middleware that parses put and post requests, allows access to the req.body, recognizes req objects as strings/arrays
app.use(express.urlencoded({extended: false}))
// middleware that recognizes request objects as a json object
app.use(express.json())

// creating an asynchronous function that starts the server that takes in typedefs, resolvers parameters
const startApolloServer = async (typedefs, resolvers) => {
    // starts the server
    await server.start();
    // applyMiddleware integrates the express server with the apolloserver, to connect the schema
    server.applyMiddleware({app})
    
    // a one time listener, starts the mongoose database
    db.once('open', () => {
        // listens for the server connection and opens the connection on the host/port
        app.listen(PORT, () => {
            console.log(`API server running on ${PORT}`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
}

// calls the async function
startApolloServer(typedefs, resolvers);
